import React from 'react'
import white_frame from '../assets/image/white_frame.png'
import oem from '../assets/image/oem_img.png'
import Ellipse_2 from '../assets/image/Ellipse_2.png'
const Approvals = () => {
    return (
        <>
            <section id='testiomial' className='  black_background position-relative overflow-hidden'>
                <div className=' container py-5'>
                    <h3 className=' mb-0 ff-Poppins fs-52 fw-bolder line-62 color_emphasis '>
                        OEM <span className=' fw-normal style_italic Approvals'>APPROVALS</span>
                    </h3>
                    <div className=' row flex-lg-row flex-column-reverse'>
                        <div className=' col-lg-7 col-12 pt-5'>
                            <p data-aos="fade-right" className=" mb-0 ff-Sans fw-normal fs-24 line-36 color_tertiary mw_567 pt-sm-5">
                                At Atlantic Grease and Lubricants, we have <span className=' fw-bold'>secured approvals</span> leading automobile manufacturers. Thus, we demonstrate our
                                commitment to delivering the best possible outcomes to our customers.
                            </p>
                            <p data-aos="fade-right" className=" mb-0 ff-Sans fw-normal fs-24 line-36 color_tertiary mw_567 pt-3">
                                Recognising the <span className=' fw-bold'>significance of quality</span> to our valued customers, we uphold the
                                utmost standards of excellence in all our endeavors.
                            </p>
                            <div className='frame-bg '>
                                <img className='bg-frame_2' src={white_frame} alt="white_frame" />
                            </div>
                        </div>
                        <div className=' col-12 col-lg-5 pt-lg-0 pt-5 '>
                            <div data-aos="zoom-in" className=' position-relative d-flex justify-content-center align-items-center'>
                                <img className=' w-100 eom_appr' src={oem} alt="oem" />
                                <div className='ellipse_2 d-lg-flex d-none'>
                                    <img className=' w-100' src={Ellipse_2} alt="Ellipse_2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Approvals