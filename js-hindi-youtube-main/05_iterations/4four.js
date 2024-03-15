const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }




// +++++++++++++++++++++++++++++++++++++++mycode
// for-in-on-object

const myobject={
    myname:"harsh",
    roll:23,
    sec:"cs_B",
    branch:"computer_science",
    course:"btech",
}

// for(const key in myobject)
// {
//     // console.log(key,myobject[key]);
//     // console.log(`${key}:-${myobject[key]}`)
// }


// for-in-on-arrays
const myarray1=["harsh","nikhil","nidhi","nitin","sakshi"]

for(const index in myarray1)
{
    // console.log(index);
    console.log(myarray1[index])
}