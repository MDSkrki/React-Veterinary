import { useNavigate } from 'react-router-dom';
import './Login.css';


const LoginUser =()=>{
    console.log("hola")
    const navigate = useNavigate();
    const formSubmit = async (e)=>{
        e.preventDefault()
      try{  
        const formData ={
            email: e.target[0].value,
            password: e.target[1].value,
        };
       
        const LoginUser = await fetch("https://chen-veterinary.herokuapp.com/user/login", {
            method:"POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("hola2"+LoginUser.body)
        LoginUser.json().then(data => {
            console.log("holaaa"+ data);
            sessionStorage.setItem("iduser",data.iduser);
            sessionStorage.setItem("token",data.token);
            alert("Very Nice:" + sessionStorage.getItem("iduser"))
            navigate('/profile');
          });
        
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