import { useLocation, useNavigate } from "react-router-dom";

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

      const response = await fetch(
        "https://chen-veterinary.herokuapp.com/appointment/" +
          location.state.id,
        {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const patchAppointment = await response.json();

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
  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <label htmlFor="treatment">treatment: </label>
        <input defaultValue={location.state.treatment} id="treatment" />

        <label htmlFor="date">Date</label>
        <input type="date"  defaultValue={location.state.date} id="date" name="date" />

        <label htmlFor="professional">Choose your doctor:</label>
        <select id="professional" defaultValue={location.state.professional}>
          <option value="Mihai">Mihai</option>
          <option value="Susana">Susana</option>
          <option value="Alex">Alex</option>
          <option value="David">David</option>
          <option value="Rogelio">Rogelio</option>
        </select>

        <input type="submit" value="Edit Appointment" />
      </form>
    </div>
  );
};
export default EditAppointment;
