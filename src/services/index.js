export const getAllProducts=async()=>{
    try {
        const res=await fetch('https://api.kalpav.com/api/v1/product/category/retail');
        const result=await res.json();
        return result;        
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}


export const userAuth=async(data)=>{
    try {
        // const res=await fetch('https://apiv2stg.promilo.com/user/oauth/token',{
        //     method:'POST',
        //     mode: "cors", // no-cors, *cors, same-origin
        //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: "same-origin",
        //     headers:{
        //         "Content-type":"application/json",
        //     },
        //     body:JSON.stringify(data)
        // });
        // const result=await res.json();
        localStorage.setItem('isLoggedIn',true);
        return true;        
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}


export const userLogout=()=>{
    localStorage.removeItem('isLoggedIn');
};