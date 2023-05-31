import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Login.css'
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../helper/helper';
import ForgetPassword from '../../pages/view/ForgetPassword';

const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });



  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable to track login status
  var isLoggedIn = false;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (formData.username == null || formData.username == '') {
        toast('Kindly Enter User Name', {
          position: 'top-center'
        });

      }
      else if (formData.password == null || formData.password == '') {
        toast('Kindly Enter Password', {
          position: 'top-center'
        });
      }
      else {

        const response = await fetch(`${baseUrl}/user/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.status == 503) {
          toast('Server is down', {
            position: 'top-center'
          });
        } else if (response.status == 500) {
          toast('Invalid User Name & Password', {
            position: 'top-center'
          });
        }
        else if (response.ok) {

          const jsonData = await response.json();
          console.log('Json Data '+typeof jsonData);
          console.log('response Json '+typeof response.json())

          // Handle successful login response

          console.log(jsonData);
          if (jsonData.STATUS == "SUCCESS") {
            // setIsLoggedIn(true);
            localStorage.setItem('userData', JSON.stringify(jsonData.USER));
            isLoggedIn = true
            localStorage.setItem('isLoggedIn', isLoggedIn);
            console.log('is logged In : ' + localStorage.getItem('userData'));
            console.log('is logged In : ' + localStorage.getItem('isLoggedIn'));
            if (
              jsonData.USER.role.roleName == 'Admin'
            ) {
              navigate('/dashboard')
            } else {
              navigate('/')
            }

            window.location.reload();
            // localStorage.clear();
            // localStorage.getItem('isLoggedIn');
          }
          else {
            toast('Password is Invalid', {
              position: 'top-center'
            });
          }
        } else {

          throw new Error('Failed to login');
        }
      }
    } catch (err) {
      // Handle error
      toast('Server is down', {
        position: 'top-center'
      });
      console.error(err);
    }
  }


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }


  return (
    <div>

      <div class="body">

        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="signup">
            <form onSubmit={handleFormSubmit}>
              <label class="label1" for="chk" aria-hidden="true">Login</label>


              <input required="" name="username" type="text" id="username"
                value={formData.username} onChange={handleInputChange} placeholder="username" />

              <input required="" name="password" type="password" id="password" value={formData.password}
                onChange={handleInputChange}
                placeholder="Password" />
              <button className="buttonLogin" type="submit" onClick={handleFormSubmit} >Login</button>

            </form>
            <ToastContainer />


          </div>


          <div class="login">

            <ForgetPassword />

          </div>


        </div>
      </div>


    </div>




  );
};

export default Login;
