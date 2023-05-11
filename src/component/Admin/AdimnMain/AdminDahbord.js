import React, { useEffect, useState } from 'react'
import authService from '../../../Services/authService'
import { Link, useNavigate } from 'react-router-dom'


function AdminDahbord() {
  let navigate = useNavigate()
  const[qt,setQT] =useState([])
    useEffect(()=>{
        getDat()
        userLogin()
    },[])

    const userLogin = async() =>{
      const det = await localStorage.getItem('loginData')
      console.log('ssssssssssssss',det);
      if(!det){
          navigate('/admin/login')
      }
      
  }
    const getDat = async() =>{
        try {
            const data = await authService.AdminData()
            console.log(data.data.data,'data');
            if(data.data.success === true){
             setQT(data.data.data)
            }
            
        } catch (error) {
            
        }
    }
    const logoutHandelar = ()=>{
      localStorage.removeItem('loginData')
      navigate('/admin/login')

    }
    const viewHandelar= ()=>{

    }
    const deleteHandelar = async(item)=>{
      try {
        const obj ={
          id:item.id
        }
        const data = await authService.getdel(obj)
        if(data.data.success === true){    
          console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqq');     
          const newData = qt.filter((i)=>{
            return i.id != item.id
          })
          console.log('newData', newData);
          setQT(newData)
        }
        
      } catch (error) {
        
      }
      
    }
  return (
    <>

    <div className='container mt-5'>
      <div className='row shadow-sm pt-3 pb-3 mb-4'>
        <div className='col-md-6'>
          <h3>Questions List</h3>
        </div>
        <div className='col-md-6'>
          <div className='float-end '>
          <Link to='/admin/dashbord-form ' className='me-2'><button className='  btn btn-info' >New Questions</button></Link>
          <button className=' btn btn-info' onClick={()=>logoutHandelar()}>Logout</button>
        
          </div>
        </div>
      </div>
    <table class="table table-striped">
    <thead>
      <tr>
        <th>SNo</th>
        <th>Questions</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {qt && qt.length >0 ?
      qt.map((q,i)=>{
        return(
        <tr key={q.id}>
          <td>{1+i}</td>
          <td>{q.question}</td>
          <td onClick={()=>viewHandelar(q)}>View</td>
          <td onClick={()=>deleteHandelar(q)}>Delete</td>

        </tr>

     )})
      :<p>No Data</p>
      }
    </tbody>
  </table>
    </div>
    </>
  )
}

export default AdminDahbord