import "./Logout.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      sessionStorage.clear();

      dispatch({
        type: "USER_UNLOGGED",
      })
      
      // store.dispatch({
      //   type: "USER_UNLOGGED"
      // });

      setTimeout(() => { navigate("/login") }, 1000);
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
