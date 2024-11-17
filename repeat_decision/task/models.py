from django.db.models import Model, TextField, ForeignKey, AutoField, FloatField

class PhaseOneData(Model): # Your table storing the trial data sent by ajax
        subject_id = TextField(max_length = 25) # Must set max_length. Prolific IDs are 24 characters long.
        session_id = TextField(max_length = 25)
        study_id = TextField(max_length = 25)
        index = FloatField()
        event_type = TextField(max_length = 25)
        block_type = FloatField()
        block = FloatField()
        trial_label = FloatField()
        coherence = FloatField()
        dot_correct = FloatField()
        direction = FloatField()
        key_press = FloatField()
        dot_rt = FloatField()
        word = TextField(max_length = 25)

class PhaseTwoData(Model): # Your table storing the trial data sent by ajax
        subject_id = TextField(max_length = 25) # Must set max_length. Prolific IDs are 24 characters long.
        session_id = TextField(max_length = 25)
        study_id = TextField(max_length = 25)
        index = FloatField()
        event_type = TextField(max_length = 25)
        block_type = FloatField()
        block = FloatField()
        trial_label = FloatField()
        coherence = FloatField()
        dot_correct = FloatField()
        direction = FloatField()
        key_press = FloatField()
        dot_rt = FloatField()

class PhaseOneConfidence(Model):
        subject_id = TextField(max_length = 25) # Must set max_length. Prolific IDs are 24 characters long.
        session_id = TextField(max_length = 25)
        study_id = TextField(max_length = 25)
        index = FloatField()
        one_confidence = FloatField()

class PhaseTwoConfidence(Model):
        subject_id = TextField(max_length = 25) # Must set max_length. Prolific IDs are 24 characters long.
        session_id = TextField(max_length = 25)
        study_id = TextField(max_length = 25)
        index = FloatField()
        two_confidence = FloatField()

class PhaseTwoRepeat(Model):
        subject_id = TextField(max_length = 25) # Must set max_length. Prolific IDs are 24 characters long.
        session_id = TextField(max_length = 25)
        study_id = TextField(max_length = 25)
        index = FloatField()
        repeat = FloatField()
        repeat_rt = FloatField()
        word = TextField(max_length = 25)
        word_correct = FloatField()
        word_rt = FloatField()

class QuesData(Model):
        subject_id = TextField(max_length = 25)
        session_id = TextField(max_length = 25)
        study_id = TextField(max_length = 25)
        ques_name = TextField(max_length = 100)
        item_no = FloatField()
        response = FloatField()


# Create your models here.
