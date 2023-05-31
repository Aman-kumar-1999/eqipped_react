import './App.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from './components/view/Dashboard';
import Login from './components/view/Login';
import Navbar from './components/view/Navbar';
import Footer from './components/view/Footer';
import Home from './components/view/Home';
import Logout from './components/view/Logout';
import Sidebar from './pages/view/Sidebar';
import Orders from './components/view/Orders';
import Products from './components/view/Products';
import Vendors from './components/view/Vendor';
import User from './components/view/User';
import Shipments from './components/view/Shipments';
import Profile from './components/view/Profile';
import Setting from './components/view/Settings';
import MyOrders from './components/view/MyOrders';
import Notifications from './components/view/Notifications';
import Addvendors from './pages/view/Addvendors';
import Adduser from './pages/view/Adduser';
import Addadminuser from './pages/view/Addadminuser';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
       
          <Navbar />
          <div className="container-fluid text-center">
            <div className="row">
              <div className="col-2">
                <ul className="list-group list-group-flush">
                  <Sidebar />
                </ul>
              </div>
              <div className="col-8">
                <Routes>
                  <Route path="/" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/logout" element={<Logout />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/vendors" element={<Vendors />} />
                  <Route path="/user" element={<User />} />
                   <Route path="/setting" element={<Setting />} />
                  <Route path="/shipments" element={<Shipments />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/myorders" element={<MyOrders />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/addvendor" element={<Addvendors />} />
                  <Route path="/adduser" element={<Adduser />} />
                  <Route path="/addadminuser" element={<Addadminuser />} />


                </Routes>
                <Footer />
              </div>
              <div className="col-2">
                <ul className="list-group list-group-flush">
                  {/* <Sidebar /> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Router>








    </div>


  );
}

export default App;
