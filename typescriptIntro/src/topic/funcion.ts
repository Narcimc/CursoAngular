function addNumber(a:number,b:number) {//any es para 
    return a+b;
}


//funciones de flecha
const addNumber2 = (a:number,b:number):string => {
    return `$[a+b]`;

}

const result:number = addNumber(1,2);
const result2:string = addNumber2(1,2);
const multiplyresult:number = multiply(5);

function multiply(firsNumber:number,secondNumber?:number,base:number = 2) {
    return firsNumber *base;
}



//console.log({ result,result2, multiplyresult })

interface Character{
    name:string;
    hp:number;
    showHp:() => void;
}

// 
const heal = (character:Character,anount:number)=>{// se obliga a aue se use todas las caracteristicas del objeto 
    character.hp+=anount;
}
const strider :Character = {
    name:'Strider',
    hp:50,
    showHp(){
        console.log('Puntos de vida:',this.hp);
    }
}

heal(strider,10);
heal(strider,50);


strider.showHp();
export{

};