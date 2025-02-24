import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function RegistrationPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [allregistrationuser, setAllregistrationuser] = useState(JSON.parse(localStorage.getItem('registrationuser')) || [])
    let nav =useNavigate()

    const registrationData = (e) => {
        e.preventDefault()
        let registrationuser = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        let user = [...allregistrationuser, registrationuser]
        localStorage.setItem('registrationuser', JSON.stringify(user))
        setAllregistrationuser(user)

        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')

        Swal.fire({
            icon: 'success',
            title: 'Registration Successfull',
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(() => {
            nav('/LoginPage')
        }, 2000);

    }

    return (
        <>
            <Navbar />

            <div className="container d-flex justify-content-center align-items-center mb-5 mt-5">
                <div className="col-md-6 col-lg-4 col-sm-8">
                    <div className="card p-4 shadow-lg">
                        <h2 className="text-center mb-4">Register</h2>
                        <form onSubmit={registrationData}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your full name" onChange={(e) => setName(e.target.value)} value={name}  required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirm-password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}  required/>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Register</button>
                        </form>
                        <p className="text-center mt-3">Already have an account? <Link to={`/LoginPage`}>Login</Link></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RegistrationPage
