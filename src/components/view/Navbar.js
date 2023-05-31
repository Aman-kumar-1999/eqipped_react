import React from 'react'
import '../css/Navbar.css';
import { useState, useEffect } from 'react';
import { Router, Route, Link, RouteOutlet } from 'react-router-dom';
import Sidebar from '../../pages/view/Sidebar';
import { useNavigate } from 'react-router-dom';




const Navbar = () => {

  var isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();

  const [tagHeated, setTagHeated] = useState(false);

  useEffect(() => {
    if (tagHeated) {
      navigate('/')
      localStorage.clear();
      window.location.reload();

    }
  }, [tagHeated]);

  const handleTagHeat = () => {
    setTagHeated(true);
  };


  return (
    <>
      <nav style={{ background: '' }} class="navbar navbar-expand-lg sticky-top navbar1">
        <div class="navbar-nav container">
          <Link to={'/'} ><img class="logo" src="eqippedLogo.png" /></Link>

          {/* <p style={{paddingRight: -100}}></p> */}
          <div style={{ display: 'inline' }} class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item mx-auto" id="search">

                <form class="form" style={{ background: 'azure' }}>

                  <input type="search" placeholder="Search..." />
                  <button className="button" type="submit">Search</button>
                </form>

              </li>

              <p style={{ paddingRight: 200 }}></p>


              {isLoggedIn ? (
                <>
                  <li class="nav-item">

                    <div id="buttonCart">1</div>
                    <Link id="eml" to={'/cart'} class="nav-link inactive number" aria-current="page" ><span class="material-symbols-outlined">shopping_cart</span>&nbsp;Cart</Link>

                    {/* <Link id="eml" class="nav-link inactive number"><Cart /></Link> */}
                  </li>
                  <li class="nav-item">
                    <Link id="eml" class="nav-link inactive number" aria-current="page" onClick={handleTagHeat}><span class="material-symbols-outlined">logout</span>&nbsp;logout</Link>
                  </li>
                </>



              ) : (
                <li class="nav-item">
                  {/* <Link to={'/'}>login</Link> */}
                  <a id="eml" class="nav-link active number" aria-current="page" href='/login'><span class="material-symbols-outlined">login</span>&nbsp;&nbsp;login</a>
                </li>
              )
              }


              <li class="nav-item">




              </li>

            </ul>


          </div>
          {/* <div>don</div> */}
        </div>

      </nav>
    </>
  )

}
export default Navbar;