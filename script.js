let pode_alert = true;

function alert() {
  if (pode_alert) {
    alert('Obrigado por visitar nosso site');
    setTimeout(alert, 5000);
  }
}
setTimeout(alert, 1000);

document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 's': if (pode_alert === true) {
                pode_alert = false;
              } else {
                pode_alert = true;
              }
    break;
  }
})