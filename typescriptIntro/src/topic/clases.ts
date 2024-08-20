export class person {//molde para lo demas 
   // public name : string;
   // public age : number;
   // public address : string;//clase modelo de datos se lo puedo definir directamenete en el constructor 

    constructor(
        public name : string, 
        public age : number, 
        public address : string)
        {
        //metodo que se lama cuando se instancia la clase
        //this.name = name;
       // this.age = age;
       // this.address = address;
    }


}
//Extender una clase 
/* export class Hero extends person{


    

    constructor(//los nuevos datos de Hero
        public alterEgo:string,
        public age : number,
        public realName : string

    ){//super es la clase que se extiende, en este caso ya solo se usa el constructor del hero
        super(realName, age, 'New York');
        //hay que mandar los datos 
    }


} */

export class Hero {
    //public person:person;

    constructor(//los nuevos datos de Hero
        public alterEgo:string,
        public age : number,
        public realName : string,
        public person:person,

    ){//crear nuevas propiedades de tipo person
       // this.personh = new person(realName, age, 'Colombia');
    }


}

const tony = new person('Tony Stark',39 ,'Canada');

const iroman = new Hero('Iroman',20,'tony', tony );//se inyecta las instancias ya antes creadas//se manda a llamar la funcion del constructor 
console.log(iroman); // Narci 20 Carrillo