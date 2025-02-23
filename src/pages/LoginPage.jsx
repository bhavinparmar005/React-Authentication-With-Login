import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <>
      <Navbar />
    
      <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="col-md-6 col-lg-4 col-sm-8">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center mb-4">Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required />
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
