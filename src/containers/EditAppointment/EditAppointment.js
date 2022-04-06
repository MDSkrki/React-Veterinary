import { useLocation, useNavigate } from "react-router-dom";
import { modifyAppointment } from "../../services/appointmentService";

const EditAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        treatment: e.target[0].value,
        date: e.target[1].value,
        professional: e.target[2].value,
        idPet: location.state.idPet,
      };

      const patchAppointment = await modifyAppointment(
        formData,
        location.state.id
      ); //appointmentService

      if (patchAppointment) {
        alert("The appointment has been modified");
        navigate("/listAppointment", {
          state: { ...formData, id: location.state.id },
        });
      }
    } catch (error) {
      alert("Not Good" + error);
    }
  };

  const cancelHandler = () => {
    modifyAppointment({ state: "cancelled" }, location.state.id);
    alert("The appointment has been cancelled");
        navigate("/listAppointment");
    
  };
  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <label htmlFor="treatment">treatment: </label>
        <input defaultValue={location.state.treatment} id="treatment" />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          defaultValue={location.state.date}
          id="date"
          name="date"
        />

        <label htmlFor="professional">Choose your doctor:</label>
        <select id="professional" defaultValue={location.state.professional}>
          <option value="Mihai">Mihai</option>
          <option value="Susana">Susana</option>
          <option value="Alex">Alex</option>
          <option value="David">David</option>
          <option value="Rogelio">Rogelio</option>
        </select>
        <br />
        <input type="submit" value="Edit Appointment" />
      </form>
      <button onClick={cancelHandler}>Cancel appointment</button>
    </div>
  );
};
export default EditAppointment;
