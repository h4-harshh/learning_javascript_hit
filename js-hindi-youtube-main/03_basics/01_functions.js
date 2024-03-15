//basic reperesentation
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()[]

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

//read it
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// important
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))






//20

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));





// ---------------------------------------------mycd------------

// function myfun(){
//     console.log("harsh");
// }

// myfun()

// function addnumber(num1,num2)
// {
//     console.log(num1+num2);
// }

// addnumber(3,4)
// addnumber('a',4)
// addnumber(4.5,4)

//default paramenter
// function myfun3(num1=0)
// {
//     return num1+1;
// }
// console.log(myfun3());


//logged
// function isloggedinu(name2)
// {
//     if(!name2)
//     {
//         return ("enter a username");
//     }
//     else
//     return `${name2} just logged in`
// }
// console.log(isloggedinu())
// console.log(isloggedinu("harsh"))


//destructuring of the paramenters

// function myfun4(num1 ,num2 ,...rest)
// {
//     let temp=0;
//     for(let i=0;i<rest.length;i++)
//     {
//         temp+=rest[i];
//     }
//     return num1+num2+temp;
// }

// console.log(myfun4(5,6,3,4,5,6,7,8));


//passing object into fuction

// function myfun(anyobject)
// {
//     return `username is ${anyobject.username} and rool is ${anyobject.roll}`;
// }

// const userr={
//     username:"harsh",
//     roll:45
// }
// console.log(myfun(userr))