function openInvitation() {
  document.getElementById('envelope').style.display = 'none';
  document.getElementById('invitation').classList.remove('hidden');
}

function respond(answer) {
  if (answer === 'yes') {
    window.location.href = 'yes.html'; 
  } else {
    window.location.href = 'no.html'; 
  }
}
