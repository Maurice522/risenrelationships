import React from 'react'
import "./button.css"

function Button({text}) {
  return (
    <>
    <a href='mailto:help.solutions101@gmail.com' style={{textDecoration:"none", textAlign:"justify"}} className="custom-btn btn-16">{text}</a>
    </>
  )
}

export default Button