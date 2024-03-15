// stack and heap memory allocation

let oneName="harsh"

let otherName=oneName

otherName="Nikhil"

// console.log(oneName)
// console.log(otherName)

//heap memory allocation

let person={
    email:"harsh@gmai.com",
    age:21,
}

let person2=person

person2.email=`nikhil@gmail.com`
// person2.age=21.5

console.log(person)
console.log(person2)
