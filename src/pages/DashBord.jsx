import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'

import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function DashBord() {


  const [showLoginUser, setshowLoginUser] = useState(JSON.parse(localStorage.getItem('loginuserdata')) || [])

  let nav = useNavigate()

    useEffect(()=>{
      let login = JSON.parse(localStorage.getItem('loginuserdata'));
      if(!login || login.length == 0){
        nav('/LoginPage');
      }
  },[])




  const logoutUser = (name) => {

    let logout = showLoginUser.filter((val) => {
      return (
        val.name != name
      )
    })


    setshowLoginUser(logout)
    localStorage.setItem('loginuserdata', JSON.stringify(logout))


    setTimeout(() => {
      nav('/')
    }, 2000);

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
                showLoginUser.map((val, index) => {
                  return (

                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td><img src="userDummi img.avif" className="rounded-circle img-fluid" alt="User Photo" height={"40px"} width={'40px'} /></td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => logoutUser(val.name)}> Log Out </button>
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
