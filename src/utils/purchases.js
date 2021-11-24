export const getAllPurchases = ()=>{
    const result=JSON.parse(localStorage.getItem('purchases'));
    return result;
}

export const getPurchaseItem = (id) =>{

    let items =[];
    let purchases=getAllPurchases()
    purchases.forEach(singlePurchase => {
        if(singlePurchase.id === id){
            items=singlePurchase.products
        }        
    })
    return items;
}

export const totalAmount=(products)=>{
    let total=0;
    products.forEach(element => {
        total+=element.price*element.qty
    });
    return parseFloat(total).toFixed(2);
} 

export const formatDate = date => {
    return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}