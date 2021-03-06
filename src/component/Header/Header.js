import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import store from '../../store/store';
import './Header.css';


const Header = () => {

    // Hooks
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        store.subscribe(() => {
            console.log("El estado: " + store.getState().login + "id:" + store.getState().id);

            setLogged(store.getState().login);
        });
    }, []);

    return (
        <div>
            <nav>
                <br/>
                <Link to="/"><button>Home</button></Link>
                <Link to="/profile"><button>Profile</button></Link>
                {!logged && <Link to='/login'><button>Login</button></Link>}
                {logged && <Link to='/logout'><button>Logout</button></Link>}
                <Link to='/register'>
                    <button>Register</button>
                </Link>
            </nav>

        </div>
    )
};

export default Header;