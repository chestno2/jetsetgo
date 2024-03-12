
import React from 'react'
import flightgifi from "../Assets/flightanimation.json"
import Lottie from "lottie-react";



function Flightgif() {
  return (
    <Lottie animationData={flightgifi} loop={true} autoplay={true} />
  )
}

export default Flightgif