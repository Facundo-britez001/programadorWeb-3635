//
//
//

// var students = [
//   {
//     firstName: 'Juan',
//     lastName: 'Pérez',
//     dni: 45678987,
//     email: 'juan@gmail.com'
//   },
//   {
//     firstName: 'Ana',
//     lastName: 'Fernandez',
//     dni: 45678989,
//     email: 'ana@gmail.com'
//   },
//   {
//     firstName: 'Pedro',
//     lastName: 'Mármol',
//     dni: 45678956,
//     email: 'pedro@gmail.com'
//   }
// ]

// function Student (firstName, lastName, dni, email) {
//   // Cuerpo

//   var id = Math.random()

//   this.lastName = lastName

//   this.dni = dni

//   this.email = email

//   this.getFirstName = function () {
//     return firstName
//   }

//   this.getId = function () {
//     return id
//   }
// }

// var newStudent = new Student('Ana', 'Martinez')

// console.log(newStudent, newStudent.getId())

// var newStudent2 = new Student('Ana', 'Martinez')

// console.log(newStudent2, newStudent2.getId())

// console.log('Objeto creado', newStudent.lastName)

// newStudent.lastName = 'Lopez'

// console.log('Objeto creado', newStudent.lastName)

//
//
//
// var date = new Date()

// console.log(date.getFullYear())

// var showMessage = function () {
//   console.log('Soy un mensaje')
// }

// showMessage()

function Student (firstName, lastName, dni, email) {
  var id = dni

  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    if (this.firstName && this.lastName) {
      return this.firstName + ' ' + this.lastName
    } else if (this.firstName && !this.lastName) {
      return this.firstName
    } else {
      return ''
    }
  }
}

var oldStudents = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

var oldStudent

var newStudent

for (var i = 0; i < oldStudents.length; i++) {
  oldStudent = oldStudents[i]
  newStudent = new Student(
    oldStudent.firstName,
    oldStudent.lastName,
    oldStudent.dni,
    oldStudent.email
  )
  console.log(newStudent.getId(), newStudent.getFullName())
}
