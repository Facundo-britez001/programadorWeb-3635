//
//

function Car (model, brand, year) {
  var id = Math.random()

  this.model = model

  this.getBrand = function () {
    return brand
  }

  this.getYear = function () {
    return year
  }

  this.getId = function () {
    return id
  }

  this.setBrand = function (newBrand) {
    brand = newBrand
  }
}

var toyotaEtios = new Car('Suran', 'volkswagen', 2016)

console.log(
  toyotaEtios.model,
  toyotaEtios.getBrand(),
  toyotaEtios.getYear(),
  toyotaEtios.getId()
)
