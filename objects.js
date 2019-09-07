//es5 way object function
function staff(first, last, prof){
    this.first = first
    this.last = last
    this.prof = prof
}

const Maggy = new staff('Maggie', 'Evans', 'Teacher')

console.log(Maggy.last)

// object literal
const staff2 = {
    firstName: 'Dave',
    lastName: 'Dawson',
    profession: 'Electrician'
}

// const newbie = new staff2('Sharon', 'Stevens', 'Designer')
// error staff 2 is not a constructor, therefore cannot inherit

console.log(staff2.firstName) // error noted above
// console.log(newbie.profession)

// profession changed, reassigned object property
staff2.profession = 'Estate Agent'
console.log(staff2.profession)

a1 = [8, 3, 5, 7]
// includes() new js method, rather than constructing a contains prototype function
console.log(a1.includes(8))


//// EXERCISE ////

