import "./Logout.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreator } from "../../store/actionTypes";
import { USER_UNLOGGED } from "../../store/types";

const Logout = () => {

  // Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // This hook gets executed once when component is created 
  useEffect(() => {
    try {
      sessionStorage.clear();

      dispatch(actionCreator(USER_UNLOGGED));

      setTimeout(() => { navigate("/login") }, 1000);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h2>Logging out. . . </h2>
    </div>
  );
};

export default Logout;