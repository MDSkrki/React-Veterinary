import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CreateAppointment = () => {

    const location = useLocation();


    const formSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = {
                treatment: e.target[0].value,
                date: e.target[1].value,
                professional: e.target[2].value,
                idPet: location.state.id
            };

            const postAppointment = await fetch("https://chen-veterinary.herokuapp.com/appointment", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (postAppointment) {
                alert("The new appointment is generated")
            }
        } catch (error) {
            alert("Not Good" + error)
        }

    };
            useEffect (()=>{
                console.log (location)  
            }, []);
            
    return (
        <div className="generalAppointment">
            <h1>Appointment for {location.state.name}: {location.state.id}</h1>
            <form onSubmit={(e) => formSubmit(e)}>
        
                <label htmlFor="treatment">Treatment</label>
                <input type="text" id="treatment" name="treatment" />

                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" />

                <label htmlFor="professional">Choose your doctor:</label>
                <select id="professional">
                    <option value="Mihai">Mihai</option>
                    <option value="Susana">Susana</option>
                    <option value="Alex">Alex</option>
                    <option value="David">David</option>
                    <option value="Rogelio">Rogelio</option>
                </select>

                <input type="submit" value="ACCEPT" className="sendButton"></input>
            </form>
        </div>
    );
}

export default CreateAppointment;