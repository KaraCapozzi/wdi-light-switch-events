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



// var Button = function(element) {
//   // |this| is a newly created object
//   this.switch = 'Switch On';
//   this.handleEvent = function(on) {
//     console.log(this.switch);
//     switch(event.type) {
//       case 'click':
//         break;
//       case 'dblclick':
//         break;
//     }
//   };
//
//
//   element.addEventListener('click', this, false);
//   element.addEventListener('dblclick', this, true);
//
//   element.removeEventListener('click', this, false);
//   element.removeEventListener('dblclick', this, false);
// }
// var s = new Something(document.body);
