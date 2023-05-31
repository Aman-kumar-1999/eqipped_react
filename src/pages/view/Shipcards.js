import React from 'react'
import { Link } from 'react-router-dom'

function Shipcards() {
    return (
        <div>
            <>
                <div className='container row'>
                    <div class="orcard1 col">
                        <div class="card-body">
                            <h4 class="card-title">New Shipments</h4>
                            <p>+3.34%</p>
                            <h5>108</h5>
                        </div>
                    </div>
                    <div class="shipcard col">
                        <div class="card-body">
                            <h4 class="card-title" className='newh'>Delivered</h4>
                            <p>+3.34%</p>
                            <h5>22</h5>
                        </div>
                    </div>
                    <div class="shipcard2 col">
                        <div class="card-body">
                            <h4 class="card-title" className='newh'>Replacement/Cancelled</h4>
                            <h5>22</h5>
                        </div>
                    </div>
                    <div class="shipcard3 col">
                        <div class="card-body">
                            <h4 class="card-title" className='newcancel'> Cancelled</h4>
                            <h5>3</h5>
                        </div>
                    </div>
                </div>
                <div className='longdiv1'>
                    <h5>All Shipments</h5>
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
                        <li>Time</li>
                        <li>Product Type</li>
                        <li>Category</li>
                        <li>Quantity</li>
                        <li>Price(each)</li>
                        <li>Total Price</li>
                        <li>Status</li>
                        <li>Action</li>
                    </nav>
                </div>
            </>
        </div>
    )
}

export default Shipcards
