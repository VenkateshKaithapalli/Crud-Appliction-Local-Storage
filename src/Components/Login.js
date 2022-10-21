import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom"
const Login = () => {

    const[email,setEmail]=useState('')
    const[psw,setPsw]=useState('')
    const[showpsw,setShowPsw]=useState('password')
    const navigate=useNavigate() 

   
    const showHandle=()=>{
      if(showpsw==='password'){
        setShowPsw('text')
      }
      else{
        setShowPsw('password')
      }
    }



    const submitHandler=(e)=>{
        e.preventDefault()
       
        if(email!=='venky@gmail.com' || psw!=='1234' ){
          alert('Invalid Data...')
           return false;
        }
        else if(email==='' || psw===''){
          alert('Invalid Data...')
          return false;
        }
        else{
          localStorage.setItem('Email', JSON.stringify(email))
          localStorage.setItem('Password', JSON.stringify(psw))
          console.log(email,psw)
          navigate('/mainpage')
        }
        
     }


  return (
    <div>
        <div className="vh-300 " >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-50">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
               className="img-fluid" style={{borderRadius: "1rem 0 0 1rem" }}/>
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form className='bg-light' onSubmit={submitHandler}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color:" #ff6219"}}></i>
                    <span className="h3 fw-bold mb-0">Login Form</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Sign into your account</h5>

                  <div className=" mb-4">
                    <input type="email"   value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control " />
                    <label className="form-label" >Email address</label>
                  </div>

                  <div className=" mb-4">
                    <input type={showpsw}  value={psw} onChange={(e)=>setPsw(e.target.value)} className="form-control " />
                    <label className="form-label" >Password</label>
                  </div>
                  <input type='checkbox' onClick={showHandle} /> Show Password..
                 
                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark  " type="submit">Login</button>
                  </div>

         
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Login