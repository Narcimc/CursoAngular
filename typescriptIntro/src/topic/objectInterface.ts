const skills:string[] =['bash','counter','Heading'];//constantes son mas ligeras 
 
interface character{
    name:string;
    hp:number;
    skills:string[];
    hometown?:string;//hacer opcional

}

const strider:character ={
    name:'Strider',
    skills:['bash','counter','Heading'],
    hp: 100,
    hometown:'Raven'
};

strider.hometown = 'Rivendell';

console.log(strider);

export{};