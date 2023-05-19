import React, { useEffect, useState } from 'react'
import authService from '../../Services/authService'
import { connect } from 'react-redux'
import get_qts from '../../redux/actions/QT-Actions'


function Home(props) {
    const[qdata,setQData] =useState([])


    useEffect(()=>{
        //getDat()
        get_qts()
    },[])

 
  return (
    <>
    <div className='container mt-5 home-page'>
{props.qts && props.qts.length >= 0 ?
    props.qts.map((q,i)=>{
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

const mapStateToPropes = state =>{
    return{
        qts:state.qts
    }
}
export default connect(mapStateToPropes)(Home)