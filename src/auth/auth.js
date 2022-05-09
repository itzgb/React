

export const getToken =  () =>{
    const data = localStorage.getItem("token");
    console.log(data);
    return localStorage.getItem("token");
}


export const logout = async () =>{
 localStorage.clear();
}

