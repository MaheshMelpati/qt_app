import React, { useEffect, useState } from 'react'
import get_qts from '../../../redux/actions/QT-Actions'
import { connect } from 'react-redux'

function AdminMain(props) {
  
    useEffect(()=>{
        get_qts()
    })
  return (
    <>
   {props.qts && props.qts.length > 0 ?
   props.qts.map((e,i)=>{
    return(
      <div className='' key={e.id}>
      <p>{e.question}</p>
      <p>{e.answer}</p>
      </div>
     
    )

   }):<p>No Data</p>
   }
    </>
  )
}

const mapStateToPropes = state =>{
  return{
      qts:state.qts
  }
}
export default connect(mapStateToPropes)(AdminMain)