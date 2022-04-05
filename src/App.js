import './App.css';
import RegisterUser from './containers/RegisterUser/RegisterUser.js';
import RegisterPet from './containers/RegisterPet/RegisterPet.js';
import Login from './containers/Login/Login.js';
import Home from './containers/Home/Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './containers/Profile/Profile.js';
import CreateAppointment from './containers/CreateAppointment/CreateAppointment.js';
import Logout from './containers/Logout/Logout.js';
import Header from './component/Header/Header.js';
import { Appointments } from './containers/Appointments/Appointments';
import EditAppointment from './containers/EditAppointment/EditAppointment.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegisterUser />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register/pet' element={<RegisterPet />} />
          <Route path='/login' element={<Login />} />
          <Route path='/appointment' element={<CreateAppointment />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/listAppointment' element={<Appointments/>}/>
          <Route path='/editAppointment' element={<EditAppointment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
