//T es el primer generico //
export function whatsType<T>(argument:T):T{//tratar de evitar el tipo de dato any

    return argument;
}
let amIString = (whatsType<string>("Hola")); // obligar que asuma un tipo de dato string con los signos de <> que indica que es un generico
//const amIBoolean = (whatsType(true)); //boolean
let amINumber = (whatsType<Number>(123)); //estos datos tienen la prioridad sobre el argumento 
let amIArray = (whatsType<Number []>([1,2,3,4,5]));//Array

console.log(amIString.split(' '));//Los genericos son
console.log(amINumber.toFixed());//tofixed es para el tipo de dato de los numeros 
console.log(amIArray.join('-')); //une todos los elementpos con el signo -