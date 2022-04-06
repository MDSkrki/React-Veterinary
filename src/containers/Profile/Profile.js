import { useState, useEffect } from "react";
import "./Profile.css";
import { PetCard } from "../../component/PetCard/PetCard";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  // Hooks
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  // Handlers
  const petList = async () => {
    const petResults = await fetch(
      "https://chen-veterinary.herokuapp.com/pet?idUser=" +
      sessionStorage.getItem("iduser"),
      {
        method: "GET",
      }
    );

    const dataPet = await petResults.json();

    setPets(dataPet);
  };

  useEffect(() => {
    try {
      petList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const buttonHandler = () => {
    navigate('/register/pet', { state: { idUser: sessionStorage.getItem("iduser") } });
  };

  return (
    <div>
      <h1>Hello { }!</h1>
      <div className="buttons">
        <button onClick={buttonHandler}>Add new pet</button>
      </div>
      <div>
        <ul>
          {pets.map((pet) => {
            return <PetCard pet={pet} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;