import './App.css';
import Login from './component/Admin/Login/Login';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Register from './component/Admin/Login/Register';
import AdminDahbord from './component/Admin/AdimnMain/AdminDahbord';
import AdminForm from './component/Admin/AdimnMain/AdminForm';
import Home from './component/Home/Home';
import AdminView from './component/Admin/AdimnMain/AdminView';
import AdminMain from './component/Admin/AdimnMain/AdminMain';

function App() {
  return (
   <>
   <ToastContainer />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/admin/login' element={<Login />} />
    <Route path='/admin/signup' element={<Register />} />
    <Route path='/admin' element={<AdminDahbord />} />
    <Route path='/admin/dashbord-form' element={<AdminForm />} />
    <Route path='/admin/view' element={<AdminView />} />
    <Route path='/admin-main' element={<AdminMain />} />
   </Routes>
   </>
  );
}

export default App;
