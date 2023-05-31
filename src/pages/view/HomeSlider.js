import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/HomeSlider.css'
function HomeSlider(props) {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='carasouldiv'>
            <h1>RECENTLY VIEWED</h1>
            <Carousel autoPlaySpeed={4000} responsive={responsive}>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard.png"
                        alt="product image"
                    />
                    <h5>Microscope Single Frame</h5>
                    <p className='fakeprice'>Rs11999</p>
                    <p className="price">Rs 9999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard@2x.png"
                        alt="product image"
                    />
                    <h5>Flask Tong</h5>
                    <p className='fakeprice'>Rs2999</p>
                    <p className="price">Rs 1999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard.png"
                        alt="product image"
                    />
                    <h5>Microscope Single Frame</h5>
                    <p className='fakeprice'>Rs11999</p>
                    <p className="price">Rs 9999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard2.png"
                        alt="product image"
                    />
                    <h5>Stand</h5>
                    <p className='fakeprice'>Rs6999</p>
                    <p className="price">Rs 5999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard@2x.png"
                        alt="product image"
                    />
                    <h5>Flask Tong</h5>
                    <p className='fakeprice'>Rs2999</p>
                    <p className="price">Rs 1999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard2.png"
                        alt="product image"
                    />
                    <h5>Stand</h5>
                    <p className='fakeprice'>Rs6999</p>
                    <p className="price">Rs 5999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
            </Carousel>
            <div className='btndiv'>
                <button className='lastbtn'>VIEW ALL</button>
            </div>
            <h1>MOST POPULAR</h1>
            <Carousel autoPlaySpeed={4000} responsive={responsive}>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard.png"
                        alt="product image"
                    />
                    <h5>Microscope Single Frame</h5>
                    <p className='fakeprice'>Rs11999</p>
                    <p className="price">Rs 9999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard@2x.png"
                        alt="product image"
                    />
                    <h5>Flask Tong</h5>
                    <p className='fakeprice'>Rs2999</p>
                    <p className="price">Rs 1999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard.png"
                        alt="product image"
                    />
                    <h5>Microscope Single Frame</h5>
                    <p className='fakeprice'>Rs11999</p>
                    <p className="price">Rs 9999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard2.png"
                        alt="product image"
                    />
                    <h5>Stand</h5>
                    <p className='fakeprice'>Rs6999</p>
                    <p className="price">Rs 5999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard@2x.png"
                        alt="product image"
                    />
                    <h5>Flask Tong</h5>
                    <p className='fakeprice'>Rs2999</p>
                    <p className="price">Rs 1999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard2.png"
                        alt="product image"
                    />
                    <h5>Stand</h5>
                    <p className='fakeprice'>Rs6999</p>
                    <p className="price">Rs 5999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
            </Carousel>
            <div className='btndiv'>
                <button className='lastbtn'>VIEW ALL</button>
            </div>
            <h1>BEST SELLER</h1>
            <Carousel autoPlaySpeed={4000} responsive={responsive}>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard.png"
                        alt="product image"
                    />
                    <h5>Microscope Single Frame</h5>
                    <p className='fakeprice'>Rs11999</p>
                    <p className="price">Rs 9999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard@2x.png"
                        alt="product image"
                    />
                    <h5>Flask Tong</h5>
                    <p className='fakeprice'>Rs2999</p>
                    <p className="price">Rs 1999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard.png"
                        alt="product image"
                    />
                    <h5>Microscope Single Frame</h5>
                    <p className='fakeprice'>Rs11999</p>
                    <p className="price">Rs 9999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard2.png"
                        alt="product image"
                    />
                    <h5>Stand</h5>
                    <p className='fakeprice'>Rs6999</p>
                    <p className="price">Rs 5999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard@2x.png"
                        alt="product image"
                    />
                    <h5>Flask Tong</h5>
                    <p className='fakeprice'>Rs2999</p>
                    <p className="price">Rs 1999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
                <div className="newcard">
                    <img
                        className="product--image"
                        src="microscopecard2.png"
                        alt="product image"
                    />
                    <h5>Stand</h5>
                    <p className='fakeprice'>Rs6999</p>
                    <p className="price">Rs 5999</p>
                    <p className='smallp'>*Effective Price</p>
                    <button>ADD TO CART</button>
                </div>
            </Carousel>
            <div className='btndiv'>
                <button className='lastbtn'>VIEW ALL</button>
            </div>
        </div>
    )
}

export default HomeSlider
