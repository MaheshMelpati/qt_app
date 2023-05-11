import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Admin/Login/Login';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Register from './component/Admin/Login/Register';
import AdminDahbord from './component/Admin/AdimnMain/AdminDahbord';
import AdminForm from './component/Admin/AdimnMain/AdminForm';
import Home from './component/Home/Home';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home />} />
   <Route path='/admin/login' element={<Login />} />
    <Route path='/admin/signup' element={<Register />} />
    <Route path='/admin' element={<AdminDahbord />} />
    <Route path='/admin/dashbord-form' element={<AdminForm />} />
   </Routes>
   </>
  );
}

export default App;
