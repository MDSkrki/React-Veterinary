import './RegisterPet.css';


const RegisterPet = () => {
    
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

   

    return (
        <div className="generalPet">
        <h1>Pet Register</h1>
        <form onSubmit={(e)=>formSubmit(e)}>
            <label for="name">Pet Name</label>
            <input type="text" id="name" name="name" />

            <label for="age">Age</label>
            <input type="number" id="age" name="age" />

            <label for="species">Species</label>
            <input type="text" id="species" name="species" />

            <label for="alergies">Alergies</label>
            <input type="text" id="alergies" name="alergies" />

            <input type="submit" value="ACCEPT" className="sendButton"></input>
        </form>
        </div>
    );

};

export default RegisterPet;