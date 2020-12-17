## 01 JavaScript Drum Stick
In this practice, we build a small app that converts text to speech and has controls to manipulate the voice, rate of speech and pitch of speech. We use an API which is found in most browsers SpeechSynthesis.<br/>
We are provided with the HTML, CSS necessary to create this page/application. All we need is to add JS to add the functionality.

---
Much like previous challenge of speech Recognition, this application dint work on Firefox. It works fine in Google Chrome.

---
### Notes:
#### JavaScript
1. [SpeechSynthesisAPI](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis): The Web Speech API adds voice recognition (speech to text) and speech synthesis(text to speech) to JavaScript. [Experiment with SpeechSynthesis](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/) or [get updates](https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API)

2. [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) interface represents a speech request and contains content that the speech service should read and other information about how to speak it like pitch, rate, volume, voice etc.

3. [SpeechSynthesis: voiceschanged event](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/voiceschanged_event): This could be used to repopulate a list of voices that the user can choose between when the event fires:
   ```
    function populateVoices(){
    voices = this.getVoices();
    console.log(voices);

    const voiceOptions = voices
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
      voicesDropdown.innerHTML = voiceOptions;
    }

   speechSynthesis.addEventListener('voiceschanged', populateVoices);
   ```

4. There are a couple of ways to pass an argument to a function (which is passed as an argument) insisde an event
```
//Couple of ways to pass arguent to a function
  1. stopButton.addEventListener('click', ()=> toggle(false));
  2. stopButton.addEventListener('click',function(){
      toggle(false);
     });
  3. stopButton.addEventListener('click',toggle.bind(null, false));
```

5. Events 
    * change
    * voiceschanged

