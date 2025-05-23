
import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavbarComponent from './Components/NavbarComponent';
 
import Signup from './Components/signUp';
import HomepageComponent from './Components/userHome';
import LoginMatchingSignup from './Components/login';
import Booking from './Components/booking';
import AdminPage from './Components/adminHome';




function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/login' element={<LoginMatchingSignup/>}></Route>
        <Route path='/home' element={<HomepageComponent />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/Admin' element={<AdminPage />}></Route>
  <Route path='/booking' element={<Booking />}></Route> 

      </Routes>
    </div>
  );
}

export default App
