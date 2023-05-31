import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Cards.css'

function Vrcards() {
    return (
        <>
        <div className='container row'>
            <div class="orcard1 col">
                <div class="card-body">
                    <h4 class="card-title">Recent Vendors</h4>
                    <p>+3.34%</p>
                    <h5>108</h5>
                </div>
            </div>
            <div class="orcard2 col">
                <div class="card-body">
                    <h4 class="card-title">Verified Vendors</h4>
                    <p>+2.34%</p>
                    <h5>34</h5>
                </div>
            </div>
            <div class="orcard2 col">
                <div class="card-body">
                    <h4 class="card-title">Unverified Vendors</h4>
                    <p>+3.34%</p>
                    <h5>22</h5>
                </div>
            </div>
           <Link to={'/addvendor'} class="addproduct col"><div>
                <div class="card-body">
                    <i class="ri-add-line"></i>
                    <h4 class="card-title"> Add Vendor</h4>
                </div>
            </div>
            </Link> 
        </div>
        <div className='longdiv1'>
            <h5>All Vendors</h5>
            <nav>
                <li>All</li>
                <li>Today</li>
                <li className='a1'>Weekly</li>
                <li>Monthly</li>
            </nav>
        </div>

        <div className='largediv1'>
            <nav className='navdiv'>
                <li>No.</li>
                <li>Product ID</li>
                <li>Date</li>
                <li>Vendor Name</li>
                <li>Place</li>
                <li>Contact</li>
                <li>Email</li>
                <li>Documents-1</li>
                <li>Documents-2</li>
                <li>Status</li>
                <li>Action</li>
            </nav>
        </div>
    </>
    )
}

export default Vrcards
