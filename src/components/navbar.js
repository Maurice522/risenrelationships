import React from 'react'
import Button from './button'
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg   " style={{backgroundColor:"#4CAF50", color:"#F9F7F7", paddingTop:"20px"}}>
        <div className='container'>
        <a className="navbar-brand" style={{fontSize:"24px", textTransform:"uppercase", letterSpacing:"4px",color:"#ffffff", fontWeight:"700", fontFamily: 'Kanit, sans-serif'}} href="/">Rise and Relationships</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", fontWeight:"600", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#fff"}} href="#">Explore </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", fontWeight:"600", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#fff"}} href="#">Courses</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", fontWeight:"600", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#fff"}} href="#">Blogs</a>
            </li>
            <li className="nav-item active" >
                <Button text="Contact"/>
            </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar