import React from 'react'
import car from '../assets/image/car.png'
import date from '../assets/image/date.png'
const Blogs = () => {
    return (
        <>
            <section id='blogs' className=' black_background  position-relative'>
                <div className=" container pb-5 ">
                    <div data-aos="zoom-in" className=' d-flex justify-content-center pb-lg-5'>
                        <h5 className=' mb-0 ff-Poppins mt_-300 pt-5 fw-bolder fs-52 line-62 pb-lg-3 color_emphasis text-center'>
                            EXPLORE OUR <span className=' fw-normal style_italic blog'>BLOGS</span>
                        </h5>
                    </div>
                    <div className=' row pb-5'>
                        <div className=" col-12 col-lg-4 col-sm-6">
                            <div data-aos="flip-left" className=' position-relative overflow-hidden card_img'>
                                <img className=' w-100' src={car} alt="car" />
                                <div className='date_'>
                                    <img className=' w-100 ' src={date} alt="date" />
                                </div>
                            </div>
                            <p data-aos="fade-up" className=" mb-0 ff-Sans fs-18 fw-medium line-23 color_emphasis pt-3">
                                Industrial lubricant oils ensure
                                smooth machine operation by minimizing friction and wear.
                            </p>
                            <button data-aos="fade-up" className=' mb-0 ff-chivo fw-900 fs-16 line-24 comn_btn mt-4 color_emphasis'>
                                READ MORE
                            </button>
                        </div>
                        <div className=" col-12 col-lg-4 col-sm-6 pt-sm-0 pt-5">
                            <div data-aos="flip-down" className=' position-relative overflow-hidden card_img'>
                                <img className=' w-100' src={car} alt="car" />
                                <div className='date_'>
                                    <img className=' w-100 ' src={date} alt="date" />
                                </div>
                            </div>
                            <p data-aos="fade-up" className=" mb-0 ff-Sans fs-18 fw-medium line-23 color_emphasis pt-3">
                                Industrial lubricant oils ensure
                                smooth machine operation by minimizing friction and wear.
                            </p>
                            <button data-aos="fade-up" className=' mb-0 ff-chivo fw-900 fs-16 line-24 comn_btn mt-4 color_emphasis'>
                                READ MORE
                            </button>
                        </div>
                        <div className=" col-12 col-lg-4 col-sm-6 pt-lg-0 pt-5 pb-lg-5 mb-lg-5">
                            <div data-aos="flip-right" className=' position-relative overflow-hidden card_img'>
                                <img className=' w-100' src={car} alt="car" />
                                <div className='date_'>
                                    <img className=' w-100 ' src={date} alt="date" />
                                </div>
                            </div>
                            <p data-aos="fade-up" className=" mb-0 ff-Sans fs-18 fw-medium line-23 color_emphasis pt-3">
                                Industrial lubricant oils ensure
                                smooth machine operation by minimizing friction and wear.
                            </p>
                            <button data-aos="fade-up" className=' mb-0 ff-chivo fw-900 fs-16 line-24 comn_btn mt-4 color_emphasis'>
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs
