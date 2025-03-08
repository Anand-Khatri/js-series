//Immediate invoked function expression    IIFE


(function chai()
{
    console.log(`Db connected`);
} )();

(function chai()
{
    console.log(`Db connectedo two`);
} )();

((name) =>
{
    console.log(`Db connectedo three ${name} `);
} )("Anand")




// note :- iife -> global scope k pollution se problem hoti hai kai baar toh jo us global scope k variable hai ya jo waha declaration hai 
// uske pollution ko hatane k liye (iife) ka use kiya hai

// note :- immediate function ko end karna padhta hai semicolon se