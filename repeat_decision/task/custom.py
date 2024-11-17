# this file imports custom routes into the experiment server

from flask import Blueprint, render_template, request, jsonify, Response, abort, current_app
from jinja2 import TemplateNotFound
from functools import wraps
from sqlalchemy import or_

from psiturk.psiturk_config import PsiturkConfig
from psiturk.experiment_errors import ExperimentError, InvalidUsage
from psiturk.user_utils import PsiTurkAuthorization, nocache

# # Database setup
from psiturk.db import db_session, init_db
from psiturk.models import Participant
from json import dumps, loads

# load the configuration options
config = PsiturkConfig()
config.load_config()
myauth = PsiTurkAuthorization(config)  # if you want to add a password protect route use this

# explore the Blueprint
custom_code = Blueprint('custom_code', __name__, template_folder='templates', static_folder='static')



###########################################################
#  serving warm, fresh, & sweet custom, user-provided routes
#  add them here
###########################################################

num_trials            = 20
total_words_per_trial = 12
max_bonus             = 2

@custom_code.route('/get_word_lists', methods=['GET'])
def get_word_lists():
    import csv
    import numpy as np

    verylow = []

    with open('ratcliffwordpool_randomlist_434.csv') as csv_file:
        wordlist = csv.reader(csv_file)
        next(wordlist)
        for line in wordlist:
            verylow.append(line[2])

    #words for the particular individual

    nb_eachtrial = 12

    individualverylow = np.random.choice(verylow,nb_eachtrial*num_trials,replace=False)


    trial_list = np.asarray(individualverylow)
    trial_list = trial_list.reshape((num_trials,nb_eachtrial)).tolist()

    resp = {'trial_list': trial_list}
    return jsonify(**resp)

#----------------------------------------------
# example computing bonus
#----------------------------------------------

@custom_code.route('/compute_bonus', methods=['GET'])
def compute_bonus():
    # check that user provided the correct keys
    # errors will not be that gracefull here if being
    # accessed by the Javascrip client
    if not ('uniqueId' in request.args):
        raise ExperimentError('improper_inputs')  # i don't like returning HTML to JSON requests...  maybe should change this
    uniqueId = request.args['uniqueId']

    try:
    #if True:
        # lookup user in database
        user = Participant.query.\
               filter(Participant.uniqueid == uniqueId).\
               one()
        user_data = loads(user.datastring) # load datastring from JSON

        num_correct = 0
        for record in user_data['data']: # for line in data file
            trial = record['trialdata']
            if trial['event_type'] == "first" and trial['block_type'] == 1 and trial['dot_correct'] == 1:
                num_correct += 1
            elif trial['event_type'] == "first" and trial['block_type'] == 2 and trial['dot_correct'] == 1:
                num_correct +=3
            elif trial['event_type'] == "second" and trial['block_type'] == 1 and trial['dot_correct'] == 1:
                num_correct += 1
            elif trial['event_type'] == "second" and trial['block_type'] == 2 and trial['dot_correct'] == 1:
                num_correct += 3
            if trial['event_type'] == "second" and trial['block_type'] == 1 and trial['word_correct'] == 1:
                num_correct += 1
            elif trial['event_type'] == "second" and trial['block_type'] == 2 and trial['word_correct'] == 1:
                num_correct += 3
        user.bonus = round((float(num_correct) / (num_trials * total_words_per_trial * 6)) * max_bonus,2)
        db_session.add(user)
        db_session.commit()
        resp = {"compute_bonus": "success"}
        return jsonify(**resp)
    except:
        abort(404)  # again, bad to display HTML, but...
