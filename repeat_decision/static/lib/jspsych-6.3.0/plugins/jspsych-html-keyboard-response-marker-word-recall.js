/**
 * jspsych-html-keyboard-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/


jsPsych.plugins["html-keyboard-response-marker-word-recall"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'html-keyboard-response-marker-word-recall',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      word: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'word',
        default: undefined,
        description: 'The string to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      correct_choice: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'correct_choice',
        default: null,
        description: ''
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },

    }
  }



  plugin.trial = function(display_element, trial) {
    //console.log(trial.word);
    trial.correct_choice=jsPsych.data.get().filter({event_type: 'first', word: trial.word}).select('key_press').values[0];
    //console.log(trial.correct_choice);

    document.body.style.backgroundColor = "white";
    var new_html = '<div id="jspsych-html-keyboard-response-stimulus">'+trial.stimulus+'</div>';

    // add prompt
    if(trial.prompt !== null){
      new_html += trial.prompt;
    }

    // draw
    display_element.innerHTML = new_html;
    document.dispatchEvent(new CustomEvent('jspsych', {
        detail:{
            target:'parallel',
            action:'trigger',
            payload: 23         //Second round Word show up
        }
    }));

    // store response
    var response = {
      rt: -1,
      key: -1
    };

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      if (response.key == -1) {
        var word_correct = 0;
      } else {
        var word_correct = (response.key==trial.correct_choice)==true ? 1 : 0;
      }
      //console.log("w_key_press: "+response.key, "w_correct: "+trial.correct_choice);
      //console.log(response.rt);
      // gather the data to store for the trial
      var trial_data = {
        "word_rt": response.rt,
        "word": trial.word,
        "key_press": response.key,
        "word_correct": word_correct,
      };

      // clear the display
      display_element.innerHTML = '';
      document.dispatchEvent(new CustomEvent('jspsych', {
          detail:{
              target:'parallel',
              action:'trigger',
              payload: 25         //Second round Word gone
          }
      }));

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      document.dispatchEvent(new CustomEvent('jspsych', {
          detail:{
              target:'parallel',
              action:'trigger',
              payload: 24         //Second round Word recall decision made
          }
      }));
      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-html-keyboard-response-stimulus').className += ' responded';

      // only record the first response
      if (response.key == -1) {
        response = info;
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
    }

    // hide stimulus if stimulus_duration is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-html-keyboard-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
