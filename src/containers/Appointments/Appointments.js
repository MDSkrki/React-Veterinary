import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppointmentCard } from "../../component/AppointmentCard/AppointmentCard";

export const Appointments = () => {

    // Hooks
    const navigate = useNavigate();
    const location = useLocation();
    const [appointments, setAppointments] = useState([]);

    const appointmentList = async () => {
        const appointmentResults = await fetch("https://chen-veterinary.herokuapp.com/appointment?idPet=" + location.state.id, {
            method: "GET"
        });

        const dataAppointments = await appointmentResults.json();
        console.log(dataAppointments);

        setAppointments(dataAppointments);
    }

    useEffect(() => {
        try {
            appointmentList();
        } catch (error) {
            console.log(error)
        }
    }, []);

    // Handlers
    const buttonHandler = () => {
        navigate('/appointment', { state: location.state });
    }

    return (
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