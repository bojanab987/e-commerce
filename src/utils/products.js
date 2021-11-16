import products from '../data'

export function getProducts(){
    return products;
}

export function getProduct(productId){
    return products.find(product => product.id === productId);
}