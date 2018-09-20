//
//

var buttonNode = document.getElementById('button')

buttonNode.onclick = validateAge

function validateAge () {
  var ageNode = document.getElementById('age')

  var value = ageNode.value

  var parsedValue = parseInt(value, 10)

  if (isNaN(parsedValue)) {
    console.log('info invalida')
  } else if (parsedValue >= 18) {
    console.log('sos mayor')
  } else {
    console.log('sos menor')
  }
}
