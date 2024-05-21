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

              <div className={`${data ? "navbarShow" : "navbarHide"} d-flex  align-items-center  gap-4 mobile_view `}>
                <a className=" mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75 u_line" href="#aboutus">About Us</a>
                <div class="dropdown">
                  <button class="dropbtn  mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75   text_gray text-center">
                    Categories <span class="ms-1"><svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#E6E6E6" />
                    </svg>
                    </span>
                  </button>
                  <div class="dropdown-content dropdown_bg">
                    <a class=" mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75   text-center" href="#">
                      Action </a>
                    <a class=" mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75   text-center" href="#">
                      Learn</a>
                  </div>
                </div>
                <a className=" mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75 u_line" href="#services">Services</a>
                <a className=" mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75 u_line" href="#testiomial">Testimonials</a>
                <a className=' mb-0 ff-Sans fs-16 color_emphasis line-24 opacity-75 u_line' href="#blogs">Blogs</a>

              </div>
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
      <div className=' container d-flex flex-grow-1 py-5 w-100'>
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