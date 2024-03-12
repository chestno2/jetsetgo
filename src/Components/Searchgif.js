import React from 'react'
import Search from "../Assets/Search.json"
import Lottie from "lottie-react";

const style ={
  width:200,
  height:200,
}

function Searchgif() {
  return (
    <Lottie style={style} animationData={Search} loop={true} autoplay={true} />
  )
}

export default Searchgif