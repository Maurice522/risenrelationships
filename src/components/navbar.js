import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Button from './button'
import "./navbar.css"

function Navbar() {
    const [open,setopen]=useState(false);
    const [drop, setDrop] = useState(false);
    const navigate=useNavigate();
    const options = [
        { value: 'Dating', label: 'Dating' },
        { value: 'Relationships with family and friends', label: 'Relationships with family and friends' },
        { value: 'Relationships and mental health', label: 'Relationships and mental health' },
        { value: 'Relationships with professionals', label: 'Relationships with professionals' },
        { value: 'Relationships in different stages of life', label: 'Relationships in different stages of life' },
       
      ]
  return (
    <nav className="navbar navbar-expand-lg   " style={{backgroundColor:"#AD8B73", color:"#F9F7F7", paddingTop:"20px"}}>
        <div className='container'>
        <a className="navbar-brand" style={{fontSize:"24px", textTransform:"uppercase", letterSpacing:"4px",color:"#ffffff", fontWeight:"700", fontFamily: 'Kanit, sans-serif'}} href="/">Rise and Relationships</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon" onClick={()=>setopen(!open)}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:open?"unset":"none"}}>
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", fontWeight:"600", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#fff"}} href="/">Explore </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{marginLeft:"20px", fontWeight:"600", textTransform:"uppercase", fontSize:"18px", letterSpacing:'1px',color:"#fff"}} href="#">Courses</a>
            </li>
            <li className="nav-item active">
                            <a className="nav-link" style={{ marginLeft: "20px", textTransform: "uppercase", fontSize: "18px", letterSpacing: '1px', color: "#fff" }} href="#" onClick={() => setDrop(!drop)}>Blogs</a>
                            {drop ? (
                                
                                <div className="menu">
                                  {  options.map((value,index)=>(
                                        <div className="menu-item" onClick={()=>navigate(`/blog/${value.value}`)}>
                                        {value.value}
                                    </div>)
                                    )
                                  }
                                    
                                    
                                </div>
                            ) : null}
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