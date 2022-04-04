import "./Logout.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../store/store";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      sessionStorage.clear();
      
      store.dispatch({
        type: "USER_UNLOGGED"
      });

      setTimeout(
        function () {
          navigate("/login");
        }.bind(this),
        1000
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h2>Cerrando sesión. . . </h2>
    </div>
  );
};

export default Logout;
