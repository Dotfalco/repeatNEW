function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

// Capture info from Prolific
var subject_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
var study_id = jsPsych.data.getURLVariable('STUDY_ID');
var session_id = jsPsych.data.getURLVariable('SESSION_ID');
//console.log(subject_id)
//console.log(study_id)
//console.log(session_id)

//MY CODE FOR GETTING WORD_LIST
nestArray = function(word_list, slice_index) {
  var list_return = [];
  for(i = 0; i < (228/slice_index); i++) //Modify depending on max
    list_return[i] = word_list.slice((i*slice_index), (i*slice_index)+slice_index)
    return list_return;
}

shuffle = function(array) {
var currentIndex = array.length, temporaryValue, randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {

  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  // And swap it with the current element.
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}

return array;
}

var library_list = ["beside",	"edge",	"enter",	"favor",	"literary",	"looks",	"tone",	"desire",	"economy",	"maximum",	"reality",	"separate",	"term",	"gray",	"indicate",	"providence",	"session",	"twenty",	"essential",	"file",	"immediate",	"neck",	"nine",	"opposite",	"round",	"trip",	"crisis",	"fresh",	"instance",	"impossible",	"regular",	"yesterday",	"aware",	"begin",	"broad",	"learn",	"strange",	"concept",	"distribution",	"shape",	"build",	"financial",	"otherwise",	"philosophy",	"previous",	"scientific",	"sight",	"assistance",	"bright",	"touch",	"active",	"bottom",	"carry",	"poetry",	"develop",	"famous",	"regard",	"balance",	"dance",	"equal",	"pass",	"base",	"civil",	"complex",	"condition",	"measure",	"objective",	"structure",	"leadership",	"obvious",	"thin",	"annual",	"authority",	"lord",	"remain",	"everyone",	"practice",	"sign",	"someone",	"source",	"tradition",	"wait",	"worth",	"proper",	"behavior",	"primary",	"usual",	"communist",	"follow",	"radiation",	"status",	"suppose",	"thousand",	"bridge",	"concern",	"happy",	"popular",	"share",	"glass",	"actual",	"walk",	"unless",	"demand",	"rise",	"supply",	"date",	"original",	"race",	"unit",	"despite",	"eight",	"role",	"spent",	"drive",	"afternoon",	"easily",	"hardly",	"reach",	"write",	"attitude",	"determine",	"stress",	"analysis",	"continue",	"distance",	"none",	"ahead",	"deep",	"democratic",	"expect",	"income",	"language",	"pretty",	"principle",	"extent",	"heavy",	"speak",	"standard",	"wish",	"born",	"choice",	"function",	"include",	"poor",	"seven",	"stay",	"design",	"latter",	"straight",	"corner",	"nuclear",	"specific",	"fiscal",	"length",	"serious",	"appear",	"character",	"middle",	"main",	"test",	"additional",	"march",	"progress",	"technical",	"charge",	"approach",	"feed",	"manner",	"reaction",	"farm",	"herself",	"wide",	"beautiful",	"consider",	"easy",	"fear",	"somewhat",	"spring",	"freedom",	"movement",	"direct",	"effective",	"lead",	"myself",	"piece",	"wrong",	"average",	"month",	"former",	"science",	"step",	"move",	"inside",	"stage",	"beyond",	"person",	"brown",	"else",	"hope",	"live",	"late",	"particular",	"recent",	"return",	"support",	"complete",	"except",	"east",	"basis",	"dark",	"everything",	"greater",	"section",	"third",	"nature",	"alone",	"increase",	"personal",	"road",	"modern",	"near",	"peace",	"mean",	"believe",	"type",	"value",	"various",	"hard",	"strong",	"black",	"plan",	"therefore",	"north",	"century",	"rate",	"outside",	"morning",	"total",	"military",	"short",	"effect",	"level",	"education",	"able",	"feel",	"provide",	"further",	"clear",	"front",	"necessary",	"common",	"control",	"future",	"cost",	"seem",	"force",	"full",	"true",	"turn",	"close",	"individual",	"change",	"south",	"position",	"reason",	"economic",	"available",	"federal",	"moment",	"study",	"special",	"behind",	"cannot",	"miss",	"political",	"free",	"real",	"keep",	"sure",	"period",	"shall",	"together",	"tell",	"already",	"half",	"really",	"week",	"experience",	"seen",	"anything",	"past",	"quite",	"across",	"either",	"today",	"five",	"whether",	"local",	"example",	"name",	"above",	"human",	"itself",	"perhaps",	"matter",	"whole",	"help",	"different",	"thus",	"certain",	"kind",	"problem",	"service",	"open",	"done",	"want",	"thing",	"development",	"power",	"least",	"ever",	"along",	"four",	"within",	"need",	"become",	"large",	"white",	"early",	"often",	"important",	"among",	"form",	"possible",	"rather",	"second",	"national",	"order",	"present",	"several",	"side",	"social",	"young",	"toward",	"give",	"next",	"point",	"later",	"find",	"look",	"going",	"night",	"nothing",	"better",	"head",	"enough",	"almost",	"think",	"fact",	"something",	"away",	"every",	"upon",	"high",	"once",	"went",	"thought",	"small",	"however",	"around",	"place",	"again",	"without",	"during",	"himself",	"three",	"take",	"came",	"against",	"come",	"since",	"year",	"great",	"might",	"last",	"another",	"know",	"same",	"never",	"under",	"being",	"between",	"both",	"here",	"long",	"still",	"very",	"good",	"little",	"those",	"each",	"should",	"down",	"your",	"much",	"back",	"through",	"must",	"many",	"also",	"most",	"over",	"such",	"first",	"these",	"could",	"some",	"other",	"than",	"them",	"into",	"about",	"what",	"more",	"will",	"been",	"their",	"would",	"there",	"were",	"have",	"from",	"this",	"with"]

