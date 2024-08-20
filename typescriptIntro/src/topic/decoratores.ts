function ClassDecorator<T extends {new (...args:any[]): {} }>(//sintaxis de un decorador 
    constructor:T
) {
    return class extends constructor{
        newProperty = "new property";
        hello = "override";//simbolo
        


    }
    
}
//Decorador la clase no se crean los decoradores solo se consumen
//@service y ya sseria un servicio o con un modulo

@ClassDecorator
export class SuperClass {
  
    public myProperty:string ='abac';

    print(){
        console.log('Hello from SuperClass');
    }
    //Decorador es una funcion mas 

}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);