import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const AppointmentCard = ({appointment}) => {

    const navigate = useNavigate();

    useEffect (()=>{
        console.log(appointment);
    }, []);

    return (
        <div className="appointmentCard">
        <li>date: {appointment.date}</li>
        <li>treatment: {appointment.treatment}</li>
        <li>professional: {appointment.professional}</li>
        <button onClick={()=>navigate("/EditAppointment"+appointment.id)}>Edit appointment</button>
        <button>Delete appointment</button>
    </div>
    )
};