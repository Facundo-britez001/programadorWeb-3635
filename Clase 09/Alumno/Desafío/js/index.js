//
//

var emailNode = document.getElementById('email')

emailNode.oninput = validate

var passNode = document.getElementById('pass')

passNode.oninput = validate

function validate (event) {
  var inputNode = event.target

  var value = inputNode.value

  var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  var regex

  if (inputNode.type == 'password') {
    regex = regexPass
  } else {
    regex = regexEmail
  }

  if (regex.test(value)) {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  } else {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  }
}