shuffle(library_list)
word_list = nestArray(library_list, 6)
//END MY CODE FOR WORD LIST

jsPsych.data.addProperties({
  subject_id: subject_id,
  study_id: study_id,
  session_id: session_id
});

function runExperiment() {

  var fixation_duration = 1000;//1000

  function randomIntFromInterval(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  if (Math.random()<0.5) {
    var block_order = [1,2];
  } else {
    var block_order = [2,1];
  }

  var timeline = [];

  var n3 = 2; //multiple of three. If we set 6 words per trial, then n3 should be 2.
  //console.log(word_list);
  var dots_coherence = [0.075,0.20,0.45];
  var dots_direction =[0,180]; //0 is right, 180 is left
  var direction_list = jsPsych.randomization.repeat(dots_direction,word_list.length*word_list[0].length/2);
  //console.log(direction_list);

  var welcome_block = {
      type: "fullscreen",
      message: `<p>Welcome to the experiment.</p>
                <p>The experiment takes about 60 minutes to complete on average. </p>
                <p>Some people will take more and some people will take less time.</p>
                <p>A bonus is awarded based on the number of correct responses.</p>
                <p>Click 'continue' to begin when you are ready.</p><p>Please note, this experiment will run in full screen mode.</p>`
  }

  var friendlyreminder = {
     type: "html-keyboard-response",
     choices: [32],
     stimulus:`<h3>Please note:</h3>
             <p>While most participants in online studies make a good faith effort to engage with the task, unfortunately there are some participants who attempt to game the system. </p>
             <p>Submissions that <strong>do not</strong> meet a minimum performance criterion or are deemed fraudulent or not thoughtfully considered using other means <strong>may not be compensated</strong>.</p>
             <p>We greatly appreciate your participation in this experiment and your attention during the task.</p>
             <p>Please press the SPACEBAR to continue.</p>`,
             post_trial_gap: 200
  };

  var instruction1 = {
      type: "html-keyboard-response",
      choices: [32],
      stimulus: "<p>The experiment is broken up into several blocks, each block consisting of two parts (each part will be clearly marked and the instructions repeated).</p>" +
                "<p></p>" +
                 "<p>In the first part, on each trial, you will see an array of moving dots." +
                 "<p>Some of the dots will be moving in the same direction (LEFT or RIGHT) and the remaining dots will appear at random.</p>" +
                 "<p>Your job is to determine if the dots are moving left or right. </p>" +
                 "<p>After you make a choice, you will be asked about how confident you are in your decision (LOW or HIGH).</p>" +
                 "<p>After your confidence choice, you will also see a word which uniquely identifies this trial.</p>" +
                 "<p>Try to remember and associate your decision with the word.</p>" +
                 "<div style='float: center;'><img src='/static/images/first_phase_simple.png'></img></div>" +
                 "<p>Press the SPACEBAR when you are ready to proceed.</p>"
  }

  var instruction2 = {
    type: "html-keyboard-response",
    choices: [32],
    stimulus: "<p>During the second part of each block, two things will happen on each trial.</p>" +
              "<p>First, you will see one of the words from the first part.</p>" +
              "<p>When you see a word, try to recall which direction you chose (LEFT or RIGHT).</p>" +
              "<p>After you select a direction, you will be asked about how accurate you believe your memory is (LOW or HIGH).</p>" +
              "<p>After your selection of memory accuracy, you will also be asked if you wish to revisit the array of dots (NO or YES).</p>"+
              "<p>This will allow you to revisit the decision to possibly revise your answer.</p>" +
              "<p>Following that optional decision, the same array of dots will appear as when you first saw the word in the first half (if you choose YES).</p>" +
              "<p>If you are sure about your decision, you can simply select the same direction right away.</p>" +
              "<p>If you are unsure, you can watch the dots again and possibly revise your answer.</p>" +
              "<div style='float: center;'><img src='/static/images/second_phase_simple.png'></img></div>" +
              "<p>Press the SPACEBAR when you are ready to proceed.</p>"
  }

  var instruction3 = {
       type: "html-keyboard-response",
       choices: [32],
       stimulus: "<p>You will use your left index finger to press the <strong>Q</strong> key to specify LEFT, and your right index finger to press the <strong>P</strong> key to specify RIGHT.</p>" +
                 "<p>Please practice positioning your hands now.</p>" +
                 "<p>Press the SPACEBAR when you are ready to proceed.</p>" +
                 "<div style='float: center;'><img src='/static/images/instruction_simple.png'></img></div>"
   }

  var instruction4 = {
       type: "html-keyboard-response",
       choices: [32],
       stimulus: "<p>You will get a <b>bonus</b> depending on the <b>number of correct responses</b> (correctly judging the direction of dots when seeing a dot array, and correctly remembering your decision).</p>" +
                 "<p>It is important to try to do both correctly -- to make correct decisions, and to remember them.</p>" +
                  "<p></p>" +
                 "<p>Press the SPACEBAR when you are ready to proceed.</p>"
  }


  var demoprompt = {
       type: "html-keyboard-response",
       choices: [32],
       stimulus: '<h3>You will now have the opportunity to try a practice block before starting the main experiment.</h3> <p>Press the SPACEBAR to start.</p>'
  };
  
  timeline.push(welcome_block, friendlyreminder, instruction1, instruction2, instruction3, instruction4, demoprompt);

  var blank = {
    type: "html-keyboard-response",
    stimulus: "",
    choices: jsPsych.NO_KEYS,
    trial_duration: 400 //randomIntFromInterval(200,400)
  }

  var fixation = {
    type: 'html-keyboard-response-marker-fixation',
    stimulus: '<div style="font-size:150px;">+</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: fixation_duration,
  }

  var phase_1_instruction = {
      type: "html-keyboard-response",
      choices: [32],
      stimulus: "<h3>New block (First phase)</h3>" +
                 "<p>On each trial, you will see an array of moving dots. Some of the dots will be moving in the same direction (LEFT or RIGHT) and the remaining dots will appear at random.</p>" +
                 "<p>Your job is to determine if the dots are moving left or right.</p>" +
                 "<p>After you make a choice, you will be asked about how confident you are in your decision (LOW or HIGH).</p>"+
                 "<p>After your confidence choice, you will see a word which uniquely identifies this trial.</p>" +
                 "<p>Try to remember and associate your decision with the word.</p>" +
                 "<p>Remember, use your left index finger to press the <strong>Q</strong> key to specify LEFT, and your right index finger to press the <strong>P</strong> key to specify RIGHT.</p>" +
                 "<div style='float: center;'><img src='/static/images/first_phase_simple.png'></img></div>" +
                 "<p>Press the SPACEBAR to continue.</p>"
  };

  var phase_2_instruction = {
    type: "html-keyboard-response",
    choices: [32],
    stimulus: "<h3>(Second Phase)</h3>" +
              "<p>You will now see each word again. When you see the word, select which direction you chose (LEFT or RIGHT) for the associated dot array.</p>" +
              "<p>After you select a direction, you will be asked about how accurate you believe your memory is (LOW or HIGH).</p>"+
              "<p>After your selection of memory accuracy, you will also be asked if you wish to revisit the array of dots (NO or YES).</p>"+
              "<p>This will allow you to revisit the decision to possibly revise your answer.</p>"+
              "<p>Following that optional decision, you will see the associated dot array once again. If you are sure about your decision, you can simply select the same direction right away.</p>" +
              "<p>If you are unsure, you can watch the dots again and possibly revise your answer.</p>" +
              "<p>Remember, use your left index finger to press the <strong>Q</strong> key to specify LEFT, and your right index finger to press the <strong>P</strong> key to specify RIGHT.</p>" +
              "<div style='float: center;'><img src='/static/images/second_phase_simple.png'></img></div>" +
              "<p>Press the SPACEBAR to continue.</p>",
  };

  var demo_list = jsPsych.randomization.shuffle(["terrain", "joker", "splendid", "gorgeous","elephant", "pencil"]);
  var demo_direction = jsPsych.randomization.repeat(dots_direction,demo_list.length/2);
  //console.log(demo_direction);
  timeline.push(phase_1_instruction);
  var demo_dots_match_word=[];


  var demo_dots_coherence_list = jsPsych.randomization.repeat(dots_coherence,2);
  for (var trial_index = 0; trial_index < demo_list.length; trial_index++) {
    var current_coherence = demo_dots_coherence_list[trial_index];
    var correct_direction = demo_direction[trial_index];
    //console.log(demo_direction);
    //console.log(current_coherence);
    //console.log(correct_direction);

    if (correct_direction == 0) {
      var correct_choice = 'p';
    } else {
      var correct_choice = 'q';
    }
    //console.log(correct_choice);

    var stimulus = demo_list[trial_index];

    var demo_phase_1_dots = {
      type: "RDK",
      background_color: "black",
      aperture_type: 1,
      aperture_height: 350,
      aperture_width: 350,
      number_of_dots: 30, //Total number of dots in the aperture
      number_of_sets: 3, //Total number of sets (frames)
      move_distance: 10, //Pixels moved per frame
      dot_radius: 3,
      RDK_type: 4, //The type of RDK used
      choices: ["q", "p"], //Choices available to be keyed in by participant
      correct_choice: correct_choice,
      coherent_direction: correct_direction,
      coherence: current_coherence,
      trial_duration: -1,
      data: {event_type: "first", word: stimulus},
      //on_finish: function (data) {
        //console.log(data.word);
      //},
    };

    var demo_phase_1_confidence = {
      type: "html-keyboard-response",
      stimulus: '<p style="font-size:48px; ">How confident are you in your decision?</p>',
      choices: ["q", "p"],
      prompt: '<p style="font-size:48px; "><br><br>Low(Q)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High(P)</p>',
      on_finish: function (data) {
        //console.log(jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(jsPsych.data.get().last(1).values()[0].key_press))
      }
    }

    var demo_phase_1_word = {
      type: "html-keyboard-response",
      stimulus: stimulus.fontsize(7),
      choices: jsPsych.NO_KEYS,
      trial_duration: 2000,
    };

    var demo_feedback_1 = {
      type: 'html-keyboard-response',
      stimulus: function(){
          return jsPsych.data.get().last(1).values()[0].correct==1 ? '<h1 style="color: green;">CORRECT!</h1>' : '<h1 style="color:red;">ERROR!</h1>';
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 400,
    }

    demo_dots_match_word[trial_index]=[current_coherence, correct_direction, stimulus];
    //console.log(demo_dots_match_word[trial_index]);

    timeline.push(fixation, demo_phase_1_dots, blank, demo_phase_1_confidence, demo_phase_1_word);
  }

  timeline.push(phase_2_instruction);

  var demo_matching = jsPsych.randomization.shuffle(demo_dots_match_word);
  //console.log(demo_matching);
  for (var trial_index = 0; trial_index < demo_list.length; trial_index++) {
    var stimulus = demo_matching[trial_index][2];
    var correct_direction =  demo_matching[trial_index][1];
    var current_coherence =  demo_matching[trial_index][0];
    //console.log(stimulus, correct_direction, current_coherence);

    if (correct_direction==0) {
      var correct_choice = 'p';
    } else {
      var correct_choice = 'q';
    }

    var demo_phase_2_repeat = {
      type: "html-keyboard-response",
      stimulus: '<p style="font-size:48px; ">Do you want to revist your decision?</p>',
      choices: ["q", "p"],
      prompt: '<p style="font-size:48px; "><br><br>No(Q)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes(P)</p>',
    }

    var demo_phase_2_word = {
      type: "html-keyboard-response-marker-word-recall",
      stimulus: stimulus.fontsize(7),
      word: stimulus,
      prompt: '<br /><br /><br /><img src="/static/images/reminder_simple.png" />',
      choices: ['p','q'],
    }

    var demo_phase_2_confidence = {
      type: "html-keyboard-response",
      stimulus: '<p style="font-size:48px; ">How certain are you of your memory?</p>',
      choices: ["q", "p"],
      prompt: '<p style="font-size:48px; "><br><br>Low(Q)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High(P)</p>',
    }


    var demo_feedback_2 = {
      type: 'html-keyboard-response',
      stimulus: function(){
          return jsPsych.data.get().last(1).values()[0].word_correct==1 ? '<h1 style="color: green;">CORRECT!</h1>' : '<h1 style="color: red;">ERROR!</h1>';
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 400,
    }

    var demo_phase_2_dots = {
      type: "RDK",
      background_color: "black",
      aperture_type: 1,
      aperture_height: 350,
      aperture_width: 350,
      number_of_dots: 30, //Total number of dots in the aperture
      number_of_sets: 3, //Total number of sets (frames)
      move_distance: 10, //Pixels moved per frame
      dot_radius: 3,
      RDK_type: 4, //The type of RDK used
      choices: ["q", "p"], //Choices available to be keyed in by participant
      correct_choice: correct_choice,
      coherent_direction: correct_direction,
      coherence: current_coherence,
      trial_duration: -1,
    }

    var demo_feedback_3 = {
      type: 'html-keyboard-response',
      stimulus: function(){
          return jsPsych.data.get().last(1).values()[0].correct==1 ? '<h1 style="color: green;">CORRECT!</h1>' : '<h1 style="color: red;">ERROR!</h1>';
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 400,
    }

    var demo_if_repeat_node = {
      timeline: [demo_phase_2_dots],
      conditional_function: function(){
          // get the data from the previous trial,
          // and check which key was pressed
          var data = jsPsych.data.get().last(1).values()[0];
          //console.log(data.key_press)
          if(jsPsych.pluginAPI.compareKeys(data.key_press, 81)){
              return false;
          } else {
              return true;
          }
      }
    }

    timeline.push(fixation,demo_phase_2_word, blank, demo_phase_2_confidence, blank, demo_phase_2_repeat, demo_if_repeat_node);
   
  }

  var passed_first_quiz = false;

  var comprehension = {
      type: "survey-multi-choice",
      preamble: "Please answer the questions below",
      questions: [
          {
              prompt: "What determines what key to press when you see a dot array?",
              options: ["Speed of dots", "Number of dots", "Direction of dots", "Color of dots"],
              required: true
          },
          {
              prompt: "What is the purpose of the word on each trial?",
              options: ["It is used to uniquely identify a dot array and decision.", "It's a separate memory task unrelated to the dots.", "For fun"],
              required: true
          },
          {
            prompt: "What does the bonus depend on?",
            options: ["Correct decisions", "Correctly remembering what decisions were made","Both"],
            required: true
          }
      ],
      on_finish: function (data) {

          var response_obj = JSON.parse(data.responses);
          if (response_obj.Q0 == "Direction of dots" && response_obj.Q1 == "It is used to uniquely identify a dot array and decision." && response_obj.Q2 == "Both") {
              passed_first_quiz = true;
          } else {
              passed_first_quiz = false;
          }
      }
  }
  
  var RealtestPrompt = {
      type: "html-keyboard-response",
      choices: [32],
      stimulus: `<h3>You are now ready to start the main portion of the experiment.</h3>
                 <p>Please press the SPACEBAR when you are ready.<p>`,
                 //<p>You will not get trial-by-trial feedback for your responses during this portion. Please press the SPACEBAR when you are ready.<p>`,
  }
  timeline.push(RealtestPrompt);

  for (var block_index = 0; block_index < word_list.length; block_index++) {

    if(block_index < word_list.length/2) {
      var block_type = block_order[0];
    } else {
      var block_type = block_order[1];
    }

    var dots_match_word = [];
    var dots_coherence_list = jsPsych.randomization.repeat(dots_coherence,n3);
    //console.log(dots_coherence_list);

    timeline.push(phase_1_instruction);

    for (var trial_index = 0; trial_index < word_list[0].length; trial_index++) {
      var current_coherence = dots_coherence_list[trial_index];
      //console.log(current_coherence);
      var correct_direction = direction_list[word_list[0].length*block_index+trial_index];
      //console.log(correct_direction);
      if (correct_direction == 0) {
        var correct_choice = 'p';
      } else {
        var correct_choice = 'q';
      }
      //console.log(correct_choice);

      var stimulus = word_list[block_index][trial_index];

      var phase_1_dots = {
        type: "RDK",
        background_color: "black",
        aperture_type: 1,
        aperture_height: 350,
        aperture_width: 350,
        number_of_dots: 30, //Total number of dots in the aperture
        number_of_sets: 3, //Total number of sets (frames)
        move_distance: 10, //Pixels moved per frame
        dot_radius: 3,
        RDK_type: 4, //The type of RDK used
        choices: ["q", "p"], //Choices available to be keyed in by participant
        correct_choice: correct_choice,
        coherent_direction: correct_direction,
        coherence: current_coherence,
        trial_duration: -1,
        data: {subject_id: subject_id, study_id: study_id, session_id: session_id, event_type: "first", block_type: block_type, block_num:block_index+1, trial_label: trial_index+1, word: stimulus},
        on_finish: function (data) {
          //console.log('subject_id: '+ data.subject_id + 'study_id: ' + data.study_id + 'session_id: ' + data.session_id + ' event_type: first'+' block_type: ' + data.block_type +' block: ' + data.block_num + ' trial_label: '+ 
          //data.trial_label + ' coherence: ' + data.coherence + ' dot_correct: ' + data.correct + ' direction: ' + data.coherent_direction + ' key_press: '+ data.key_press +' rt: ' + data.rt +' word: ' + data.word);
          $.ajax({
            type: 'GET',
            cache: true,
            url: '/task/save_phaseone_data',
            data: {'subject_id': data.subject_id, 'study_id': data.study_id, 'session_id': data.session_id, 'event_type': 'first', 'block_type': data.block_type, 'block': data.block_num, 'trial_label': data.trial_label, 
            'coherence': data.coherence, 'dot_correct': data.correct, 'direction': data.coherent_direction, 'key_press': data.key_press,
            'dot_rt': data.rt, 'word': data.word}, // Include other variables you want to send to Django
          });

          if (data.trial_label==n3*3) {
          };
        }
      };

      var phase_1_confidence = {
        type: "html-keyboard-response",
        stimulus: '<p style="font-size:48px; ">How confident are you in your decision?</p>',
        choices: ["q", "p"],
        prompt: '<p style="font-size:48px; "><br><br>Low(Q)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High(P)</p>',
        data: {subject_id: subject_id, study_id: study_id, session_id: session_id},
        on_finish: function (data) {
          //console.log('subject_id: '+ data.subject_id + 'study_id: ' + data.study_id + 'session_id: ' + data.session_id + 'one_confidence: ' + jsPsych.data.get().last(1).values()[0].key_press)
          $.ajax({
            type: 'GET',
            cache: true,
            url: '/task/save_phaseoneconfidence_data',
            data: {'subject_id': data.subject_id, 'study_id': data.study_id, 'session_id': data.session_id, 'one_confidence': jsPsych.data.get().last(1).values()[0].key_press}, // Include other variables you want to send to Django
          });
        }
      }

      var phase_1_word = {
        type: "html-keyboard-response",
        stimulus: stimulus.fontsize(7),
        choices: jsPsych.NO_KEYS,
        trial_duration: 2000 //2000
      };

      dots_match_word[trial_index]=[current_coherence, correct_direction, stimulus];
      //console.log(dots_match_word[trial_index]);

      timeline.push(fixation,phase_1_dots,blank, phase_1_confidence,phase_1_word);
    }

    timeline.push(phase_2_instruction);

    var matching = jsPsych.randomization.shuffle(dots_match_word);
    //console.log(matching);
    for (var trial_index = 0; trial_index < word_list[0].length; trial_index++) {
      var stimulus = matching[trial_index][2];
      var correct_direction =  matching[trial_index][1];
      var current_coherence =  matching[trial_index][0];
      //console.log(stimulus, correct_direction,current_coherence);

      if (correct_direction==0) {
        var correct_choice = 'p';
      } else {
        var correct_choice = 'q';
      }

      var phase_2_word = {
        type: "html-keyboard-response-marker-word-recall",
        stimulus: stimulus.fontsize(7),
        word: stimulus,
        prompt: '<br /><br /><br /><img src="/static/images/reminder_simple.png" />',
        choices: ['p','q'],
        //trial_duration: 2000,
        data: {trial_num: word_list[0].length*block_index+trial_index+1},
      }

      var phase_2_dots = {
        type: "RDK",
        background_color: "black",
        aperture_type: 1,
        aperture_height: 350,
        aperture_width: 350,
        number_of_dots: 30, //Total number of dots in the aperture
        number_of_sets: 3, //Total number of sets (frames)
        move_distance: 10, //Pixels moved per frame
        dot_radius: 3,
        RDK_type: 4, //The type of RDK used
        choices: ["q", "p"], //Choices available to be keyed in by participant
        correct_choice: correct_choice,
        coherent_direction: correct_direction,
        coherence: current_coherence,
        trial_duration: -1,
        data: {subject_id: subject_id, study_id: study_id, session_id: session_id, block_type: block_type, block_num: block_index+1, trial_label: trial_index+1, trial_num_d: word_list[0].length*block_index+trial_index+1, word: stimulus},
        on_finish: function (data){
          //console.log('subject_id: '+ subject_id + 'study_id: ' + study_id + 'session_id: ' + session_id + ' event_type: second' +' block_type: ' + data.block_type + ' block: ' + data.block_num + ' trial_label: '+ data.trial_label +' coherence: ' + data.coherence +' dot_correct: ' + data.correct + ' direction: '+ data.coherent_direction + ' key_press: ' + data.key_press + ' rt: ' + data.rt + ' word_correct: ' + word_correct + ' word: ' + data.word + ' word_rt: ' + word_rt);
          $.ajax({
            type: 'GET',
            cache: true,
            url: '/task/save_phasetwo_data',
            data: {'subject_id': data.subject_id, 'study_id': data.study_id, 'session_id': data.session_id, 'event_type': 'first', 'block_type': data.block_type, 'block': data.block_num, 'trial_label': data.trial_label, 
            'coherence': data.coherence, 'dot_correct': data.correct, 'direction': data.coherent_direction, 'key_press': data.key_press,
            'dot_rt': data.rt, 'word': data.word}, // Include other variables you want to send to Django
          });

          if (data.trial_label==n3*3) {
          };
        }
      }

      var phase_2_repeat = {
        type: "html-keyboard-response",
        stimulus: '<p style="font-size:48px; ">Do you want to revist your decision?</p>',
        choices: ["q", "p"],
        prompt: '<p style="font-size:48px; "><br><br>No(Q)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes(P)</p>',
        data: {subject_id: subject_id, study_id: study_id, session_id: session_id, word: stimulus, trial_num_d: word_list[0].length*block_index+trial_index+1},
        on_finish: function (data) {
          var word_rt = jsPsych.data.get().filter({trial_num: data.trial_num_d}).select('word_rt').values[0];
          var word_correct = jsPsych.data.get().filter({trial_num: data.trial_num_d}).select('word_correct').values[0];
          $.ajax({
            type: 'GET',
            cache: true,
            url: '/task/save_phasetworepeat_data',
            data: {'subject_id': data.subject_id, 'study_id': data.study_id, 'session_id': data.session_id, 'repeat': jsPsych.data.get().last(1).values()[0].key_press, 'repeat_rt': jsPsych.data.get().last(1).values()[0].rt, 
            'word': data.word, 'word_rt': word_rt, 'word_correct': word_correct}, // Include other variables you want to send to Django
          });
        }
      }

      var phase_2_confidence = {
        type: "html-keyboard-response",
        stimulus: '<p style="font-size:48px; ">How certain are you of your memory?</p>',
        choices: ["q", "p"],
        prompt: '<p style="font-size:48px; "><br><br>Low(Q)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High(P)</p>',
        data: {subject_id: subject_id, study_id: study_id, session_id: session_id},
        on_finish: function (data) {
          $.ajax({
            type: 'GET',
            cache: true,
            url: '/task/save_phasetwoconfidence_data',
            data: {'subject_id': data.subject_id, 'study_id': data.study_id, 'session_id': data.session_id, 'two_confidence': jsPsych.data.get().last(1).values()[0].key_press}, // Include other variables you want to send to Django
          });
        }
      }
    
      var if_repeat_node = {
        timeline: [phase_2_dots],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check which key was pressed
            var data = jsPsych.data.get().last(1).values()[0];
            //console.log(data.key_press)
            if(jsPsych.pluginAPI.compareKeys(data.key_press, 81)){
                return false;
            } else {
                return true;
            }
        }
      }

      timeline.push(fixation,phase_2_word, blank, phase_2_confidence, blank, phase_2_repeat, if_repeat_node);
    }
  }

  var association_question = {
      type: 'survey-multi-choice',
      questions: [{ prompt: 'Did you associate the words with the dots to make faster decisions?', options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'], required: true, horizontal: false }],
      on_finish: function (data) {
          var response_obj = JSON.parse(data.responses);

          $.ajax({
            type: 'GET',
            cache: true,
            url: '',
            data: {'subject_id': data.subject_id, 'study_id': data.study_id, 'session_id': data.session_id, 'association_response': response_obj}, // Include other variables you want to send to Django
          });
      }
  }

  var QuestionnairePrompt = {
    type: "html-keyboard-response",
    choices: [32],
    stimulus: `<h3>All done with the main task. You now have two questionnaire to fill out. Then you will have completed the whole experiment.</h3>
               <p> Press the SPACEBAR to start when you are ready.</p>`
}

// ======== QUESTIONNAIRES ========

//PADUA INVENTORY - WSUR
var scale = ["Not at all", "A little", "Quite a lot", "A lot", "Very much"];
var PI_WSUR = {
    type: 'survey-likert',
    preamble: `<p>The following statements refer to thoughts and behaviors which may occur to everyone in everyday life.</p>
      <p>For each statement, choose the reply which best seems to fit you and the degree of disturbance which such thoughts or behaviors may create</p>`,
    button_label: 'Submit',
    questions: [
    { prompt: "1. I feel my hands are dirty when I touch money", labels: scale, required: true },
    { prompt: "2. I think even the slightest contact with bodily secretions (perspiration, saliva, urine, etc.) may contaminate my clothes or somehow harm me", labels: scale, required: true },
    { prompt: "3. I find it difficult to touch an object when I know it has been touched by strangers or by certain people", labels: scale, required: true },
    { prompt: "4. I find it difficult to touch garbage or dirty things", labels: scale, required: true },
    { prompt: "5. I avoid using public toilets because I am afraid of disease and contamination", labels: scale, required: true },
    { prompt: "6. I avoid using public telephones because I am afraid of contagion and disease", labels: scale, required: true },
    { prompt: "7. I wash my hands more often and longer than necessary", labels: scale, required: true },
    { prompt: "8. I sometimes have to wash or clean myself simply because I think I may be dirty or “contaminated”", labels: scale, required: true },
    { prompt: "9. If I touch something I think is “contaminated,” I immediately have to wash or clean myself", labels: scale, required: true },
    { prompt: "10. If an animal touches me, I feel dirty and immediately have to wash myself or change my clothing", labels: scale, required: true },
    { prompt: "11. I feel obliged to follow a particular order in dressing, undressing, and washing myself", labels: scale, required: true },
    { prompt: "12. Before going to sleep, I have to do certain things in a certain order", labels: scale, required: true },
    { prompt: "13. Before going to bed, I have to hang up or fold my clothes in a special way", labels: scale, required: true },
    { prompt: "14. I have to do things several times before I think they are properly done", labels: scale, required: true },
    { prompt: "15. I tend to keep on checking things more often than necessary.", labels: scale, required: true },
    { prompt: "16. I check and recheck gas and water taps and light switches after turning them off", labels: scale, required: true },
    { prompt: "17. I return home to check doors, windows, drawers, etc., to make sure they are properly shut", labels: scale, required: true },
    { prompt: "18. I keep checking forms, documents, checks, etc., in detail to make sure I have filled them in correctly", labels: scale, required: true },
    { prompt: "19. I keep on going back to see that matches, cigarettes, etc., are properly extinguished", labels: scale, required: true },
    { prompt: "20. When I handle money, I count and recount it several times", labels: scale, required: true },
    { prompt: "21. I check letters carefully many times before posting them", labels: scale, required: true },
    { prompt: "22. Sometimes I am not sure I have done things which in fact I knew I have done", labels: scale, required: true },
    { prompt: "23. When I read, I have the impression I have missed something important and must go back and reread the passage at least two or three times", labels: scale, required: true },
    { prompt: "24. I imagine catastrophic consequences as a result of absent-mindedness or minor errors which I make", labels: scale, required: true },
    { prompt: "25. I think or worry at length about having hurt someone without knowing it", labels: scale, required: true },
    { prompt: "26. When I hear about a disaster, I think it is somehow my fault", labels: scale, required: true },
    { prompt: "27. I sometimes worry at length for no reason that I have hurt myself or have some disease", labels: scale, required: true },
    { prompt: "28. I get upset and worried at the sight of knives, daggers, and other pointed objects", labels: scale, required: true },
    { prompt: "29. When I hear about a suicide or crime, I am upset for a long time and find it difficult to stop thinking about it", labels: scale, required: true },
    { prompt: "30. I invent useless worries about germs and disease", labels: scale, required: true },
    { prompt: "31. When I look down from a bridge or a very high window, I feel an impulse to throw myself into space", labels: scale, required: true },
    { prompt: '32. When you see this question, please choose "A little"', labels: scale, required: true },	
    { prompt: "33. When I see a train approaching, I sometimes think I could throw myself under its wheels", labels: scale, required: true },
    { prompt: "34. At certain moments, I am tempted to tear off my clothes in public", labels: scale, required: true },
    { prompt: "35. While driving, I sometimes feel an impulse to drive the car into someone or something", labels: scale, required: true },
    { prompt: "36. Seeing weapons excites me and makes me think violent thoughts", labels: scale, required: true },
    { prompt: "37. I sometimes feel the need to break or damage things for no reason", labels: scale, required: true },
    { prompt: "38. I sometimes have an impulse to steal other people’s belongings, even if they are of no use to me", labels: scale, required: true },
    { prompt: "39. I am sometimes almost irresistibly tempted to steal something from the supermarket", labels: scale, required: true },
    { prompt: "40. I sometimes have an impulse to hurt defenseless children or animals", labels: scale, required: true }
    ],

    on_finish: function (data) {
        var response = JSON.parse(jsPsych.data.get().last().select("responses").values[0]);
        var item_no = 0;
        for (i = 0; i < 40; i++) {
	  if (i != 31) {
            if (i < 31) {
              item_no = i + 1
            } else {
              item_no = i
            }

            function myAjaxRequest () {
                $.ajax({
                  type: 'GET',
                  cache: true,
                  url: '/task/save_ques_data',
                  data: {'subject_id': data.subject_id, 'study_id': data.study_id, 'session_id': data.session_id, 'ques_name': 'PI-WSUR', 'item_no': item_no, 'response': response["Q" + i.toString()]},
                  //error: function () {
                  //  setTimeout(() => {
                  //    myAjaxRequest()
                  //  }, 5000) // if there was an error, wait 5 seconds and re-run the function
                  //}
                })
            }
          
            myAjaxRequest()
          } else {
            function myAjaxRequest () {
              $.ajax({
                type: 'GET',
                cache: true,
                url: '/task/save_ques_data',
                data: {'subject_id': data.subject_id, 'study_id': data.study_id, 'session_id': data.session_id, 'ques_name': 'PI-WSUR_passed_catch_question', 'item_no': 1, 'response': Number(response["Q" + i.toString()] == 1)},
                //error: function () {
                //  setTimeout(() => {
                //    myAjaxRequest()
                //  }, 5000) // if there was an error, wait 5 seconds and re-run the function                                                                                        
                //}
              })
            }
            myAjaxRequest()
          }
	}
    }
};

//PENN STATE WORRY QUESTIONNAIRE (PSWQ)
var scale = ["1 - Not at all typical of me", "2", "3", "4", "5 - Very typical of me"];
var PSWQ = {
    type: 'survey-likert',
    preamble: `<p>Rate each of the following statements on a scale of 1("Not at all typical of me) to 5("Very typical of me").</p>`,
    button_label: 'Submit',
    questions: [
    {prompt: "1. If I do not have enough time to do everything, I do not worry about it.", labels: scale, required: true},
    {prompt: "2. My worries overwhelm me.", labels: scale, required: true},
    {prompt: "3. I do not tend to worry about things.", labels: scale, required:true},
    {prompt: "4. Many situations make me worry.", labels: scale, required: true},
    {prompt: "5. I know I should not worry about things, but I just cannot help it.", labels: scale, required: true},
    {prompt: "6. When I am under pressure I worry a lot.", labels: scale, required: true},
    {prompt: "7. I am always worrying about something.", labels: scale, required: true},
    {prompt: "8. I find it easy to dismiss worrisome thoughts", labels: scale, required: true},
    {prompt: "9. As soon as I finish one task, I start to worry about everything else I have to do.", labels: scale, required: true},
    {prompt: "10. I never worry about anything.", labels: scale, required: true},
    {prompt: "11. When there is nothing more I can do about a concern, I do not worry about it any more.", labels: scale, required: true},
    {prompt: "12. I have been a worrier all my life.", labels: scale, required: true},
    {prompt: "13. I notice that I have been worrying about things.", labels: scale, required: true},
    {prompt: "14. Once I start worrying, I cannot stop.", labels: scale, required: true},
    {prompt: "15. I worry all the time.", labels: scale, required: true},
    {prompt: "16. I worry about projects until they are all done.", labels: scale, required: true},
    ],

    on_finish: function (data) {
        var response = JSON.parse(jsPsych.data.get().last().select("responses").values[0]);
        var item_no = 0;
        for (i = 0; i < 16; i++) {
            item_no += 1;

          function myAjaxRequest () {
            $.ajax({
              type: 'GET',
              cache: true,
              url: '/task/save_ques_data',
              data: {'subject_id': data.subject_id, 'study_id': data.study_id, 'session_id': data.session_id, 'ques_name': 'PSWQ', 'item_no': item_no, 'response': response["Q" + i.toString()] + 1},
              error: function () {
                setTimeout(() => {
                  myAjaxRequest()
                }, 5000) // if there was an error, wait 5 seconds and re-run the function
              }
            })
          }
          
          myAjaxRequest()

        }
    }
};


  var thankyou_prompt = {
      type: "html-keyboard-response",
      stimulus: `<p>You've finished the last task. Thanks for participating!</p>
      <p><a href="https://app.prolific.co/submissions/complete?cc=4D06F95D">Click here to return to Prolific and complete the study</a>.</p>`,
      choices: jsPsych.NO_KEYS,
      on_start: function() {
      }
  }
  timeline.push(QuestionnairePrompt, blank, PI_WSUR, blank, PSWQ, blank, thankyou_prompt);

  jsPsych.init({
      timeline: timeline,
  });
}
