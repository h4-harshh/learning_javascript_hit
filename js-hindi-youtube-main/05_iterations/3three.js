// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }







// +++++++++++++++++++++++++++++++++++mycode

// for-of

// const arr1=['harsh','nikhil','nitin',"nidhi" ,"sakshi"]
// for(const nume of arr1)
// {
//     console.log(nume);
// }

// for-of-string

// const name1="ni khi l si n gh"
// console.log("the characters in name1 are:-")
// for(const char of name1)
// {
//     if(char === " ")
//     {
//         continue;
//     }
//     console.log(char);
// }

// for-of_on-maps

const mymap=new Map()
mymap.set(1,19)
mymap.set(2,38)
mymap.set(3,57)
mymap.set(4,76)
mymap.set(5,95)

for(const [key,value] of mymap)
{
    console.log(`19 * ${key}=${value}`);
}