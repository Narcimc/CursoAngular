export interface Product{
    descripcion:string;
    precio:number;

}//modulo exportado
const phone:Product = {
    descripcion:"Iphone 13",
    precio:1000

}
const laptop:Product = {
    descripcion:"MacBook Air",
    precio:2000
}

interface taxCalculadorOpction{
    tax:number;
    products:Product[];
}


//function taxCalculador(options:taxCalculadorOpction):[number,number]{
//function taxCalculador({ tax, products}:taxCalculadorOpction):[number,number]{
export function taxCalculador(options:taxCalculadorOpction):[number,number]{
    //desestructurar options 
    const { tax, products } = options;

    let total = 0;
    products.forEach(({precio})=> {
        total += precio;
   
    });

    return[total, total*options.tax];


}


const shoopingCard = [phone,laptop];
const tax = 0.15;

const [total,taxTotal]= taxCalculador({
    tax,
    products:shoopingCard

});

console.log('Total:',total);
console.log('Impuesto:', taxTotal);





