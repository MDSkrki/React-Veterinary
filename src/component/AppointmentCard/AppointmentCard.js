export const AppointmentCard = (appointment) => {
    return (
        <div className="appointmentCard">
        <li>date: {appointment.date}</li>
        <li>treatment: {appointment.treatment}</li>
        <li>professional: {appointment.professional}</li>
        <button>Edit appointment</button>
        <button>Delete appointment</button>
    </div>
    )
}