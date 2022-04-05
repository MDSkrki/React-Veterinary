export const Appointments = () => {

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
            <div><button>Add new Appointment</button></div>
            <div>
                <ul>
                    {appointments.map((appointment) => {
                        return (
                            <div className="appointmentCard">
                                <li>date: {appointment.date}</li>
                                <li>treatment: {appointment.treatment}</li>
                                <li>professional: {appointment.professional}</li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};