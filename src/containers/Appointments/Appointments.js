import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentCard } from "../../component/AppointmentCard/AppointmentCard";

export const Appointments = ({pet}) => {

    const navigate = useNavigate();

    const buttonHandler = () => {
        navigate('/appointment', { state: pet })
    }

    const [appointments, setAppointments] = useState([]);

    const appointmentList = async () => {
        const appointmentResults = await fetch ("https://chen-veterinary.herokuapp.com/appointment?idPet="+sessionStorage.getItem("idPet"), {
            method:"GET"
        });

        const dataAppointments = await appointmentResults.json();

        setAppointments(dataAppointments);
    }

    useEffect(()=>{
        try{
            appointmentList();
        } catch (error){
            console.log(error)
        }
    },[]);

    return(
        <div>
            <h1>These are your appointments:</h1>
            <button onClick={buttonHandler}>Add New Appointment</button>
            <div>
                <ul>
                    {appointments.map((appointment) => {
                        return (
                          <AppointmentCard appointment={appointment}></AppointmentCard>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};