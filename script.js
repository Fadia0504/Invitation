function openInvitation() {
    document.getElementById('envelope').style.display = 'none';
    document.getElementById('invitation').classList.remove('hidden');
  }
  
  function respond(answer) {
    const responseText = document.getElementById('response');
    if (answer === 'yes') {
      responseText.textContent = 'Yay! Sampai ketemu di Lippo!';
    } else {
      responseText.textContent = 'Gapapa, mungkin lain kali ya!';
    }
  }