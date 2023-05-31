import React from 'react';
import '../css/Cards.css'
function Orcards() {
  return (
    <>
    <div className='container row'>
   <div class="orcard1 col">
  <div class="card-body">
    <h4 class="card-title">Recent Orders</h4>
    <p>+3.34%</p>
    <h5>108</h5>
  </div>
</div>
<div class="orcard2 col">
  <div class="card-body">
    <h4 class="card-title">Confirmed Orders</h4>
    <p>+2.34%</p>
    <h5>34</h5>
  </div>
</div>
<div class="orcard2 col">
  <div class="card-body">
    <h4 class="card-title">Pending Orders</h4>
    <p>+3.34%</p>
    <h5>22</h5>
  </div>
</div>
<div class="orcard3 col">
  <div class="card-body">
    <h4 class="card-title"> Cancelled Orders</h4>
    <p>-2.34%</p>
    <h5>10</h5>
  </div>
</div>
</div>
<div className='longdiv1'>
    <h5>Total Orders</h5>
    <nav>
        <li>All</li>
        <li>Today</li>
        <li className='a1'>Weekly</li>
        <li>Monthly</li>
    </nav>
</div>
<div class="table-responsive">
  <table class="table">
  <div className='largediv1'>
    <nav>
        <li>No.</li>
        <li>Product ID</li>
        <li>Date</li>
        <li>Customer Name</li>
        <li>Place</li>
        <li>Product</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Status</li>
        <li>Action</li>
    </nav>
    </div>
  </table>
</div>
  </>
  )
}

export default Orcards