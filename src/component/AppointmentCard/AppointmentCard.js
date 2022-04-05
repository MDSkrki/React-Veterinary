import { useNavigate } from "react-router-dom";


export const AppointmentCard = (itemAppointment) => {
    
    const navigate = useNavigate();

    return (
        <div className="appointmentCard">
        <li>date: {itemAppointment.date}</li>
        <li>treatment: {itemAppointment.treatment}</li>
        <li>professional: {itemAppointment.professional}</li>
        <button onClick={()=>navigate("/EditAppointment"+itemAppointment.id)}>Edit appointment</button>
        <button>Delete appointment</button>
    </div>
    )
};