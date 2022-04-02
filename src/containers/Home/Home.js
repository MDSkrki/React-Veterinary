import './Home.css';
import Logo from '../../images/Desktop - 1.png';
import { Link } from 'react-router-dom';



const Home = () => {

    return (
        <div>
            <img src={Logo} alt="logo" />
            <Link to='/register'>
                <div><button>Register</button></div>
            </Link>

        </div>
    )
};

export default Home