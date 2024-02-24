import { ArrowDropUp } from '@mui/icons-material';
import React from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

const ChartConfig = {
    // color: {
    //     'primary': '#7F7CFF',
    //     'secondary': '#24B8D2',
    // },
    legendFontColor: '#AAAEB3', // only works on react chart js 2
    chartGridColor: '#EAEAEA',
    axesColor: '#657786',
    shadowColor: 'rgba(0,0,0,0.6)'
}

const tooltipStyle = {
    backgroundColor: 'transparent',
    border: '1px solid rgba(0,0,0,0.6)',
    borderRadius: '5px'
}

const tooltipTextStyle = {
    color: 'black',
    fontSize: '12px',
    paddingTop: '5px',
    paddingBottom: '5px',
}

const ContactChartCard = () => {

    const data = [
        { name: 'Page A', seriesA: 4000, seriesB: 2400 },
        { name: 'Page B', seriesA: 3000, seriesB: 3398 },
        { name: 'Page C', seriesA: 2000, seriesB: 9800 },
        { name: 'Page D', seriesA: 2780, seriesB: 3908 },
        { name: 'Page E', seriesA: 1890, seriesB: 4800 },
        { name: 'Page F', seriesA: 2390, seriesB: 3800 },
        { name: 'Page G', seriesA: 3490, seriesB: 4300 },
    ];

    return (
        <>
            <div className="card contact_card" style={{ width: '23rem', height: "max-content" }}>
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <h5 className='card-title mr-2' style={{ fontSize: "1.2rem" }}>Contact Created</h5>
                        <span style={{ color: '#45B751' }}>15% <ArrowDropUp /> </span>
                    </div>
                    <ResponsiveContainer width='100%' height={120}>
                        <AreaChart data={data}>
                            <XAxis dataKey="name" hide={true} stroke={ChartConfig.axesColor} />
                            <YAxis stroke={ChartConfig.axesColor} hide={true} />
                            <CartesianGrid vertical={false} stroke={ChartConfig.chartGridColor} />
                            <defs>
                                <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: '#6865E5', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: 'rgba(255, 255, 255, 0)', stopOpacity: 0 }} />
                                </linearGradient>
                                <linearGradient id="colorGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: '#65D2E5', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: 'rgba(255, 255, 255, 0)', stopOpacity: 0 }} />
                                </linearGradient>
                            </defs>
                            <Tooltip wrapperStyle={tooltipStyle} cursor={false} itemStyle={tooltipTextStyle} labelStyle={{ display: 'none' }} />
                            <Area type='monotone' dataKey='seriesA' stackId="1" fill={'url(#colorGradient)'} fillOpacity="1" />
                            <Area type='monotone' dataKey='seriesB' stackId="1" fill={'url(#colorGradient2)'} fillOpacity="1" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default ContactChartCard