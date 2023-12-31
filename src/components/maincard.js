import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.css"

function MainCard({props}) {
  console.log(props)
  let para="";
  for(var i=0;i<props.body.length;i++){
    if(props.body[i]!==undefined && props.body[i]!=="Introduction"&& props.body[i]!=='*'){
      
      para+=props.body[i];
    }

   
    
  }
  let str=" "
  for(let i=0;i<para.length;i++){
    if(para[i]!=="*"){
      str+=para[i]
    }

  }
  para=str;
  return (
    <>
    { true?
      <div  className="card" >
         <img src={props.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 style={{color: "#CEAB93", marginBottom:"10px"}}className="card-title">{props.heading}</h5>
        <p style={{color: "#aaaaaa", fontSize: "17px", textAlign:"justify", marginTop:"10px"}}>{ para.slice(0,400)}... </p> 
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
    :null}
    </>
    
  )
}

export default MainCard