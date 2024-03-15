// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                //after this updation not possible in object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

















// --------------------------------mycode------------------------------

const mysym=Symbol("key1")
const jsuser={
    name1:"harsh",
    age:34,
    "my name":"nikhil",
    [mysym]:"mykey11"
}

console.log(jsuser.name1)
console.log(jsuser["name1"])
console.log(jsuser["my name"])
console.log(jsuser[mysym]);
jsuser.name1="nitin"
console.log(jsuser.name1)

// Object.freeze(jsuser)
// jsuser.name1="harsh"
// console.log(jsuser.name1)

jsuser.greeting=function(){
    console.log("greeting without properies of object");
}
jsuser.greeting();

jsuser.greetingTwo=function(){
    console.log(`greeting with property, ${this.name1}`)
}
jsuser.greetingTwo();


