import React, { useEffect, useState } from 'react'
import './index.css'

function App() {

  const lightConfig={
    red:{
      next:"yellow",
      time:4000
    },
    yellow:{
      next:"green",
      time:3000
    },
    green:{
      next:"red",
      time:5000
    }
  }
  const [light,setLight]=useState("red")

  useEffect(()=>{

    setTimeout(()=>{
      setLight(lightConfig[light].next)
    },lightConfig[light].time)
  },[light])




  return (
    <>
      <div className='container'>
        <div className={`light red ${light === "red"?"active":""}`} ></div>
        <div className={`light yellow ${light === "yellow"?"active":""}`} ></div>
        <div className={`light green ${light === "green"?"active":""}`} ></div>
      </div>
    </>
  )
}

export default App
