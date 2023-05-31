import React from 'react'
import '../css/MyOrders.css'
function MyOrdercards() {
    return (
        <div>
            <h1 className='bigh1'>MY ORDERS</h1>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    {/* <img src="..." class="img-fluid rounded-start" alt="..."/> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 className='order'>Order Id:</h5>
                            <h5 className='product'>Product Id:</h5>
                            <h5 className='date'>Date:</h5>
                            <h4 className='status'>Status</h4>
                            <button className='btn'>VIEW</button>
                            </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    {/* <img src="..." class="img-fluid rounded-start" alt="..."/> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 className='order'>Order Id:</h5>
                            <h5 className='product'>Product Id:</h5>
                            <h5 className='date'>Date:</h5>
                            <h4 className='status'>Status</h4>
                            <button className='btn'>VIEW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    {/* <img src="..." class="img-fluid rounded-start" alt="..."/> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 className='order'>Order Id:</h5>
                            <h5 className='product'>Product Id:</h5>
                            <h5 className='date'>Date:</h5>
                            <h4 className='status'>Status</h4>
                            <button className='btn'>VIEW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    {/* <img src="..." class="img-fluid rounded-start" alt="..."/> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 className='order'>Order Id:</h5>
                            <h5 className='product'>Product Id:</h5>
                            <h5 className='date'>Date:</h5>
                            <h4 className='status'>Status</h4>
                            <button className='btn'>VIEW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrdercards
