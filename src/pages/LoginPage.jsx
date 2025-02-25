import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'


function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registrationuser, setAllregistrationuser] = useState(JSON.parse(localStorage.getItem('registrationuser')) || [])
  const [loginArry,setLoginArry] = useState(JSON.parse(localStorage.getItem('loginuserdata')) || []) ;
 let nav = useNavigate()
 
 const handelSubmit = (e) => {
   e.preventDefault()
   
   
   let loginUser = registrationuser.find((val) => {
     return (
        val.email == email && val.password == password
      )
    })
    
    
    if(loginUser){
      Swal.fire({
        title: " Login Successfully !",
        icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 2000
          });
          
          let login= [...loginArry,loginUser]

          localStorage.setItem('loginuserdata',JSON.stringify(login));

          setLoginArry(login)

          


          setTimeout(() => {
            nav('/')
          }, 2000);

    }else{

        Swal.fire({
            title: " your Password Not Match ! && first Register Then Login",
            icon: "error",
            draggable: true,
            showConfirmButton: false,
            timer: 2000
          });
    }


    setEmail('')
    setPassword('')


  }
  return (
    <>
      <Navbar />

      <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="col-md-6 col-lg-4 col-sm-8">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handelSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <p className="text-center mt-3">Don't have an account? <Link to={`/RegistrationPage`}>Register</Link></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default LoginPage
