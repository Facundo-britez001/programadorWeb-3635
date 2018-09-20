//
//

var alumno = prompt('ingrese un alumno')

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

let posicion = buscarAlumno(alumno, studentsList)

if (posicion >= 0) {
  console.log('Se encontro al alumno en la posicion ' + posicion)
} else {
  console.log('No se encontro al alumno buscado')
}

function buscarAlumno (alumnoBuscado, alumnos) {
  for (let i = 0; i < alumnos.length; i++) {
    var nombre = alumnos[i].firstName
    var apellido = alumnos[i].lastName

    if (alumnoBuscado === nombre || alumnoBuscado === apellido) {
      return i
    }
  }

  return -1
}

function name (params) {}
