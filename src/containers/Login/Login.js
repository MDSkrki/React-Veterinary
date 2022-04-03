import { useNavigate } from 'react-router-dom';
import './Login.css';


const LoginUser =()=>{

    const navigate = useNavigate();
    const formSubmit = async (e)=>{
        e.preventDefault()
      try{  
        const formData ={
            email: e.target[0].value,
            password: e.target[1].value,
        };
       
        const LoginUser = await fetch("https://chen-clinicadentalsql.herokuapp.com:3000/login", {
            method:"POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
    
        if(LoginUser){
            alert("Very Nice")
            navigate('/profile');
        }
    } catch (error){
            alert("Not Good" + error)
    }
        
    };
    return(
        <div className="generalLogin">
            <h1>Login</h1>
             <form onSubmit={(e)=>formSubmit(e)}>

            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" />

            <input type="submit" value="LOGIN" className="sendButton"></input>
        </form>
        </div>
    )
};


export default LoginUser;