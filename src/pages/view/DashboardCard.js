import React from 'react'
import '../css/DashboardCard.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import baseUrl from '../../helper/helper';

function DashboardCards() {
  const createAdmin = async (event) => {
    event.preventDefault();
    try {



      const response = await fetch(`${baseUrl}/user/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      });
      if (response.status == 503) {
        toast('Server is down', {
          position: 'top-center'
        });
      } else if (response.status == 500) {
        toast('Unable To Fetch Vendor Data', {
          position: 'top-center'
        });
      }
      else if (response.ok) {
        const count = 0
        const jsonData = await response.json();

        const length = Object.keys(jsonData).length;
        
        // jsonData.forEach(element => {
        //   count++
        // });


        console.log('This is count')
        console.log(length);





        console.log(jsonData);



      } else {

        throw new Error('Failed to Create');
      }

    } catch (err) {
      // Handle error
      toast('Server is down', {
        position: 'top-center'
      });
      console.error(err);
    }
  }

  return (
    <>
      <div class="container text-center dashboardCard ">
        <div class="row">
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Orders</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> 556</h6>
              <Link className='newOder'>256 New Orders</Link>
              <br />
              <Link className='viewAllOrders'>View All Orders</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>fluid_med</span></p>
            </div>
          </div>
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Products</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> 556</h6>
              <Link className='newOder' onClick={createAdmin}>256 New Products</Link>
              <br />
              <Link className='viewAllOrders'>View All Products</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>science</span></p>
            </div>
          </div>
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Vendors</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> 556</h6>
              <Link className='newOder'>256 New Venders</Link>
              <br />
              <Link className='viewAllOrders'>View All Venders</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>diversity_3</span></p>
            </div>
          </div>
          <div className='col outerBox'>
            <div className=" innerBox">
              <h6 className='h6'>Total Users</h6>
              <p className='percentage'>+16.44%</p>
              <h6 className='num'> 556</h6>
              <Link className='newOder'>256 New Users</Link>
              <br />
              <Link className='viewAllOrders'>View All Users</Link>
              <p className='dashboardCardIcon'><span className='material-symbols-outlined'>person</span></p>
            </div>
          </div>
        </div>




      </div>

    </>
  )
}

export default DashboardCards;
