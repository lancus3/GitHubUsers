


const h = "hello";
const w = "world";

console.log(`${h} ${w}`)



const multiply = (a,b=1) => a*b;
console.log(multiply(43,5));


const average = (...args) => {
    let suma = 0;
    args.forEach(arg => suma=arg + suma);
    return suma/args.length;
}
console.log(average(5,1,5,6));


const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
console.log(average(...grades))



const names = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,third,,fifth] = names; 
console.log(third +" " + fifth);
