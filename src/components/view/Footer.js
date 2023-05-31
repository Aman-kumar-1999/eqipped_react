import React from 'react'
import '../css/Footer.css'
// import { Router, Route, Link, RouteOutlet } from 'react-router-dom';
const Footer = () => {

    return (
        <>
            {/* <footer  class="footer" > */}
            <div class="footer-bottom container footer">
                <div class="">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="module-heading">
                                <h5 class="logoFoodpad"><img class="logoFooter" src="eqippedLogo.png" alt="#" /></h5>
                            </div>

                            <div class="module-body">
                                <ul class="toggle-footer">
                                    <li class="media">
                                        <div class="media-body">
                                            <p>About Eqipped: one of the fastest-growing E-commerce Market place to provide
                                                shoppers reliable and frictionless commerce ecosystem that creates life-changing
                                                experiences for buyers and sellers. eqipped.com was formed in 2023.</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="module-heading">
                                <h5 class="module-title">Information</h5>
                            </div>


                            <div class="module-body">
                                <ul class='list-unstyled'>
                                    <li class="first"><a class="anker" title="About us" href="#">About
                                        us</a></li>

                                    <li class="first"><a class="anker" href="#"
                                        title="Terms & Conditions">Terms & Conditions</a></li>
                                    <li><a class="anker" href="#" title="Privacy Policy">Privacy
                                        Policy</a>
                                    </li>
                                    <li><a class="anker" href="#"
                                        title="Shipping & Return Policy">Shipping & Return Policy</a></li>
                                    <li><a class="anker" href="#"
                                        title="Return & Refunds Policy">Return & Refunds Policy</a></li>
                                    <li class="anker" className="last"><a class="anker" href="#"
                                        title="Grievance">Grievance</a></li>
                                </ul>
                            </div>

                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="module-heading">
                                <h5 class="module-title">My Account</h5>
                            </div>

                            <div class="module-body">
                                <ul class='list-unstyled'>
                                    <li class="first"><a class="anker" title="My Account"
                                        href="#">My
                                        Account</a></li>
                                    <li><a class="anker" title="Wishlist" href="#">Wishlist</a>
                                    </li>
                                    <li><a class="anker" title="Shopping Cart" href="#">Shopping Cart</a>
                                    </li>
                                    <li><a class="anker" title="Order History" href="#">Order
                                        History</a></li>
                                </ul>
                            </div>

                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="module-heading">
                                <h5 class="module-title">Seller</h5>
                            </div>
                            <div class="module-body">
                                <ul class='list-unstyled'>
                                    <li class="first"><a class="anker" target="_blank" title="Seller Login"
                                        href="#">Seller Login</a></li>
                                    <li><a class="anker" target="_blank" title="Seller Signup"
                                        href="#">Seller
                                        Signup</a></li>
                                    <li><a class="anker" title="Seller Terms & Conditions"
                                        href="#">Seller Terms & Conditions</a>
                                    </li>
                                    <li><a class="anker" title="Seller Privacy Policy"
                                        href="#">Seller
                                        Privacy Policy</a></li>
                                    <li><a class="anker" title="COVID19 Information"
                                        href="#">COVID19
                                        Information</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="module-heading">
                                <h5 class="module-title">More Details</h5>
                            </div>

                            <div class="module-body">

                                <ul class='list-unstyled'>

                                    <li class="socil-media"><a class="anker socil-media" target="_blank" href="#" title="Facebook"><i class="icon fa fa-facebook"></i></a>
                                    </li>

                                    <li class="socil-media"><a class="anker socil-media" target="_blank" href="https://twitter.com/" title="Twitter">
                                        <i class="icon fa fa-twitter"></i></a></li>
                                    <li class="socil-media"><a class="anker socil-media" target="_blank" href="#" title="Youtube"><i
                                        class="icon fa fa-youtube-play"></i></a></li>
                                    <li class="socil-media"><a class="anker socil-media" target="_blank" href="#" title="GooglePlus"><i
                                        class="icon fa fa-google-plus"></i></a></li>
                                    <li class="socil-media"><a class="anker socil-media" target="_blank" href="https://www.instagram.com" title="Instagram"><i
                                        class="icon fa fa-instagram"></i></a></li>
                                    <li class="socil-media"><a class="anker socil-media" target="_blank" href="#" title="Pinterest"><i
                                        class="icon fa fa-pinterest"></i></a></li>
                                </ul>
                                <h4>Payment</h4>
                                <ul class='list-unstyled'>
                                    <li class="socil-media anker"><img src="1.png" alt="" /></li>
                                    <li class="socil-media anker"><img src="2.png" alt="" /></li>
                                    <li class="socil-media anker"><img src="3.png" alt="" /></li>
                                    <li class="socil-media anker"><img src="4.png" alt="" /></li>
                                </ul>
                                <h4>Newsletter</h4>
                                <ul>

                                    <form id="newsletter_form" method="POST" data-parsley-validate>
                                        <div class="row">
                                            <div class="col-md-5" style={{ padding: 0}}>
                                                <input style={{width:150}} type="email" name="email" title="Your Email" placeholder="Your Email"
                                                    data-parsley-required="true" />
                                            </div>
                                            <div class="col-1" >
                                                <a>
                                                    <button style={{ marginLeft: 15, marginTop: 18 }} class="btn search-button"><span class="material-symbols-outlined">mail</span></button>
                                                </a>
                                            </div>
                                        </div>

                                    </form>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>

                <div class="copyright-bar">
                    <div class="container">
                        <div style={{ display: 'inline' }} class="col-xs-12 col-sm-8 no-padding">
                            <p style={{ display: 'inline' }}>&copy; 2023 Eqipped, All Right Reserved.</p>
                        </div>
                        <p style={{ display: 'inline', paddingLeft: 150 }}></p>
                        <div style={{ display: 'inline' }} class="col-xs-12 col-sm-4 no-padding">
                            <div style={{ display: 'inline' }} class="clearfix payment-methods">
                                <p style={{ display: 'inline' }}> Designed & Developed By:  IT Softwares</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* </footer> */}

        </>
    )

}
export default Footer;