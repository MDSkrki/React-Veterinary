import "./Logout.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      sessionStorage.clear();
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
