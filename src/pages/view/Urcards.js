import React from 'react'
import { Link } from 'react-router-dom'

function Urcards() {
  return (
    <div>
      <>
        <div className='container row'>
            <div class="orcard1 col">
                <div class="card-body">
                    <h4 class="card-title">Recent Users</h4>
                    <p>+3.34%</p>
                    <h5>238</h5>
                </div>
            </div>
            <div class="orcard2 col">
                <div class="card-body">
                    <h4 class="card-title">Verified Users</h4>
                    <p>+2.34%</p>
                    <h5>96</h5>
                </div>
            </div>
            <div class="orcard2 col">
                <div class="card-body">
                    <h4 class="card-title">Unverified Users</h4>
                    <p>+3.34%</p>
                    <h5>22</h5>
                </div>
            </div>
           <Link to={'/adduser'} class="addproduct col"><div>
                <div class="card-body">
                    <i class="ri-add-line"></i>
                    <h4 class="card-title"> Add User</h4>
                </div>
            </div>
            </Link> 
        </div>
        <div className='longdiv1'>
            <h5>All Users</h5>
            <nav>
                <li>All</li>
                <li>Today</li>
                <li className='a1'>Weekly</li>
                <li>Monthly</li>
            </nav>
        </div>

        <div className='largediv1'>
            <nav className='navdiv2'>
                <li>No.</li>
                <li>User ID</li>
                <li>Date</li>
                <li>Vendor Name</li>
                <li>Place</li>
                <li>Contact</li>
                <li>Email</li>
                <li>Address</li>
                <li>Status</li>
                <li>Action</li>
            </nav>
        </div>
    </>
    </div>
  )
}

export default Urcards
