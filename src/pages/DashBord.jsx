import React from 'react'
import Navbar from '../components/Navbar'

import { useState } from 'react'
import Swal from 'sweetalert2'

function DashBord() {
  const [showRegistrationData, setShowRegistrationData] = useState(JSON.parse(localStorage.getItem('registrationuser')) || [])
  const logoutUser = () => {

    Swal.fire({
      icon: 'success',
      title: 'Log Out Successfull',
      showConfirmButton: false,
      timer: 2000

    });
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">User Dashboard</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.no</th>
                <th scope="col">User Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>

              {
                showRegistrationData.map((val, index) => {
                  return (

                    <tr>
                      <th scope="row" >{index + 1}</th>
                      <td><img src="userDummi img.avif" className="rounded-circle img-fluid" alt="User Photo" height={"40px"} width={'40px'} /></td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => logoutUser()}> Log Out </button>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default DashBord
