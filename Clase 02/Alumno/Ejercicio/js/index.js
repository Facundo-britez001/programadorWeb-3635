// 
// 

var diaSemana = prompt('Ingresá un dia de la semana').toLowerCase();

// if (diaSemana == 'lunes'){
//   console.log('Es un día de la semana')
// }else if(diaSemana == 'martes'){f
//   console.log('Es un día de la semana')
// }else if(diaSemana == 'miercoles'){
//   console.log('Es un día de la semana')
// }else if(diaSemana == 'jueves'){
//   console.log('Es un día de la semana')
// }else if(diaSemana == 'viernes'){
//   console.log('Es un día de la semana')
// }else{ 
//   console.log('es fin de semana')
// }
    
    
var diasHabiles = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var finDeSemana = ['sabado', 'domingo'];

if(diasHabiles.includes(diaSemana)){
  console.log('Es un día de la semana')
}else if(finDeSemana.includes(diaSemana)){
  console.log('Es fin de semana')
}else{
  console.log('Error '+diaSemana+' no es un dia')
}



// var diaSemana = prompt('Ingresá un día de la semana')

//   switch (diaSemana) {
//     case 'lunes':
//       respuesta = 'Es un día de la semana'
//       break
//     case 'martes':
//       respuesta = 'Es un día de la semana'
//       break
//     case 'miercoles':
//     case 'miércoles':
//       respuesta = 'Es un día de la semana'
//       break
//       case 'jueves':
//       respuesta = 'Es un día de la semana'
//       break
//       case 'viernes':
//       respuesta = 'Es un día de la semana'
//       break
//     default:
//       respuesta = 'Es fin de semana'
//       break
//   }

//  console.log(respuesta)
