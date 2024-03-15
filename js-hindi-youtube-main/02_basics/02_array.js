const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //it will push the array dc_heros as a single element in marver_heros

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)   //it will put marvel_heros elements followed by the dc_heros elements
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]        //it willl spread all the elements of marverl_heros and dc_heros 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)     //we can give values as 1,2,3..i.e. depth upto which we want to flat the array although infinity is not a good practive
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting            //will talk about it further in future


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

const arr=[1,4,5,7,5]
console.log(arr)



