import { AutoAwesomeOutlined, Done, Percent, Stars, Verified } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='row'>
                <div className='col-12'>
                    <div className="d-flex flex-column jsutify content-center gap-2 align-items-center text-center mt-3 text-capitalize">
                        <h3 className='fw-bold'>Deliver End-To-End Retail Billing & Solutions</h3>
                        <p style={{ maxWidth: '650px', fontSize: '15px' }} >
                            Unique and powerful suite of software to run your entire business,
                            brought to you by a company with the long term vision to transform the way you work.
                        </p>
                    </div>
                    <div className='pricing-content mt-4'>
                        <div className='pricing-inner-content '>
                            <div className='pricing-cards d-flex gap-4'>
                                <div className='d-flex flex-column'>
                                    <h4>
                                        <Stars className='ms-3 star' />
                                        Starter
                                    </h4>
                                    <div className='card card-1 border-0 p-lg-5 p-md-3 p-sm-2'>
                                        <h2>$45/Mo</h2>
                                        <p style={{ maxWidth: '492px' }}>
                                            Includes <strong>1,000</strong> marketing contacts. Additional marketing contacts are sold in increments of
                                            <strong> 1,000</strong> from
                                        </p>
                                        <hr />
                                        <ul className='list-unstyled m-0'>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />Outbound email and in-product</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />messaging</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' /><span style={{ color: '#FFB545' }}> Push messages </span>
                                                & Notifications</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />Custom bots</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />Mobile Carousels</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />Banner Messages</li>
                                            <li className='list-color mb-2'><Done className='me-2' style={{ color: '#D0D0D0' }} />
                                                <span className='fw-bold'> Multi-channel </span> Campaigns</li>
                                            <li className='list-color mb-2'><Done className='me-2' style={{ color: '#D0D0D0' }} />A/B testing & control groups</li>
                                        </ul>
                                        <Button variant="contained"
                                            className='content-btn mt-4 mt-md-2 mt-sm-2'>
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                                <div className='d-flex flex-column'>
                                    <h4>
                                        <AutoAwesomeOutlined className='ms-3 bg-white rounded-circle star p-2' />
                                        Professional
                                    </h4>
                                    <div className='card card-1 border-0 p-lg-5 p-md-3 p-sm-2'>
                                        <div className='d-flex'>
                                            <h2>$60/Mo</h2>
                                            <Verified className='ms-auto verify-icon position-relative' />
                                            <Percent className='percent' />
                                        </div>

                                        <p style={{ maxWidth: '492px' }}>
                                            Includes <strong>1,000</strong> marketing contacts. Additional marketing contacts are sold in increments of
                                            <strong> 1,000</strong> from
                                        </p>
                                        <hr />
                                        <ul className='list-unstyled m-0'>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />Outbound email and in-product</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />messaging</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' /><span style={{ color: '#FFB545' }}> Push messages </span>
                                                & Notifications</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />Custom bots</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />Mobile Carousels</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />Banner Messages</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />
                                                <span className='fw-bold'> Multi-channel </span> Campaigns</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />
                                                A/B testing & control groups</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />
                                                Website Traffic analytics</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />
                                                Campaign reporting</li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />
                                                <span className='fw-bold'> Custom reporting</span> </li>
                                            <li className='list-color mb-2'><Done className='me-2 tick-icon-color' />
                                                Salesforce integration</li>
                                        </ul>
                                        <Button variant="contained"
                                            className='content-btn-2 mt-4 mt-md-2 mt-sm-2'>
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing