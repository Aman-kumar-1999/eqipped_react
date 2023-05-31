import React from 'react';
import { Link } from 'react-router-dom'


function Setcards() {
    return (
        <>
            <Link to={'/addadminuser'} ><div className='adduser'>
                <i class="ri-add-line"></i>
                <h4>Create Admin User</h4>
            </div>
            </Link>
            <div className='newlongdiv'>
                <h5>All Admin Users</h5>
                <nav>
                    <li className='a1'>All</li>
                    <li>Developer</li>
                    <li>Designer</li>
                    <li>Sales</li>
                    <li>Marketing</li>
                    <li>Associates</li>
                </nav>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <div className='newlargediv'>
                        <nav>
                            <li>No.</li>
                            <li>Employee ID</li>
                            <li>Date</li>
                            <li>Name</li>
                            <li>Designation</li>
                            <li>Contact</li>
                            <li>Email</li>
                            <li>Action</li>
                        </nav>
                    </div>
                </table>
            </div>
        </>
    )
}

export default Setcards
