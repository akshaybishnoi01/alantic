import React, { useState } from 'react'
import logo from '../assets/image/logo.png'
const HeroSection = () => {
  const [data, setdata] = useState(false);
  function view() {
    setdata(!data)
    if (data === false) {
      document.body.classList.add("overflow_hidden");
    }
    else {
      document.body.classList.remove("overflow_hidden");
    }
  }
  return (
    <header className=' header_img min-vh-100 d-flex flex-column overflow-hidden'>
      <nav className="nav_bar">
        <div className=" container mw_1360">
          <div className="  d-flex justify-content-between align-items-center py-3 ">
            <div className=' d-flex align-items-center gap-4'>
              <div className=" d-flex align-items-center ">
                <img src={logo} alt="logo" />
              </div>

              <ul className={`${data ? "navbarShow" : "navbarHide"} d-flex  align-items-center  gap-4 mobile_view `}>
                <li><a className=" mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75 u_line" href="#">About Us</a></li>
                <li><a className=" mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75  " href="#">Categories</a></li>
                <li><a className=" mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75 u_line" href="#">Services</a></li>
                <li><a className=" mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75 u_line" href="#">Testimonials</a></li>
                <li><a className=' mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75 u_line' href="#">Blogs</a></li>

              </ul>
            </div>

            <div className=" d-flex align-items-center gap-2">
              <div className=' d-md-flex d-none gap-3 ser_bor'>
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.3833 12.877C7.76953 12.877 9.04785 12.4287 10.0938 11.6816L14.0283 15.6162C14.2109 15.7988 14.4517 15.8901 14.709 15.8901C15.2485 15.8901 15.6304 15.4751 15.6304 14.9438C15.6304 14.6948 15.5474 14.4541 15.3647 14.2798L11.4551 10.3618C12.2769 9.28271 12.7666 7.94629 12.7666 6.49365C12.7666 2.98242 9.89453 0.110352 6.3833 0.110352C2.88037 0.110352 0 2.97412 0 6.49365C0 10.0049 2.87207 12.877 6.3833 12.877ZM6.3833 11.499C3.64404 11.499 1.37793 9.23291 1.37793 6.49365C1.37793 3.75439 3.64404 1.48828 6.3833 1.48828C9.12256 1.48828 11.3887 3.75439 11.3887 6.49365C11.3887 9.23291 9.12256 11.499 6.3833 11.499Z" fill="white" fill-opacity="0.6" />
                  </svg>

                </span>
                <input type="search" id="gsearch" name="gsearch" placeholder='Search' className=' search mb-0 ff-Sans fs-17 fw-normal line-23 color_emphasis opacity-50 ' />

              </div>
              <div className=" d-md-flex d-none">
                <button className=' mb-0 ff-chivo fw-900 fs-16 line-24 color_emphasis comn_btn'>
                  GET IN TOUCH
                </button>
              </div>
              <div onClick={view} className="menuicon d-flex flex-column gap-2 d-lg-none ms-md-3 ms-0">
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
              </div>
            </div>

          </div>
        </div>
      </nav>
      <div className=' container mw_1140 d-flex flex-grow-1 py-5 w-100'>
        <div className=' d-flex flex-wrap  justify-content-sm-between align-items-end  w-100  '>
          <div className="d-flex align-items-end justify-content-between w-100 flex-sm-nowrap flex-wrap">
            <h1 className=' mb-0 ff-Poppins fs-60 fw-bolder line-72 color_emphasis mw_790 mb-2  pb-sm-0 pb-5'>
              OPTIMISING YOUR
              VEHICLE <span className=' fw-normal style_italic'>PERFORMANCE</span>
            </h1>
            <button className=' mb-0 ff-chivo fw-900 fs-16 line-24 color_emphasis comn_btn mb-lg-2 mb-5'>
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </header >
  )
}

export default HeroSection