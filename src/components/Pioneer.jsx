import React, { useEffect } from "react";
import white_img from '../assets/image/white_img.png'
import motor_oil from '../assets/image/motor_oil.png'
import Ellipse_1 from '../assets/image/Ellipse_1.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Pioneer = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <section id='services' className=' black_background position-relative overflow-hidden'>
                <div className=' container1340 d-flex flex-column py-sm-5 mt-lg-5 mt-3 align-items-end '>
                    <h2 data-aos="fade-up" className=' mb-0 ff-Poppins fw-bolder color_emphasis fs-52 line-62 mw_745 mt-lg-5 mt-0 py-sm-5 pb-sm-0 pb-5'>
                        PIONEER OF  <span className=' mb-0 fw-normal style_italic highlight'>LUBRICANTS</span>  <span className=' d-inline-block'> & GREASE MANUFACTURING</span>
                    </h2>
                    <div className=' row'>
                        <div className=' col-12 col-lg-6'>
                            <div data-aos="zoom-in" className=' position-relative d-flex justify-content-center align-items-center'>
                                <img className=' oil_img w-100' src={motor_oil} alt="motor_oil" />
                                <div className='ellipse_1'>
                                    <img className=' w-100' src={Ellipse_1} alt="Ellipse_1" />
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-12 pt-sm-5 mt-3 mb-sm-0 mb-5">
                            <div className=' py-lg-5 mt-xl-5 d-flex justify-content-end flex-column'>
                                <p data-aos="fade-left" className=' mb-0 ff-Sans fs-24 fw-normal color_tertiary line-36 mw_550'>
                                    Atlantic Grease & Lubricants is one of the leading manufacturers in the <span className=' fw-bold'>automotive industry</span> providing high-performance
                                    products certified by renowned European and American automobile industries.
                                </p>
                                <div className=' mt-sm-5 mt-3'>
                                    <button data-aos="fade-left" className=' mb-0 ff-chivo fw-900 fs-16 color_emphasis comn_btn '>
                                        READ OUR STORY
                                    </button>
                                </div>
                                <div className='white_bg'>
                                    <img className="bg_frame_1" src={white_img} alt="white_img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Pioneer