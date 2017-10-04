var button = document.querySelector('.switch');
var body = document.querySelector('body');
var text = document.querySelector('h1');
var state = 'on';
button.addEventListener('click', function() {
if (state === 'on'){
  text.innerText = 'It is so dark in here!'
  state = 'off'
  body.className = 'dark'
  button.className = 'switch off'
}else {
  state = 'on';
  text.innerText = 'It is so bright in here!'
  body.className = 'light'
  button.className = 'switch on'}
});
