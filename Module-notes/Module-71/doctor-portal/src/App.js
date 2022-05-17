import 'react-day-picker/dist/style.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import RequireAuth from './Components/RequireAuth /RequireAuth';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReviews from './Pages/Dashboard/MyReviews';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Users from './Pages/Dashboard/User'
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        }/>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
          }>
          <Route index path="/dashboard" element={<MyAppointment />} />
          <Route path="reviews" element={<MyReviews />} />
          <Route path="users" element={<Users/>} />
        </Route>

        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
