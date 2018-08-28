//
//

var operacion = prompt('ingrese operacion a realizar, sum, res, mult, div')
var num1 = parseInt(prompt('ingrese un numero'))

do {
  var num2 = parseInt(prompt('ingrese otro numero'))
} while (num2 === 0 && operacion == 'div')

var resultado = ''

switch (operacion) {
  case 'sum':
    resultado = num1 + num2
    break
  case 'res':
    resultado = num1 - num2
    break
  case 'mult':
    resultado = num1 * num2
    break
  case 'div':
    resultado = num1 / num2
    break

  default:
    resultado = 'invalid'
    break
}

console.log(resultado)
