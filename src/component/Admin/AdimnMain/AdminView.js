import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function AdminView() {
    const Location = useLocation()
    const data = Location.state.data;
    const navigate = useNavigate()
    console.log('Location',Location)
    const logoutHandelar = ()=>{
        localStorage.removeItem('loginData')
        navigate('/admin/login')
  
      }
  return (
   <>
   <div className='container mt-5'>
   <div className='row shadow-sm pt-3 pb-3 mb-4'>
        <div className='col-md-6'>
          <h3>Questions View : {data.question}</h3>
        </div>
        <div className='col-md-6'>
          <div className='float-end '>
          <Link to='/admin' className='me-2'><button className=' btn btn-info' >Back</button></Link>
          <button className=' btn btn-info' onClick={()=>logoutHandelar()}>Logout</button>
        
          </div>
        </div>
      </div>
    <div className='w-100 bg-secondary p-5 text-white rounded'>
    <div className='w-100 mb-3'>
        <span className='w-25'><b>question: </b></span>
        <span className='ms-1 w-75'>{data.question}</span>
    </div>
    <div className='w-100 mb-3'>
        <span className='w-25'><b>Type: </b></span>
        <span className='ms-1 w-75'>{data.type}</span>
    </div>
    <div className='w-100 '>
        <span className='w-25'><b>Answer: </b></span>
        <span className='ms-1 w-75'>{data.answer}</span>
    </div>
   </div>
   </div>
   </>
  )
}

export default AdminView