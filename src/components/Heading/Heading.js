import React from 'react'
import Header from '../Header/Header'
import AddIcon from '@mui/icons-material/Add';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { Button, Divider } from '@mui/material';
import ColumnChart from './ColumnChart';
import EarningCard from './EarningCard';
import StatisticsChartCard from './StatisticsChartCard';
import StatisticsDoughnutCard from './StatisticsDoughnutCard';
import ContactChartCard from './ContactChartCard';
import { GradeRounded, PlayArrow } from '@mui/icons-material';

import leftLeaf from '../../assets/img/left-leaf.png'

const Heading = () => {
    return (
        <div className='heading-container'>
            <Header />

            <div className='content'>
                <div className='content-wrapper'>
                    <div className='top-icons'>
                        <AddIcon style={{ color: '#E1E1E1' }} />
                        <PlayArrowOutlinedIcon className="content-play-icon" />
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='content-box mt-2'>
                                <h1>The CRM Platform Your Whole Business
                                    Will Love</h1>
                                <p>
                                    Provide excellent customer service. Answer more tickets all-in-one Primarily software.
                                </p>
                                <Button variant="contained" className='content-btn'>Get Started</Button>
                                <Button variant="text" className='content-btn-secondary'>How It Work</Button>
                                <div className='playarrow-icon d-flex justify-content-end'>
                                    <PlayArrow style={{ color: '#CFE8EA', fontSize: '2rem', transform: 'rotate(180deg)' }} />
                                </div>
                                <Divider className='mt-4 mt-md-2 mt-sm-2 mb-4 mb-md-2 mb-sm-2' />
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-4 mt-md-2 mt-sm-2 five-star-wrapper'>
                                <img src={leftLeaf} alt='' width='25px' height='100px' className='ml-4' />
                                <div className='five_start_badge text-center'>
                                    <div className='G2'>
                                        <h6>G2</h6>
                                    </div>
                                    <div className='d-inline' >Best</div>
                                    <div >Support</div>
                                    <span className='spring'>SPRING</span><br />
                                    <span>202x</span>
                                </div>
                                {/* <Divider orientation="vertical" variant="middle" flexItem/> */}
                                <div className='five-start-content'>
                                    <h2>5 Start Awards</h2>
                                    <span>For Customer Services</span>
                                    <div className='p-2'>
                                        <GradeRounded className='star' />
                                        <GradeRounded className='star' />
                                        <GradeRounded className='star' />
                                        <GradeRounded className='star' />
                                        <GradeRounded className='star' />
                                    </div>
                                </div>
                                <img src={leftLeaf} alt='' width='25px' height='100px' style={{ transform: 'rotate(180deg)' }} />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 position-relative'>
                            <div className='chart-content'>
                                <div className='chart-inner-content'>
                                    <ColumnChart />
                                    <EarningCard />
                                    <StatisticsChartCard />
                                    <StatisticsDoughnutCard />
                                    <ContactChartCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider variant='middle' className='header-divider' />
            </div>
        </div>
    )
}

export default Heading