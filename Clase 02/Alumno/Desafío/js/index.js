//
//

var genero = prompt('ingrese genero masculino o femenino')
var edad = prompt('ingrese la edad')

if (genero == 'masculino') {
  var generoCalculado = 'Sr'  
}else if (genero == 'femenino') {
  var generoCalculado = 'Sra'
}else{
  var generoCalculado = 'Sx'
}

if (edad >= 18) {
var edadCalculada = 'usted es mayor de edad puede ingresar.'  
} else if ( edad < 18){
  var edadCalculada = 'usted es menor de edad no puede ingresar'
}else{
  var edadCalculada = 'la edad que ingreso es invalida'
}

console.log(generoCalculado + ' ' + edadCalculada)


// 
// 

// var genero = prompt('ingrese genero masculino o femenino')
// var edad = prompt('ingrese edad')

// if (genero == 'masculino') {
//   var generoCalculado = 'Sr'  
// }else if (genero == 'femenino'){
//   var generoCalculado = 'Sra'
// }else{
//   var generoCalculado = 'Sx'
// }

// if (edad <= 18) {
//   console.log(generoCalculado + '. usted es menor de edad no puede ingresar') 
// }else if(edad > 18){
//   console.log(generoCalculado + '. usted es mayor de edad puede ingresar')
// }else{
//   console.log('Error, usted ingreso mal la edad'a)
// }
