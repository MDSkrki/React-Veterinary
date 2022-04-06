import { useNavigate } from "react-router-dom";
import { userLogged } from "../../store/actionTypes";
import store from "../../store/store";
import { USER_LOGGED } from "../../store/types";
import "./Login.css";

const LoginUser = () => {
  console.log("hola");
  const navigate = useNavigate();
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email: e.target[0].value,
        password: e.target[1].value,
      };

      const loginUser = await fetch(
        "https://chen-veterinary.herokuapp.com/user/login",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
     
      const data = await loginUser.json();
      console.log(data)

      store.dispatch(userLogged(USER_LOGGED, {token:data.token, id: data.iduser}));    //llevarlo a actionTypes y types, store.


      sessionStorage.setItem("iduser", data.iduser);
      sessionStorage.setItem("token", data.token);
      console.log("Very Nice:" + sessionStorage.getItem("iduser"));
      navigate("/profile");
    } catch (error) {
      alert("Not Good" + error);
    };
  };
  return (
    <div className="generalLogin">
      <h1>Login</h1>
      <form onSubmit={(e) => formSubmit(e)}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <input type="submit" value="LOGIN" className="sendButton"></input>
      </form>
    </div>
  );
};

export default LoginUser;
