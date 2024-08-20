//exponer algo al mundo exterior import
import { Product, taxCalculador } from "./funcionsDestructuring";


const shoppingCard: Product[] = [
    {
        descripcion:'Nokia ',
        precio: 100

    },
    {
        descripcion:'Samsung',
        precio: 200
    }

];

const [total,tax]= taxCalculador({
    tax: 0.15,
    products:shoppingCard

});
console.log('Total:',total);
console.log('Impuesto:', tax);