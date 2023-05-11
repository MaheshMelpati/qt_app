import React, { useState } from 'react'

import authService from '../../../Services/authService'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [psw,setPsw] = useState('')
    const [cpsw,setCPsw] = useState('')
    const [loding,setLoding] = useState(false)
    const navigate = useNavigate()
    const RegisterHandelar = async() =>{
        setLoding(true)
        if(!name){
            alert('plz Enter Name')
            setLoding(false)
        }
        else if(!email){
            alert('plz Enter email')
            setLoding(false)
        }
        else if(!psw){
            alert('plz Enter pasword')
            setLoding(false)
        }
        else if(!cpsw){
            alert('plz Enter Conform pasword')
            setLoding(false)
        }
        else if(psw != cpsw){
            alert('plz Enter pasword and conform paswword saame')
            setLoding(false)
        }
        else{
            const obj ={
                email:email,
                password:psw
            }
            const data = await authService.Register(obj);
            console.log(data)
            //alert('successfuly completed')
            navigate('/admin/login')
        }
    }
  return (
    <>
   
    <div className='login-page'>
        <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card shadow">
          <div className="card-title text-center border-bottom">
            <h2 className="p-3">Register</h2>
          </div>
          <div className="card-body">
          
              <div className="mb-4">
                <label className="form-label">Name</label>
                <input type='text' placeholder='Name...' className='form-control mb-3' value={name} onChange={(e)=>setName(e.target.value)} />
              </div>
              <div class="mb-4">
                <label className="form-label">Email</label>
                <input type='email' placeholder='Email...' className='form-control mb-3' value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div class="mb-4">
                <label className="form-label">Password</label>
                <input type='password' placeholder='password...' className='form-control mb-3' value={psw} onChange={(e)=>setPsw(e.target.value)} />
              </div>

              <div class="mb-4">
                <label className="form-label">Conform Password</label>
                <input type='password' placeholder='Conform password...' className='form-control mb-3' value={cpsw} onChange={(e)=>setCPsw(e.target.value)} />
              </div>
             
              <div class="d-grid">
                {!loding ?                
                <button type="submit" className="btn text-light main-bg" onClick={()=>RegisterHandelar()}>Submit</button>
                :
                <button type="submit" className="btn text-light main-bg" disabled>processing...</button>
}
                
              </div>
              <div className="mb-4">
                <Link className='login-name' to="/">Login</Link>
              </div>
         
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default Register