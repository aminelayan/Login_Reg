import axios from 'axios'
import React, { useEffect } from 'react'

const Tanas = () => {
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/tanas')
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // },[])
    
    const onClickhandler = e =>{
      e.preventDefault();
      axios.get('http://localhost:8000/api/logout')
       .then(res => console.log(res))
       .catch(err => console.log(err))
    }
  return (
    <div>
        <button onClick={onClickhandler}>Logout</button>
    </div>
  )
}

export default Tanas