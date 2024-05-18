import React from 'react'
import half_circle from '../assets/image/half_circle.png'
import image_1 from '../assets/image/image_1.png'
import image_2 from '../assets/image/image_2.png'
import image_3 from '../assets/image/image_3.png'
import image_4 from '../assets/image/image_4.png'
import image_5 from '../assets/image/image_5.png'
import image_6 from '../assets/image/image_6.png'
import image_7 from '../assets/image/image_7.png'
import Ellipse_4 from '../assets/image/Ellipse_4.png'
const Aboutus = () => {
  return (
    <>
      <section className='  black_background position-relative overflow-hidden'>
        <div className=' d-lg-none d-flex overflow-x-scroll scroll_bar justify-content-center align-items-center gap-4 mt-5 pt-5'>
          <div className=' pt-1'>
            <img src={image_1} alt="image_1" />
          </div>
          <div className=' pt-1'>
            <img src={image_2} alt="image_2" />
          </div>
          <div className=' pt-1'>
            <img src={image_3} alt="image_3" />
          </div>
          <div className=' pt-1'>
            <img src={image_4} alt="image_4" />
          </div>
          <div className=' pt-1'>
            <img src={image_5} alt="image_5" />
          </div>
          <div className=' pt-1'>
            <img src={image_6} alt="image_6" />
          </div>
          <div className=' pt-1'>
            <img src={image_7} alt="image_7" />
          </div>
        </div>
        <div className='pt-1 d-lg-flex d-none'>
          <img className=' w-100' src={half_circle} alt="half_circle" />

        </div>
        <div id='aboutus' className=" container mw_1140">
          <div className=' mt_-300 box_img min-vh-100 pt-sm-0 pt-5 mt-sm-0 mt-5'>
            <div data-aos="fade-up" className=' d-flex justify-content-center '>
              <h4 className=' mb-0 ff-Poppins fs-52 fw-bolder color_emphasis text-center line-62 mw_550 pt-4'>
                OUR <span className=' fw-normal style_italic numbers'>NUMBERS</span> SAY ABOUT US
              </h4>
            </div>
            <div data-aos="fade-up" className=' row '>
              <div className=" col-6 col-lg-3 py-5">
                <div className=' d-flex flex-column justify-content-center pt-3'>
                  <h4 className=' mb-0 ff-Poppins fs-80 fw-bolder number_color line-92 text-center'>
                    20K+
                  </h4>
                  <p className=" mb-0 ff-Sans fw-medium fs-16 line-24 text-center color_emphasis">
                    Happy Customers
                  </p>
                </div>
              </div>
              <div className=" col-6 col-lg-3 py-5">
                <div className=' d-flex flex-column justify-content-center pt-3'>
                  <h4 className=' mb-0 ff-Poppins fs-80 fw-bolder number_color line-92 text-center'>
                    35%
                  </h4>
                  <p className=" mb-0 ff-Sans fw-medium fs-16 line-24 text-center color_emphasis">
                    Export Volume
                  </p>
                </div>
              </div>
              <div className=" col-6 col-lg-3 py-5">
                <div className=' d-flex flex-column justify-content-center pt-3'>
                  <h4 className=' mb-0 ff-Poppins fs-80 fw-bolder number_color line-92 text-center'>
                    20%
                  </h4>
                  <p className=" mb-0 ff-Sans fw-medium fs-16 line-24 text-center color_emphasis">
                    Market Share
                  </p>
                </div>
              </div>
              <div className=" col-6 col-lg-3 py-5">
                <div className=' d-flex flex-column justify-content-center pt-3'>
                  <h4 className=' mb-0 ff-Poppins fs-80 fw-bolder number_color line-92 text-center'>
                    65+
                  </h4>
                  <p className=" mb-0 ff-Sans fw-medium fs-16 line-24 text-center color_emphasis">
                    Country
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className=' circle_1  d-lg-flex d-none'>
          <img src={image_1} alt="image_1" />
        </div>
        <div data-aos="zoom-in" className=' circle_2 d-lg-flex d-none'>
          <img src={image_2} alt="image_2" />
        </div>
        <div data-aos="zoom-in" className=' circle_3  d-lg-flex d-none'>
          <img src={image_3} alt="image_3" />
        </div>
        <div data-aos="zoom-in" className=' circle_4  d-lg-flex d-none'>
          <img src={image_4} alt="image_4" />
        </div>
        <div data-aos="zoom-in" className=' circle_5  d-lg-flex d-none'>
          <img src={image_5} alt="image_5" />
        </div>
        <div data-aos="zoom-in" className=' circle_6   d-lg-flex d-none'>
          <img src={image_6} alt="image_6" />
        </div>
        <div data-aos="zoom-in" className=' circle_7  d-lg-flex d-none'>
          <img src={image_7} alt="image_7" />
        </div>
        <div className=' ellipse_4 d-lg-flex d-none'>
          <img src={Ellipse_4} alt="Ellipse_4" />
        </div>
      </section>
    </>
  )
}

export default Aboutus
