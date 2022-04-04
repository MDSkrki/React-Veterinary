import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import store from '../../store/store';


const Header = () => {
    const [logged, setLogged] = useState(false);

    useEffect(()=>{
        store.subscribe(()=>{
            console.log("El estado: " + store.getState().login + "id:" + store.getState().id);

            setLogged(store.getState().login);
        });
    }, []);

    return(
        <div>
            <a href="../../containers/Home/Home.js">Home</a>
            <a href="../../containers/Profile/Profile.js">Profile</a>
            <a href="../../containers/ListAppointments/ListAppointment.js">Appointment</a>
            <Link to='/login'>
                {!logged && <button>Login</button>}
            </Link>
            <Link to='/logout'>
                {logged && <button>Logout</button>} 
            </Link> 
            <Link to='/register'>
                <button>Register</button>
            </Link>
        </div>
    )
};

export default Header;