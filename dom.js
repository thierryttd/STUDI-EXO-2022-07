// const { textHour, textMinute } = require("./script");

// toggle buttons after each step of process (validBtn and otherBtn are exclusive)
function toggleButtons(){
    document.getElementById('otherBtn').disabled = !document.getElementById('otherBtn').disabled;
    document.getElementById('validBtn').disabled = !document.getElementById('validBtn').disabled;
    document.getElementById('hourId').disabled = !document.getElementById('hourId').disabled;
  }

// Adding click function on button otherBtn
button = document.getElementById('otherBtn');
button.addEventListener('click',function  (){
  toggleButtons ();
  document.getElementById('erreur').innerText = '';
  document.getElementById("hourId").value = '';
  document.getElementById('transcription').innerText = '';
  document.getElementById("hourId").focus();
  document.getElementById("hourId").style.backgroundColor = "initial";
  document.getElementById('card').classList.remove('animate__animated', 'animate__zoomInDown');
  document.getElementById('erreur').classList.remove('animate__animated', 'animate__flash');

})

// Adding click function on button validBtn

button = document.getElementById('validBtn');
button.addEventListener('click',function  (){
  
  // Erase previous error message
  document.getElementById('erreur').innerText = '';
  document.getElementById('card').classList.remove ('animate__animated', 'animate__zoomInDown');

  // Check hour format
  hourOk = checkHourFormat(document.getElementById("hourId").value);

  // If Hour format is ok then transcription else error message
  if (hourOk){
    // elt = document.getElementById("hourId").value.split(':');
    hourMinute = document.getElementById("hourId").value;
    response = hourTranscription(hourMinute);
    document.getElementById('transcription').innerText = response;
    document.getElementById('card').classList.add('animate__animated', 'animate__zoomInDown');
    toggleButtons ();
    document.getElementById("otherBtn").focus();
  }else{
    toggleButtons ();
    document.getElementById('erreur').innerText = 'Le format de l\'heure est incorrect';
    document.getElementById('erreur').classList.add ('animate__animated', 'animate__flash');
    document.getElementById("hourId").focus();
    document.getElementById("hourId").style.backgroundColor = "#F67280";
  }
})