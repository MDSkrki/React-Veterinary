import { useParams } from "react-router-dom"

const EditAppointment = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [appointment, setappointment] = useState([]);

    const appointmentList = async () => {        //traer citas por id +params.id
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


    return(
        <div>
            // input ** defaultvalue (datos de la cita)
        </div>

    )
}