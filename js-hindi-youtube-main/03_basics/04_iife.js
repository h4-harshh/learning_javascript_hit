// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');




(function myfun(name)
{
    console.log(`my name is , ${name}`)
})("harsh");
((name)=>
{
    console.log(`my name is , ${name}`)
})("nikhil");