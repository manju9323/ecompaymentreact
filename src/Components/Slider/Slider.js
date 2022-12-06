import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./slider.scss"

function Slider() {
  const [currentslide,setcurrentslide]=useState(0)

  const data=[
    "https://cdn.pixabay.com/photo/2021/01/01/15/32/sushi-balls-5878894_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg",
    "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
]

 const preslide=()=>{
    setcurrentslide( currentslide === 0 ? 2 :(prev)=> prev - 1 )
 }

 const nextslide=()=>{
  setcurrentslide( currentslide === 2 ? 0 :(prev)=> prev + 1 )
} 

  return (
    <div className="slider">
    <div className='container' style={{transform:`translateX(-${currentslide * 100}vw)`}}>
      <img src={data[0]} alt=""/>
      <img src={data[1]} alt=""/>
      <img src={data[2]} alt=""/>
    </div>
    <div className='icons'>
      <div className="icon" onClick={preslide}>
         <WestOutlinedIcon/>
      </div>
      <div className="icon" onClick={nextslide}>
        <EastOutlinedIcon/>
        </div>
    </div>
    </div>
  )
}

export default Slider