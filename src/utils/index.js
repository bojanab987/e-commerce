
export const isLoggedIn=localStorage.getItem('accessToken') === null || 
    localStorage.getItem('accessToken') === 'undefiend' ? false: true;

export const getPurchases = async () => {
    let response;
    try{
        response= await fetch(`${process.env.REACT_APP_API}/purchases`, {
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
    }catch(err){
        console.log(err)
    }
    if(response.ok){
        const data = await response.json();
        const storage=[];
        data.map(item=>{
            storage.push({
                id:item.id,
                products:item.products,
                createdAt:item.createdAt
            })
            return storage;
        })
        localStorage.setItem('purchases', JSON.stringify(storage))
    }else{
        doRefreshToken();
    }
}

export const doRefreshToken = async (navigate, callback) => {
    let response;
    try{
        response=await fetch(`${process.env.REACT_APP_AUTH_API}/token`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                token: localStorage.getItem('refreshToken')
            })
        })
    }catch(err){
        console.log(err)
    }
    if(response.ok){
        const data=await response.json();
        localStorage.setItem('accessToken',data.accessToken);
        callback();
    }else{        
        navigate('/login', {replace:true})
        window.location.reload(true)
    }
}