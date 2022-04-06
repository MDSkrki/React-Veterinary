import { useNavigate } from "react-router-dom"

export const PetCard = ({ pet }) => {
    const navigate = useNavigate();

    const buttonHandler = () => {
        navigate('/listAppointment', { state: pet });
    }

    return (
        <div className="petCard">
            <li>Name: {pet.name}</li>
            <li>Age: {pet.age}</li>
            <li>Species: {pet.species}</li>
            <li>Allergies: {pet.allergies}</li>
            <br />
            <button onClick={buttonHandler}>List Appointment</button>
        </div>
    )
}