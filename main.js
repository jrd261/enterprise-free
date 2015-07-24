var epoch = 1437770506731;

setInterval(function () {
  console.log('a');
  var delta = (Date.now() - epoch)/86400/1000;

  var days = Math.floor(delta);
  delta = delta - days;
  document.getElementById('days').textContent = days;
  delta = delta * 24;
  
  var hours = Math.floor(delta);
  delta = delta - hours;
  document.getElementById('hours').textContent = hours;
  delta = delta * 60;

  var minutes = Math.floor(delta);
  delta = delta - minutes;
  document.getElementById('minutes').textContent = minutes;
  delta = delta * 60;
  
  var seconds = delta;
  seconds = seconds.toString().slice(0, 4);
  document.getElementById('seconds').textContent = seconds;
  
  
  

}, 10);

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('timer').textContent = (new Date()).toString();
});
