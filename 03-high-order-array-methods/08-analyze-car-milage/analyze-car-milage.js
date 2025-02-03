// function analyzeCarMileage(cars) {
//   // Start both highest/lowest as the first car
//   let highestMileageCar = cars[0]
//   let lowestMileageCar = cars[0]

//   const totalMileage = cars.reduce((total, car) => {
//     if (car.mileage > highestMileageCar.mileage) {
//       highestMileageCar = car
//     }
//     if (car.mileage < lowestMileageCar.mileage) {
//       lowestMileageCar = car
//     }
//     return total + car.mileage
//   }, 0)

//   const averageMileage = parseFloat((totalMileage / cars.length).toFixed(2))

//   return {
//     averageMileage, // e.g., 23333.33 (as a number, not a string)
//     highestMileageCar, // the car with the largest .mileage
//     lowestMileageCar, // the car with the smallest .mileage
//     totalMileage // sum of all mileages
//   }
// }

function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0)

  const averageMileage = totalMileage / cars.length

  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  )

  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  )

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage
  }
}

module.exports = analyzeCarMileage
