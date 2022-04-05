export const AppointmentCard = (appointment) => {

    const [appointment, setappointment] = useState([]);

    const appointmentList = async () => {
        const appointmentResults = await fetch ("https://chen-veterinary.herokuapp.com/pet?idUser="+sessionStorage.getItem("iduser"), {
            method:"GET"
        });

        const dataAppointment = await appointmentResults.json();

        setappointment(dataAppointment);
    }

    useEffect(()=>{
        try{
            appointmentList();
        } catch (error){
            console.log(error)
        }
    },[]);


    return (
        <div className="appointmentCard">
        <li>date: {appointment.date}</li>
        <li>treatment: {appointment.treatment}</li>
        <li>professional: {appointment.professional}</li>
        <button >Edit appointment</button>
        <button>Delete appointment</button>
    </div>
    )
};