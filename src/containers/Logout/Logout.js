import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = ()=>{

    const navigate = useNavigate();
    sessionStorage.clear
    navigate("/login");
    return(
        <div>
            <h2>Cerrando sesión. . . </h2>
        </div>
    )
}


export default Logout;