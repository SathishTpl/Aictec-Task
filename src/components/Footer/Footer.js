import { ExpandLessOutlined, Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import { Button, Divider, Fab } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className="text-center">
                    <div className="social-list clearfix">
                        <ul className="list-inline d-inline-block mb-0">
                            <li className="list-inline-item">
                                <Fab variant="round" size="small" className="btn-facebook text-white bg-transparent shadow-none">
                                    <Instagram />
                                </Fab>
                            </li>
                            <li className="list-inline-item">
                                <Fab variant="round" size="small" className="btn-twitter text-white bg-transparent shadow-none">
                                    <Facebook />
                                </Fab>
                            </li>
                            <li className="list-inline-item">
                                <Fab variant="round" size="small" className="btn-google text-white bg-transparent shadow-none">
                                    <Twitter />
                                </Fab>
                            </li>
                            <li className="list-inline-item">
                                <Fab variant="round" size="small" className="btn-linkedin text-white bg-transparent shadow-none">
                                    <LinkedIn />
                                </Fab>
                            </li>
                            <li className="list-inline-item">
                                <Fab variant="round" size="small" className="btn-youtube text-white bg-transparent shadow-none">
                                    <YouTube />
                                </Fab>
                            </li>
                        </ul>
                    </div>
                </div>
                <Divider className='mt-5 divider' />
                <div className='footer-links py-xl-3 py-lg-3 py-md-3 py-sm-1'>
                    <div className='list-1'>
                        <span className=''>Usefull Link</span>
                        <Divider className='mt-3 mb-4 divider-2' />
                        <ul className='list-unstyled lists mb-0'>
                            <li className='mb-2'>Solution</li>
                            <li className='mb-2'>Industries</li>
                            <li className='mb-2'>Products</li>
                            <li className='mb-2'>Resources</li>
                            <li className='mb-2'>Pricing</li>
                        </ul>
                    </div>
                    <div className='list-1'>
                        <span className=''>Serives</span>
                        <Divider className='mt-3 mb-4 divider-2' />
                        <ul className='list-unstyled lists mb-0'>
                            <li className='mb-2'>Sale</li>
                            <li className='mb-2'>Marketing</li>
                            <li className='mb-2'>Real Estate</li>
                            <li className='mb-2'>Autimotive</li>
                            <li className='mb-2'>Education</li>
                        </ul>
                    </div>
                    <div className='list-1'>
                        <span className=''>Contact Us</span>
                        <Divider className='mt-3 mb-4 divider-2' />
                        <p className='mb-2 address p-2 me-5 lists'>
                            1700 W Blancke St, kiyev
                            port south USA, American
                        </p>
                        <p className='mb-0 address p-2 mx-5 lists'>
                            +3255 456 789
                            mail@primarily.com
                        </p>
                        {/* <ul className='list-unstyled mb-0'>
                            <li className='border-top border-end border-bottom p-2'>
                                <p className='mb-0' style={{ maxWidth: '160px' }}>
                                    1700 W Blancke St, kiyev
                                    port south USA, American
                                </p>
                            </li>
                            <li className='border-top border-end border-bottom p-2'>
                                <p className='mb-0' style={{ maxWidth: '160px' }}>
                                    1700 W Blancke St, kiyev
                                    port south USA, American
                                </p>
                            </li>
                        </ul> */}
                    </div>
                    <div className='list-1'>
                        <div className='d-flex justify-content-between'>
                            <span className=''>Our Latest News</span>
                            <ExpandLessOutlined size={33} className='expand-icon rounded-circle' />
                        </div>
                        <Divider className='mt-3 mb-4 divider-2' />
                        <div className='footer-image d-flex align-items-center justify-content-center'>
                            <Button variant='contained' className='btn read-btn'>Read Now</Button>
                        </div>
                    </div>
                    {/* <ExpandLessOutlined className='rounded-circle' /> */}
                </div>
                <Divider className='mt-4 divider' />
                {/* <div className='d-flex justify-content-between align-items-center text-white py-3'>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Footer