import { useNavigate } from 'react-router-dom';
import './Register.css';


const Register = () => {

    const navigate = useNavigate();
    const formSubmit = async (e)=>{
        e.preventDefault()
        const formData ={
            name: e.target[0].value,
            phoneNumber: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
        };
        console.log(formData);
      try{  
        const postUser = await fetch("https://chen-veterinary.herokuapp.com/user", {
            method:"POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        const savedUser = await postUser.json();

        console.log("Form Submit works", savedUser);

        if(postUser){
            console.log("Very Nice")
            navigate('pet', {state: {idUser: savedUser.id}});
        }
    }
     catch (error){
            console.log(error.message)
    }
        
    };
    
    return (
        <div className="general">
        <h1>User Register</h1>
        <form onSubmit={(e)=>formSubmit(e)}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="phoneNumber">PhoneNumber</label>
            <input type="text" id="phonenumber" name="phonenumber" />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />

            <input type="submit" value="ACCEPT" className="sendButton"/>
        </form>
        </div>
    );

};

export default Register;