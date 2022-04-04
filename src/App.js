import './App.css';
import Register from './containers/Register/Register.js';
import RegisterPet from './containers/RegisterPet/RegisterPet.js';
import Login from './containers/Login/Login.js';
import Home from './containers/Home/Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './containers/Profile/Profile';
import Appointment from './containers/Appointment/Appointment';
import Logout from './containers/Logout/Logout.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register/pet' element={<RegisterPet />} />
          <Route path='/login' element={<Login />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
