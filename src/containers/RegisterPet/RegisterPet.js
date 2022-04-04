import { useLocation, useNavigate } from 'react-router-dom';
import './RegisterPet.css';


const RegisterPet = () => {
    const location = useLocation()
    const navigate = useNavigate();

    const formSubmit = async (e) => {
        e.preventDefault()
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
                alert("Very Nice")
                navigate('/profile');
            }
        } catch (error) {
            alert("Not Good" + error)
        }
    };

    return (
        <div className="generalPet">
            <h1>Pet Register</h1>
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
        </div>
    );
};

export default RegisterPet;