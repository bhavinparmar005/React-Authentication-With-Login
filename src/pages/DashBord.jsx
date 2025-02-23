import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function DashBord() {
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
              <tr>
                <th scope="row">1</th>
                <td><img src="userDummi img.avif" className="rounded-circle img-fluid" alt="User Photo" height={"40px"} width={'40px'} /></td>
                <td>John Doe</td>
                <td>johndoe@example.com</td>
                <td>
                  <button className="btn btn-danger btn-sm"> Log Out </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td><img src="/userDummi img.avif" className="rounded-circle img-fluid" alt="User Photo" height={"40px"} width={'40px'} /></td>
                <td>Jane Smith</td>
                <td>janesmith@example.com</td>
                <td>
                  <button className="btn btn-danger btn-sm">Log Out</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default DashBord
