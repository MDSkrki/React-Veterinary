import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import "./RegisterPet.css";

const RegisterPet = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bannerState = useSelector((state) => state.banner);

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name: e.target[0].value,
        age: e.target[1].value,
        species: e.target[2].value,
        allergies: e.target[3].value,
        idUser: location.state.idUser,
      };

      const postPet = await fetch("https://chen-veterinary.herokuapp.com/pet", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (postPet) {
        dispatch({
          type: "PET_REGISTER",
        });
      }
    } catch (error) {
      alert("Not Good" + error);
    }
  };

  return (
    <div className="generalPet">
      <h1>Pet Register</h1>
      <Banner bannerState={bannerState} />
      {!bannerState && (
        <form onSubmit={(e) => formSubmit(e)}>
          <label htmlFor="PetName">Pet Name</label>
          <input type="text" id="PetName" name="PetName" />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" />

          <label htmlFor="species">Species</label>
          <input type="text" id="species" name="species" />

          <label htmlFor="alergies">Alergies</label>
          <input type="text" id="alergies" name="alergies" />

          <input type="submit" value="ACCEPT" className="sendButton"></input>
        </form>
      )}
    </div>
  );
};

export default RegisterPet;
