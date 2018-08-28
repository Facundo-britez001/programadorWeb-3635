//
//

var dayOfTheWeeks = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

var workingDays = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes'
]
var weekend = [ 'Sábado', 'Sabado', 'Domingo' ]

console.log('Dias de la semana: ')

for (var i = 0; i < dayOfTheWeeks.length; i++) {
  var dayOfTheWeek = dayOfTheWeeks[i] //Lunes

  if (workingDays.includes(dayOfTheWeek)) {
    console.log(dayOfTheWeek + ' dia de la semana')
  } else if (weekend.includes(dayOfTheWeek)) {
    console.log(dayOfTheWeek + ' fin de semana')
  } else {
    console.log(dayOfTheWeek + ' no es un dia')
  }
}
