const square = function (x) {
    return x * x
}

console.log('es5 func', square(3))

const squareArrow = x => x * x

console.log('es6 arrow func', squareArrow(4))

const getFirstName = fullName => fullName.split(' ')[0]

console.log(getFirstName('Renan Oliveira'))