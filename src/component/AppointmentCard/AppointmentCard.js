import { useNavigate } from "react-router-dom";

export const AppointmentCard = ({ appointment }) => {

    // Hooks
    const navigate = useNavigate();

    // Handlers
    const buttonHandler = () => {
        navigate("/editAppointment", { state: appointment })
    };

    return (
        <div className="appointmentCard">
            <li>date: {appointment.date}</li>
            <li>treatment: {appointment.treatment}</li>
            <li>professional: {appointment.professional}</li>
            <li>state:{appointment.state}</li>
            <button onClick={buttonHandler}>Edit appointment</button>
        </div>
    )
};