const scriptURL = 'https://script.google.com/macros/s/AKfycbyq_JCWgVN2_ZctllJUeT6ULerQuaLZpkW6sM5uH6Uh8ORZ5ieBjMH9QvIZQ-HcENlr/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('botton', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
let sign = prompt("What's your sign?");

if (sign.toLowerCase() === "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); //  open the blank prompt window
sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure


