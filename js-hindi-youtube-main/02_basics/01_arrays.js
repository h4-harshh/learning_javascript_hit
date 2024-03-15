// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)         //will add the value in parenthesis at index 0:problem shift all elemnent incerese cpu time
// myArr.shift()            //will remove a value from the starting of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()          //newArr is string of myarr elements with commas(,)

// console.log(myArr);
// console.log( newArr);


// slice, splice
//slice just print the values (2,4) at index 2(include) to 4(exclude) 
//splice will manipulate the original array(extract the values from the parent array including both the indices)

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);



















// console.log("------------------------------rough work------------------------------------")

// const myarrrr=["harsh",1,3,5,true]
// console.log(myarrrr)

// const myarr=new Array(1,2,3,4,5);
// console.log(myarr)

// console.log(myarrrr[2]);
// console.log(myarr[2]);

// myarr.push(8)
// console.log(myarr)

// myarr.pop()
// console.log(myarr)

// // myarr.unshift(89)
// console.log(myarr)

// // myarr.shift()
// console.log(myarr)


// console.log("harsh");

// console.log('A',myarr);

// const B=myarr.slice(1,3);
// console.log(B);
// console.log('B',myarr);

// const C=myarr.splice(1,3);
// console.log(C);
// console.log('C',myarr);

