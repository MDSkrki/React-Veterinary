import { useLocation, useNavigate } from "react-router-dom";
import { createAppointment } from "../../services/appointmentService";

const CreateAppointment = () => {

  // Hooks
  const location = useLocation();
  const navigate = useNavigate();

  // Handlers
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        treatment: e.target[0].value,
        date: e.target[1].value,
        professional: e.target[2].value,
        idPet: location.state.id,
      };

      const newAppointment = await createAppointment(formData);   //appointmentService

      if (newAppointment) {
        alert("The new appointment is generated");
        navigate("/listAppointment", { state: location.state });
      }
    } catch (error) {
      alert("Appointment creation failed" + error);
      console.log(error);
    }
  };

  return (
    <div className="generalAppointment">
      <h1>Appointment for {location.state.name}</h1>
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
};

export default CreateAppointment;
