import { Lens, VerifiedOutlined } from '@mui/icons-material'
import React from 'react'

const Features = () => {
    return (
        <div className="session-inner-wrapper features">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-11 ">
                    <div className="body text-center">
                        <h2 className='mb-3'>Explore Premium Features</h2>
                        <p className='features-content'>
                            Unique and powerful suite of software to run your entire business,
                            brought to you by a company with the long term vision to transform the way you work.
                        </p>
                        <div className='feature-cards d-flex row'>
                            <div className='col-sm-6 col-md-6 col-lg-4'>
                                <div className="card card-1 p-3">
                                    <div className="card-body">
                                        <i className="bi bi-gear icon-circle" style={{ fontSize: '2.5rem' }}></i>
                                        <Lens className='lens' />
                                        <h5 className="card-title mt-1">Powerful Settings</h5>
                                        <p className="card-text" style={{color: '#4E4E4E'}}>
                                            Provide excellent customer service.
                                            Answer more tickets.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-4'>
                                <div className="card card-2 p-3">
                                    <div className="card-body">
                                        <i className="bi bi-person-gear icon-circle" style={{ fontSize: '2.5rem' }}></i>
                                        <Lens className='lens-2' />
                                        <h5 className="card-title mt-1">User Friendly</h5>
                                        <p className="card-text" style={{color: '#4E4E4E'}}>
                                            Use Timeline to plan projects right how the pieces fit together.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-4 '>
                                <div className="card card-3 p-3">
                                    <div className="card-body">
                                        <VerifiedOutlined className='icon-circle' style={{ fontSize: '3rem'}} />
                                        <Lens className='lens-3' style={{ color: '#F5C9E9'}}/>
                                        <h5 className="card-title mt-3">Integrated platform</h5>
                                        <p className="card-text mb-1" style={{color: '#4E4E4E'}}>
                                            Vivamus massa eleifend etiam nequ odio feugiat dolor est.
                                        </p>
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

export default Features