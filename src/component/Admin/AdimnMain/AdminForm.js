import React, { useState } from 'react'
import authService from '../../../Services/authService'
import { Link, useNavigate } from 'react-router-dom'

function AdminForm() {
    const [question,setQuestion]=useState('')
    const [answer,setAnswer]=useState('')
    const [type,setType]=useState('')
    const navigate = useNavigate()

    const submit = async () =>{
        //alert('testing')
        try {
            const obj ={
                question:question,
                answer:answer,
                type:type
            }
            const data = await authService.AdminDataPost(obj);
            console.log(data)
            setQuestion('')
            setAnswer('')
            setType('')           
            
        } catch (error) {
            
        }
    }
    const logoutHandelar = ()=>{
        localStorage.removeItem('loginData')
        navigate('/admin/login')
  
      }
  return (
    <div className='container mt-5'>
    
    <div className='row shadow-sm pt-3 pb-3 mb-4'>
        <div className='col-md-6'>
          <h3>Questions List</h3>
        </div>
        <div className='col-md-6'>
            <div className='float-end'>
        <Link to='/admin ' className='me-2'><button className='  btn btn-info' >Back</button></Link>
          <button className='  btn btn-info' onClick={()=>logoutHandelar()}>Logout</button>
          </div>
        </div>
      </div>
      <div className='w-75 mx-auto p-5'>
        <input type='text' className='form-control mb-3' placeholder='question' value={question} onChange={(e)=>setQuestion(e.target.value)} />
        
        <select className='form-control  mb-3' onChange={e=>setType(e.target.value)} value={type}>
            <option value="Select Technical Skill">Select Technical skill</option>
            <option value='Reactjs'>React Js</option>
            <option value='Html'>HTML</option>
            <option value='Css'>CSS</option>
            <option value='Javascript'>Java Script</option>
        </select>
        <textarea value={answer} className='form-control mb-3' onChange={e=>setAnswer(e.target.value)}>{answer}</textarea>
        <button className='btn btn-info' onClick={()=>submit()} >Submit</button>
    </div>
    </div>
  )
}

export default AdminForm