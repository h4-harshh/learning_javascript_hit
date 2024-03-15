const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )







// mycode++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for-each-on-array

const myarray2=["nikhil","harsh","nitin","sakshi","nidhi"]

// myarray2.forEach((item)=> console.log(item))

// myarray2.forEach(function (item){
//     console.log(item)
// });

// function print(item){
//     console.log(item)
// }
// myarray2.forEach(print)


// myarray2.forEach((item,index,arr)=>
// {console.log(item ,index, arr)}
// )


// iterating array of object using for each loop
const arrobj=[
    {
        subject:"maths",
        marks:98,
    },
    {
        subject:"chem",
        marks:92,
    },
    {
        subject:"physics",
        marks:95,
    },
]

arrobj.forEach((item)=>console.log(item.marks))


//reduce will pe in upcomind code file
const totalmarks=arrobj.reduce((acc,item)=>acc+item.marks,0)
console.log(totalmarks)
