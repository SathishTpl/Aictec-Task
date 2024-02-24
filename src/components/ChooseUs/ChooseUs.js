import { Campaign, Circle, CollectionsBookmarkOutlined, HorizontalRule, LocalPolice, MailOutlined, Star, Storefront } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const ChooseUs = () => {
    return (
        <div className="session-inner-wrapper choose_us">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 me-2">
                    <div className='d-flex flex-column '>
                        <h2 className='text-capitalize'>Ways a project management <br /> tool can help your team</h2>
                        <p className='content-text mt-lg-1 mt-xl-2 mt-0 pe-xl-5 pe-lg-4 pe-2'>
                            Unique and powerful suite of software to run your entire business,
                            brought to you by a company with the long term vision to transform the way you work.
                        </p>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='security-icons'>
                                    <LocalPolice />
                                    <HorizontalRule className='line' />
                                    <Star />
                                    <Star />
                                </div>
                                <h4>CRM Security</h4>
                                <p className='content-text'>
                                    cards and make more sales while chatting
                                </p>
                            </div>
                            <div className='col-6'>
                                <Campaign style={{ fontSize: '2.5rem', color: '#49E4EB' }} />
                                <h4>Marketing Hub</h4>
                                <p className='content-text'>
                                    Show off your goods in elegant product cards and mak.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button variant="contained" className='content-btn mt-4 mt-md-2 mt-sm-2'>Get Started</Button>
                </div>
                <div className="col-sm-12 col-md-12 col-xl-5 col-lg-5 ms-0 ms-lg-4 ms-xl-5">
                    <div className='card crm-main-card pt-3'>
                        <div className="percent">
                            <svg className='half-circle'>
                                <circle cx="170" cy="170" r="170"></circle>
                                <circle cx="170" cy="170" r="170"></circle>
                            </svg>
                        </div>

                        <div className='d-flex align-items-center'>
                            <div className='card cart-card common-card-pattern rounded-circle p-4'>
                                <i className="bi bi-cart3"></i>
                                <Circle className='card-circle'/>
                            </div>
                            <div className='card store-card common-card-pattern rounded-circle p-4'>
                                <Storefront className='store-icon' />
                                <Circle className='store-circle'/>
                            </div>
                        </div>

                        <div className='d-flex align-items-center'>
                            <div className='card geo-card common-card-pattern rounded-circle p-4'>
                                <i className="bi bi-geo-alt"></i>
                                <Circle className='geo-circle'/>
                            </div>
                            <div className='card crm-card common-card-pattern rounded-circle p-3'>
                                <div className='card crm-text-card common-card-pattern rounded-circle p-1'>
                                    <h2>CRM</h2>
                                </div>
                            </div>
                            <div className='card phone-card common-card-pattern rounded-circle p-4'>
                                <i className="bi bi-phone"></i>
                                <Circle className='phone-circle'/>
                            </div>
                        </div>

                        <div className='d-flex align-items-center'>
                            <div className='card book-card common-card-pattern rounded-circle p-4'>
                                <CollectionsBookmarkOutlined className='book-icon' />
                                <Circle className='book-circle'/>
                            </div>
                            <div className='card chat-card common-card-pattern rounded-circle p-4'>
                                <i className="bi bi-chat"></i>
                                <i className="bi bi-chat chat-2"></i>
                                <Circle className='chat-circle'/>
                            </div>
                            <div className='card message-card common-card-pattern rounded-circle p-4'>
                                <MailOutlined className='mail-icon' />
                                <Circle className='mail-circle'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChooseUs