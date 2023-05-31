
import React from 'react'
import '../css/HomePageSlider.css'
const HomePageSlider = () => {

  const imgCollection = [
    {
      image: 'eqippedImg3.png',

    }, {
      image: 'eqippedImg4.jpg',

    }, {
      image: 'Labequipment.png',

    }
  ];


  return (
    <>
      <div className='container-fluid homePage'>

        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            {imgCollection.map(item => (
              <div class="carousel-item active" data-bs-interval="6000">

                <img src={item.image} style={{height:200}}class="d-block w-100" alt="..." />

              </div>
            ))}

          </div>
          <button class="prevbutton" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon prevIcon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="nextbutton" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span style={{ width: 10, height: 15 }} class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>



    </>
  )

}
export default HomePageSlider;
