import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const AppointmentCard = ({appointment}) => {

    const navigate = useNavigate();

    useEffect (()=>{
        console.log(appointment);
    }, []);


    const buttonHandler = ()=>{
        navigate("/editAppointment", {state: appointment})
    };


    return (
        <div className="appointmentCard">
        <li>date: {appointment.date}</li>
        <li>treatment: {appointment.treatment}</li>
        <li>professional: {appointment.professional}</li>
        <button onClick={buttonHandler}>Edit appointment</button>
        <button>Cancel appointment</button>
    </div>
    )
};