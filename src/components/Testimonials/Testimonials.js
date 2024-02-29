import React, { useState } from 'react';
import userImage from '../../assets/img/userimage.png'
import { Star } from '@mui/icons-material';
import Carousel from 'react-bootstrap/Carousel';
import emoji from '../../assets/img/emoji.png'
import { Divider } from '@mui/material';


const Testimonials = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const SpreadsheetBox = () => {
        return (
            <div className="spreadsheet-box">
            </div>
        );
    };

    return (
        <div className='testimonials'>
            <div className='testimonials-content'>
                <div className='testimonials-spread-content'>
                    <div className="spreadsheet-container">
                        <SpreadsheetBox />
                        <SpreadsheetBox />
                        <SpreadsheetBox />
                        <SpreadsheetBox />
                    </div>
                    <div className="spreadsheet-container-2">
                        <div className="spreadsheet-box-2"></div>
                        <div className="spreadsheet-box-2"></div>
                        <div className="spreadsheet-box-2"></div>
                        <div className="spreadsheet-box-2"></div>
                        <div className="spreadsheet-box-2"></div>
                    </div>
                    <div className="spreadsheet-container-3">
                        <div className="spreadsheet-box-3"></div>
                        <div className="spreadsheet-box-3"></div>
                        <div className="spreadsheet-box-3"></div>
                        <div className="spreadsheet-box-3"></div>
                    </div>
                </div>
                <div className='carousel-container'>
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} indicators={false}>
                        <Carousel.Item className="text-center">
                            <div className="d-flex flex-column align-items-center">
                                <img src={userImage} alt='' className='rounded-circle mx-auto' width='140px' height='140px' />
                                <div className="text-white user-details">
                                    <span>“</span>
                                    <h3>Adam Chena</h3>
                                    <p>Analyst</p>
                                    <div className='stars'>
                                        <Star /><Star /><Star /><Star /><Star />
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="text-center">
                            <div className="d-flex flex-column align-items-center">
                                <img src={userImage} alt='' className='rounded-circle mx-auto' width='140px' height='140px' />
                                <div className="text-white user-details">
                                    <span>“</span>
                                    <h3>Adam Chen</h3>
                                    <p>Analyst</p>
                                    <div className='stars'>
                                        <Star /><Star /><Star /><Star /><Star />
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="text-center">
                            <div className="d-flex flex-column align-items-center">
                                <img src={userImage} alt='' className='rounded-circle mx-auto' width='140px' height='140px' />
                                <div className="text-white user-details">
                                    <span>“</span>
                                    <h3>Adam Chen</h3>
                                    <p>Analyst</p>
                                    <div className='stars'>
                                        <Star /><Star /><Star /><Star /><Star />
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="d-flex flex-column align-items-center text-white text-center mt-3">
                    <p style={{ maxWidth: '452px', fontSize: '17px' }}>
                        “ This is the Most Intuitive And Modern Live Chat We Found.
                        Live Chat Obviously Made <span style={{ fontWeight: '600', color: '#47CFFF' }}>
                            Our Users Happier</span> And Our Service Department More Efficient
                        <img src={emoji} alt='' width='25px' height='25px' className='ms-1' />
                    </p>
                </div>
                <Divider className='mb-lg-5 mb-xl-5 mb-md-2 mb-sm-1 mt-xl-5 mt-lg-5 mt-md-2 mt-sm-1 bg-white' />
                <div className="d-flex justify-content-around align-items-center text-white text-center t-footer">
                    <div className='d-flex flex-column'>
                        <h3>4.9<span style={{ color: '#47CFFF' }}>/</span>5</h3>
                        <span className='d-block'>User Rating</span>
                    </div>
                    <div className='d-flex flex-column'>
                        <h3>350<span style={{ color: ' #FFB545' }}>K</span>+</h3>
                        <span>Customers</span>
                    </div>
                    <div className='d-flex flex-column'>
                        <h3>99<span style={{ color: 'green' }}>+</span></h3>
                        <span>Team Members</span>
                    </div>
                    <div className='d-flex flex-column'>
                        <h3>41<span style={{ color: 'red' }}>M</span></h3>
                        <span>Current Users</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials