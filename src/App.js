import logo from './logo.svg';
import './App.css';
import Register from './containers/Register/Register.js';
import RegisterPet from './containers/RegisterPet/RegisterPet.js';
import Login from './containers/Login/Login.js';
import Home from './containers/Home/Home.js';

function App() {
  return (
    <div className="App">
    <Home></Home>
    <Login></Login>
    <Register></Register>
    <RegisterPet></RegisterPet>
    
    
    </div>
  );
}

export default App;
