from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def test_db(request):
    try:
        db_conn = connections['default']
        c = db_conn.cursor()
        return JsonResponse({
            "status": "success",
            "message": "Database connection successful!"
        })
    except OperationalError as e:
        return JsonResponse({
            "status": "error",
            "message": "Database connection failed!",
            "error": str(e)
        }, status=500)

@csrf_exempt
def index(request):

	return render(request, "index.html")

@csrf_exempt
def thankyou(request):

	return render(request, "thankyou.html")

@csrf_exempt
def consent(request):

	return render(request, "consent.html")

@csrf_exempt
def save_phaseone_data(request):
    if request.method == 'GET':
        try:
            print("Received data:", request.GET)  # Debug print
		subject_id = request.GET.get('subject_id')
		session_id = request.GET.get('session_id')
		study_id = request.GET.get('study_id')
		index = request.GET.get('index')
		event_type = request.GET.get('event_type')
		block_type = request.GET.get('block_type')
		block = request.GET.get('block')
		trial_label = request.GET.get('trial_label')
		coherence = request.GET.get('coherence')
		dot_correct = request.GET.get('dot_correct')
		direction = request.GET.get('direction')
		key_press = request.GET.get('key_press')
		dot_rt = request.GET.get('dot_rt')
		word = request.GET.get('word')
            
            if subject_id is not None:
                trial = PhaseOneData.objects.create(
			trial = PhaseOneData.objects.create(subject_id = subject_id, session_id = session_id, study_id = study_id, index = index, event_type = event_type, block_type = block_type, block = block, trial_label = trial_label, coherence = coherence, dot_correct = dot_correct, direction = direction, key_press = key_press, dot_rt = dot_rt, word = word) # add your variables
			trial.save(using = 'default') # Remember, this is our database dictionary from settings.py
                )
                print("Data saved successfully")  # Debug print
                return JsonResponse({'status': 'success'})
            
        except Exception as e:
            print(f"Error saving data: {str(e)}")  # Debug print
            return JsonResponse({'status': 'error', 'message': str(e)}, status=500)

    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)

@csrf_exempt
def save_phaseone_data(request):
	if request.method == 'GET':
		subject_id = request.GET.get('subject_id')
		session_id = request.GET.get('session_id')
		study_id = request.GET.get('study_id')
		index = request.GET.get('index')
		event_type = request.GET.get('event_type')
		block_type = request.GET.get('block_type')
		block = request.GET.get('block')
		trial_label = request.GET.get('trial_label')
		coherence = request.GET.get('coherence')
		dot_correct = request.GET.get('dot_correct')
		direction = request.GET.get('direction')
		key_press = request.GET.get('key_press')
		dot_rt = request.GET.get('dot_rt')
		word = request.GET.get('word')

		if subject_id is not None:
			trial = PhaseOneData.objects.create(subject_id = subject_id, session_id = session_id, study_id = study_id, index = index, event_type = event_type, block_type = block_type, block = block, trial_label = trial_label, coherence = coherence, dot_correct = dot_correct, direction = direction, key_press = key_press, dot_rt = dot_rt, word = word) # add your variables
			trial.save(using = 'default') # Remember, this is our database dictionary from settings.py

	return render(request, "index.html")

@csrf_exempt
def save_phasetwo_data(request):
	if request.method == 'GET':
		subject_id = request.GET.get('subject_id')
		session_id = request.GET.get('session_id')
		study_id = request.GET.get('study_id')
		index = request.GET.get('index')
		event_type = request.GET.get('event_type')
		block_type = request.GET.get('block_type')
		block = request.GET.get('block')
		trial_label = request.GET.get('trial_label')
		coherence = request.GET.get('coherence')
		dot_correct = request.GET.get('dot_correct')
		direction = request.GET.get('direction')
		key_press = request.GET.get('key_press')
		dot_rt = request.GET.get('dot_rt')

		if subject_id is not None:
			trial = PhaseTwoData.objects.create(subject_id = subject_id, session_id = session_id, study_id = study_id, index = index, event_type = event_type, block_type = block_type, block = block, trial_label = trial_label, coherence = coherence, dot_correct = dot_correct, direction = direction, key_press = key_press, dot_rt = dot_rt) # add your variables
			trial.save(using = 'default') # Remember, this is our database dictionary from settings.py

	return render(request, "index.html")

@csrf_exempt
def save_phaseoneconfidence_data(request):
	if request.method == 'GET':
		subject_id = request.GET.get('subject_id')
		session_id = request.GET.get('session_id')
		study_id = request.GET.get('study_id')
		index = request.GET.get('index')
		one_confidence = request.GET.get('one_confidence')

		if subject_id is not None:
			trial = PhaseOneConfidence.objects.create(subject_id = subject_id, session_id = session_id, study_id = study_id, index = index, one_confidence = one_confidence) # add your variables
			trial.save(using = 'default') # Remember, this is our database dictionary from settings.py

	return render(request, "index.html")

@csrf_exempt
def save_phasetwoconfidence_data(request):
	if request.method == 'GET':
		subject_id = request.GET.get('subject_id')
		session_id = request.GET.get('session_id')
		study_id = request.GET.get('study_id')
		index = request.GET.get('index')
		two_confidence = request.GET.get('two_confidence')

		if subject_id is not None:
			trial = PhaseTwoConfidence.objects.create(subject_id = subject_id, session_id = session_id, study_id = study_id, index = index, two_confidence = two_confidence) # add your variables
			trial.save(using = 'default') # Remember, this is our database dictionary from settings.py

	return render(request, "index.html")

@csrf_exempt
def save_phasetworepeat_data(request):
	if request.method == 'GET':
		subject_id = request.GET.get('subject_id')
		session_id = request.GET.get('session_id')
		study_id = request.GET.get('study_id')
		index = request.GET.get('index')
		repeat = request.GET.get('repeat')
		repeat_rt = request.GET.get('repeat_rt')
		word = request.GET.get('word')
		word_correct = request.GET.get('word_correct')
		word_rt = request.GET.get('word_rt')

		if subject_id is not None:
			trial = PhaseTwoRepeat.objects.create(subject_id = subject_id, session_id = session_id, study_id = study_id, index = index, repeat = repeat, repeat_rt = repeat_rt, word = word, word_correct = word_correct, word_rt = word_rt) # add your variables
			trial.save(using = 'default') # Remember, this is our database dictionary from settings.py

	return render(request, "index.html")

@csrf_exempt
def save_ques_data(request):
	if request.method == 'GET':
		subject_id = request.GET.get('subject_id')
		session_id = request.GET.get('session_id')
		study_id = request.GET.get('study_id')
		ques_name = request.GET.get('ques_name')
		item_no = request.GET.get('item_no')
		response = request.GET.get('response')

		if subject_id is not None:
			trial = QuesData.objects.create(subject_id = subject_id, session_id = session_id, study_id = study_id, ques_name = ques_name, item_no = item_no, response = response) # add your variables
			trial.save(using = 'default') # Remember, this is our database dictionary from settings.py

	return render(request, "index.html")

