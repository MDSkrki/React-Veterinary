const formSubmit = async (e)=>{
    e.preventDefault()
  try{  
    const formData ={
        name: e.target[0].value,
        surname: e.target[1].value,
        phoneNumber: e.target[2].value,
        email: e.target[3].value,
        password: e.target[4].value,
    };
   
    const postUser = await fecth("http//:localhost:3000/users", {
        method:"POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(postUser){
        alert("Very Nice")
    }
} catch (error){
        alert("Not Good" + error)
}
    
};



/*<form onSubmit={(e)=>formSubmit(e)}>*/