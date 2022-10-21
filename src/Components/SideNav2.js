import React, { useState } from 'react'
import {  Link,Outlet,useNavigate } from 'react-router-dom'


import './SideNav2.css'
const SideNav2 = () => {
    const navigate=useNavigate() 
const[isActive,setIsActive] =useState(1) 
const linkHandle=(e)=>{
  setIsActive(e.target.getAttribute('navs'))
} 
 const onNavigate=()=>{
        navigate('/')
        localStorage.removeItem('Email')
        localStorage.removeItem('Password')
    }
  return (
    <div>
        <div id="viewport">

  <div id="sidebar">
    <header>
      <a href="#">My CRUD App</a>
    </header>
    <ul className="nav">
      <li>
        <Link navs={1} className={isActive==='1'?'text-info':'text-light'}  onClick={linkHandle} to='dashboard'>
          Dashboard
        </Link>
      </li>
      <li>
       <Link navs={2} className={isActive==='2'?'text-info':'text-light'}  onClick={linkHandle} to='shortcut'>
       Shortcuts
       </Link>
         
      
      </li>
      
     
      <li>
        <Link navs={3} className={isActive==='3'?'text-info':'text-light'}  onClick={linkHandle} to="About">
              Aboutus
        </Link>
      </li>
      
      <li>
      <Link navs={4} className={isActive==='4'?'text-info':'text-light'}  onClick={linkHandle} to="Contact">
             Contact
        </Link>
      </li>
      {/* <Outlet/> */}
    </ul>
  </div>
<div className='container '>
  <div className='row'>
  <div className='col-sm-12'>
  <div id="content" >
    <nav className="navbar navbar-default ">
      <div className="container-fluid ">
             <div>
          <div className='text-primary'>Tectoro</div> 
          </div>
          <div className='d-flex'>
           <div className=' text text-primary' >{JSON.parse(localStorage.getItem('Email'))}</div>&emsp;
           <div >
        <button className='  btn ' onClick={onNavigate}><i className="fa-solid fa-right-from-bracket"></i>logout</button>
        </div>
        </div>
      </div>
      
    </nav>
    <div className="container-fluid">
      {/* <DashBoard/> */}
      <Outlet/>
    
    </div>
  </div>
  </div>
</div>
</div>
</div>
    </div>
  )
}

export default SideNav2