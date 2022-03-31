import './Register.css';


const Register = () => {
    
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
        <div className="general">
        <h1>User Register</h1>
        <form onSubmit={(e)=>formSubmit(e)}>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />

            <label for="surName">Surname</label>
            <input type="text" id="surname" name="surname" />

            <label for="phoneNumber">PhoneNumber</label>
            <input type="number" id="phonenumber" name="phonenumber" />

            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" />

            <input type="submit" value="ACCEPT" className="sendButton"></input>
        </form>
        </div>
    );

};

export default Register;