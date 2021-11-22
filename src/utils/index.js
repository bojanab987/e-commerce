
export const isLoggedIn=()=>{
    if(localStorage.getItem('accessToken') === null){
        return false
    }else return true;
}