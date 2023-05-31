import React from 'react'
import '../css/Profile.css'
function Profilecards() {
  // const userData = JSON.parse()
  return (
    <>
      <div className='card-container'>
        <div className='imgholder'>
          <img src="aman.jpg" alt="" />
        </div>
        <div class="FirstName">
          <h6 for="exampleInputEmail1" class="form-label">First Name</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="LastName">
          <h6 for="exampleInputEmail1" class="form-label">Last Name</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class=" CompanyName ">
          <h6 for="exampleInputEmail1" class="form-label">Company Name</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="Designation">
          <h6 for="exampleInputEmail1" class="form-label">Designation</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="DOB">
          <h6 for="exampleInputEmail1" class="form-label">Date Of Birth:</h6>
          <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className='Gender'>
          <h5>Gender</h5>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label class="form-check-label" for="inlineCheckbox1">Male</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label class="form-check-label" for="inlineCheckbox2">Female</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label class="form-check-label" for="inlineCheckbox2">Others</label>
          </div>
        </div>
      </div>


      < div className='card-container2'>
        <h3 className='bigh'>ADD DELIVERY ADDRESS</h3>
        <div class=" CompanyName2 ">
          <h6 for="exampleInputEmail1" class="form-label">Company Name(Optional)</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="FirstName2">
          <h6 for="exampleInputEmail1" class="form-label">First Name</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="LastName2">
          <h6 for="exampleInputEmail1" class="form-label">Last Name</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="City">
          <h6 for="exampleInputEmail1" class="form-label">City</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="State">
          <h6 for="exampleInputEmail1" class="form-label">State</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="Pincode">
          <h6 for="exampleInputEmail1" class="form-label">Pincode</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="form-floating" className='Address'>
          <h6>Address</h6>
          <textarea class="form-control" id="floatingTextarea2"></textarea>
          <label for="floatingTextarea2"></label>
        </div>
        <div class="Contact">
          <h6 for="exampleInputEmail1" class="form-label">Contact Number</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="ContactA">
          <h6 for="exampleInputEmail1" class="form-label">Contact Number(Alternate)</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="Email">
          <h6 for="exampleInputEmail1" class="form-label">Email ID</h6>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </div>
    </>
  )
}

export default Profilecards
