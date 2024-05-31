let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = function() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voiceselect.innerHTML = "";
    voices.forEach(function(voice, i) {
        var option = document.createElement('option');
        option.textContent = voice.name;
        option.value = i;
        voiceselect.appendChild(option);
    });
};

voiceselect.addEventListener("change", function() {
    speech.voice = voices[voiceselect.value];
});

document.querySelector("button").addEventListener("click", function(){
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

function tap(){
    alert("info : \n\n This is text to speech converter web app ..... ! \n\n 01. A fully functional Text-to-Speech Converter application capable of accurately transforming written text into natural-sounding speech.\n\n02. A user-friendly interface that allows users to customize speech parameters such as voice, speed, and pitch.\n\n03. Compatibility with major operating systems (e.g., Windows, macOS, Linux) and devices (e.g., desktops, laptops, mobile phones).\n\n04. Improved accessibility for visually impaired individuals and enhanced user experiences in various digital platforms. ");
}
function info_js(){
    tap();
}
