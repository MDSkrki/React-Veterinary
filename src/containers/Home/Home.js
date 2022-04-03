import './Home.css';
import Logo from '../../images/Desktop - 1.png';
import { Link } from 'react-router-dom';



const Home = () => {

    return (
        <div>
            <img src={Logo} alt="logo" />
            <div>
            <Link to='/login'>
                <button>Login</button>
            </Link>
            <Link to='/register'>
                <button>Register</button>
            </Link>
            </div>
        </div>
    )
};

export default Home