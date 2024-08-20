export interface Passenger {
    //id: number;
    name: string;
    children?:string[];
}

const passenger1:Passenger={
    name:"John",
    children:["Alice","Bob"],
    

}//otro pasagero 
const passenger2:Passenger={
    name:"Mary"
}

const printChildren=(passenger:Passenger)=>{
    const howManyChildren = passenger.children?.length || 0;//si es que existe le da un  valor o si no retorna 0 
    console.log(passenger.name +' Tiene ',howManyChildren + ' Hijos ');
}

printChildren(passenger2);