import './RegisterPet.css';


const RegisterPet = () => {
    
    const formSubmit = async (e)=>{
        e.preventDefault()
      try{  
        const formData ={
            PetName: e.target[0].value,
            age: e.target[1].value,
            species: e.target[2].value,
            alergies: e.target[3].value,
        };
       
        const postPet = await fecth("http//:localhost:3000/users", {
            method:"POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if(postPet){
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
            <label for="PetName">Pet Name</label>
            <input type="text" id="PetName" name="PetName" />

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