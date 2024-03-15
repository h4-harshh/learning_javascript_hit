const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()











// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++mycode+++++++++++++++++++++++++++++++++++++++

const curr={
    username:"harsh",
    roll:17,

    details:function(){
        console.log(`${this.username} , loggedIn`);
        console.log(this);
    },
    
}

// curr.details();
// curr.username="nikhil"
// curr.details();

// console.log(this)

// function myfun1()
// {
//     console.log(this)
// }
// myfun1()


function type1(num1,num2){
    return num1+num2;
}
console.log("type1: ",type1(2,4));

const type2=function(num1,num2){
    return num1+num2;
}
console.log("type2: ",type1(2,4));

const type3=(num1,num2)=>{
    return num1+num2;
}
console.log("type3: ",type1(2,4));

const type3_2=(num1,num2)=> (num1+num2);
console.log("type3_2: ",type1(2,4));



const type3_obj=()=> ({username:"harsh",roll:11});
console.log(type3_obj());

const myarr=[2,4,5,6,6];
const type3_arr=()=> (myarr);
console.log(type3_arr())



