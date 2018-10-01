/* const add = function (a, b) {
    console.log(arguments)
    return a + b
} */

const add = (a, b) => {
    return a + b
} // with arrow functions we no longer have access to the arguments

console.log(add(55, 1, 1001))

const user = {
    name: 'Renan',
    cities: ['Rio de Janeiro', 'São Paulo', 'Santa Catarina'],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}`)
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    number: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.number.map(number => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())