import React from 'react'
import { Link } from 'react-router-dom'
function Prcards() {
    return (
        <div>
            <>
                <div className='container row'>
                    <div class="orcard1 col">
                        <div class="card-body">
                            <h4 class="card-title">Recent Products</h4>
                            <p>+3.34%</p>
                            <h5>108</h5>
                        </div>
                    </div>
                    <div class="orcard2 col">
                        <div class="card-body">
                            <h4 class="card-title">Listed Products</h4>
                            <p>+2.34%</p>
                            <h5>34</h5>
                        </div>
                    </div>
                    <div class="orcard2 col">
                        <div class="card-body">
                            <h4 class="card-title">Unlisted Products</h4>
                            <p>+3.34%</p>
                            <h5>22</h5>
                        </div>
                    </div>
                   <Link to={'/addproduct'} class="addproduct col"><div>
                        <div class="card-body">
                            <i class="ri-add-line"></i>
                            <h4 class="card-title"> Add Product</h4>
                        </div>
                    </div>
                    </Link> 
                </div>
                <div className='longdiv1'>
                    <h5>All Products</h5>
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
                        <li>Product Type</li>
                        <li>Category</li>
                        <li>Quantity</li>
                        <li>Price</li>
                        <li>Total Price</li>
                        <li>Status</li>
                        <li>Action</li>
                    </nav>
                </div>
            </>
        </div>
    )
}

export default Prcards
