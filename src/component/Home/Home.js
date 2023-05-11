import React, { useEffect, useState } from 'react'
import authService from '../../Services/authService'

function Home() {
    const[qdata,setQData] =useState([])

    useEffect(()=>{
        getDat()
    },[])

    const getDat = async() =>{
        try {
            const data = await authService.AdminData()
            console.log(data.data.data,'setQData');
            if(data.data.success === true){
            setQData(data.data.data)
            }
            
        } catch (error) {
            
        }
    }
  return (
    <>
    <div className='container mt-5 home-page'>
{qdata && qdata.length >= 0 ?
    qdata.map((q,i)=>{
        return(
        <div className='w-100 mb-2 home-main' key={q.id}>
            <p className='mb-1 home-question'>{i+1}. {q.question}</p>
            <p className='home-answer'>ANS:<span>{q.answer}</span></p>

        </div>
        )
    })
    :<p>No Data</p>
}
    </div>
    </>
  )
}

export default Home