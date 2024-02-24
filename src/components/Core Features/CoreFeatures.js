import React from 'react'
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';
import { Pie } from 'react-chartjs-2';
import { AddCircle, CheckCircle, Circle, Construction } from '@mui/icons-material';

const CoreFeatures = () => {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const data_2 = {
        labels: [

        ],
        datasets: [{
            data: [2400, 3200, 900, 500],
            backgroundColor: [
                'rgba(98, 95, 251, 1)',
                'rgba(74, 220, 241, 1)',
                'rgba(86, 234, 255, 1)',
                'rgba(74, 220, 241, 1)',
            ],
            borderWidth: [10, 0, 0, 0],
            hoverBackgroundColor: [
                'rgba(98, 95, 251, 1)',
                'rgba(74, 220, 241, 1)',
                'rgba(86, 234, 255, 1)',
                'rgba(74, 220, 241, 1)',
            ]
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false
    };


    return (
        <div className="session-inner-wrapper core_features">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className='card outer-card p-xl-5 p-lg-4 p-md-3 p-sm-2'>
                        <div className="card inner-card p-lg-3 pb-lg-2 p-md-2 p-sm-1">
                            <h5 class="card-title mb-0" style={{ textAlign: 'start' }}>Sale analytics </h5>
                            <div className="card-body pb-0 d-flex flex-column">
                                <div className="d-flex align-items-center pb-2 gap-2 pb-2 gap-3">
                                    <span>Lead</span>
                                    <div className="progress" style={{ width: '80%', marginLeft: '57px' ,height: '12px' }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: '80%', backgroundColor: '#49DDE2' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                    <span>80%</span>
                                </div>
                                <div className="d-flex align-items-center pb-2 gap-3">
                                    <span>Qualification</span>
                                    <div className="progress" style={{ width: '69%', height: '12px'}}>
                                        <div className="progress-bar" role="progressbar" style={{ width: '45%', backgroundColor: '#FFB545' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                    <span>45%</span>
                                </div>
                                <div className="d-flex align-items-center pb-2 gap-3">
                                    <span>Validation</span>
                                    <div className="progress" style={{ width: '80%', marginLeft: '21px' ,height: '12px' }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: '40%', backgroundColor: '#6B7AFF' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                    <span>40%</span>
                                </div>
                                <div className="d-flex align-items-center pb-2 gap-3">
                                    <span>Supply</span>
                                    <div className="progress" style={{ width: '80%', marginLeft: '40px' ,height: '12px' }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: '60%', backgroundColor: '#FF6F89' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                    <span>60%</span>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-7">
                                <div className='card inner-card area-charts-card p-3 p-md-3 p-sm-1 mt-4 mt-md-3 mt-sm-2' >
                                    <h5 className="card-title" style={{ textAlign: 'start' }}>Number of leads </h5>
                                    <div className='d-inline-flex'>
                                        <h2>85</h2>
                                        <span className='m-2 m-md-1 m-sm-0'>this week</span>
                                    </div>
                                    <ResponsiveContainer width="100%" height={80}>
                                        <AreaChart
                                            width={600}
                                            height={200}
                                            data={data}
                                            syncId="anyId"
                                            margin={{
                                                top: 10,
                                                right: 30,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <CartesianGrid stroke="transparent" />
                                            <XAxis dataKey="name" hide={true} />
                                            <YAxis hide={true} />
                                            <defs>
                                                <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" style={{ stopColor: 'rgba(71, 207, 255, 1)', stopOpacity: 1 }} />
                                                    <stop offset="100%" style={{ stopColor: 'rgba(255, 255, 255, 0)', stopOpacity: 0 }} />
                                                </linearGradient>
                                            </defs>
                                            <Tooltip />
                                            <Area type="monotone" dataKey="pv" stroke="#2EB4E3" fill={"url(#colorGradient)"} />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className='col-5'>
                                <div className='card pie_chart_card p-lg-2 p-md-1 p-sm-0 mt-md-3 mt-sm-2' style={{ height: '12rem' }}>
                                    <Pie data={data_2} options={options} height={200} />
                                </div>
                            </div>
                        </div>
                        <div className='card task_card p-lg-3 ps-lg-3 ps-md-3 ps-sm-2 p-md-1 p-sm-0 mt-4 mt-md-3 mt-sm-2'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='m-0'>Task Assigned To Me</h6>
                                <AddCircle style={{ color: '#CFCFCF', fontSize: '2rem' }} />
                                <i className="bi bi-calendar-fill" style={{ color: '#CFCFCF', fontSize: '1.6rem' }} ></i>
                                <CheckCircle style={{ color: '#2FCF3F', fontSize: '2rem' }} />
                                <Construction style={{ color: '#CFCFCF', fontSize: '2rem' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-4 col-lg-5 ">
                    <div className='c-features-content mt-5 ms-lg-4 ms-md-3 ms-sm-1'>
                        <h3>Allocate Leads and Simplify Lead Management</h3>
                        <p className='mt-lg-3 mt-0'>
                            Unique and powerful suite of software to run your entire business,
                            brought to you by a company with the long term vision to transform the way you work.
                        </p>
                        <div className='d-flex flex-column gap-5 content-card-wrapper' style={{ marginTop: '6rem'}}>
                            <div className='card content-inner-card p-3 p-md-2 p-sm-1'>
                                <h5 className="card-title">
                                    <Circle className='mx-2' style={{ color: '#47CFFF' }} />
                                    Lead Generation
                                </h5>
                                <p className="card-text ms-4 ms-md-3 ms-sm-2" style={{ fontSize: '0.9rem' }}>
                                    Guide Helps Companies Increase Customer & Agent Satisfaction, Also Reducing Support Costs.
                                </p>
                            </div>

                            <div className='card content-inner-card p-3 p-md-2 p-sm-1'>
                                <h5 className="card-title">
                                    <Circle className='mx-2' style={{ color: '#47CFFF' }} />
                                    Lead Generation
                                </h5>
                                <p className="card-text ms-4 ms-md-3 ms-sm-2" style={{ fontSize: '0.9rem' }}>
                                    Guide Helps Companies Increase Customer & Agent Satisfaction, Also Reducing Support Costs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CoreFeatures