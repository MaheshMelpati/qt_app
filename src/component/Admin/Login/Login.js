import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import authService from '../../../Services/authService'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [email,setEmail] = useState('')
    const [psw,setPSW] = useState('')
    const [loding,setLoding] =useState(false)
    let navigate = useNavigate()
    useEffect(()=>{
      userLogin()
    },[])

    const userLogin = async() =>{
      const det = await localStorage.getItem('loginData')
      console.log('ssssssssssssss',det);
      if(det){
          navigate('/admin')
      }
      
  }
    const loginHandelar = async() =>{
        setLoding(true)
        if(!email){
            toast.error('Plz Enter Email')
            alert('Plz Enter Email')
            setLoding(false)
        }
        else if(!psw){

            toast.error('Plz Enter password')
            alert('Plz Enter password')
            setLoding(false)
        }
        else{
            try {
                
                const obj ={
                    email:email,
                    password:psw
                }
                const data = await authService.Login(obj);
                console.log(data)
                navigate('/admin')
                setLoding(false)

                
            } catch (error) {
                
            }
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
            <h2 className="p-3">Login</h2>
          </div>
          <div className="card-body">
          
              <div className="mb-4">
                <label for="username" className="form-label">Username/Email</label>
                <input type='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}  />
              </div>
              <div className="mb-4">
                <label for="password" className="form-label">Password</label>
                <input type='password' className='form-control mt-2' value={psw} onChange={(e)=>setPSW(e.target.value)}  />
              </div>
             
              <div className="d-grid">
                {!loding ?
                <button type="submit" className="btn text-light main-bg" onClick={()=> loginHandelar()}>Login</button>
                :
                <button type="submit" className="btn text-light main-bg" disabled>Processing...</button>
                }
                
              </div>
              <div className="mb-4">
                <Link className='login-name' to="/signup">Register</Link>
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

export default Login