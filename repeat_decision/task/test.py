#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Jan  6 16:17:14 2020

@author: bsong115
"""
import csv
import numpy as np

num_trials            = 62
total_words_per_trial = 3
max_bonus             = 0.80

verylow = []

with open('ratcliffwordpool_randomlist_434.csv') as csv_file:
     wordlist = csv.reader(csv_file)
     next(wordlist)
     for line in wordlist:
          verylow.append(line[2])
          print(line)
          print(line[2])

    #words for the particular individual

nb_eachtrial = 3

individualverylow = np.random.choice(verylow,nb_eachtrial*num_trials,replace=False)


trial_list = np.asarray(individualverylow)
trial_list = trial_list.reshape((num_trials,nb_eachtrial)).tolist()
print (trial_list)
print(len(trial_list))