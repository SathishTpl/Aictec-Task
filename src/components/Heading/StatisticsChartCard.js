import { ArrowRightAlt } from '@mui/icons-material';
import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const StatisticsChartCard = () => {

    const data = [
        {
            name: "1",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "2",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "3",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "4",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "5",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "6",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "7",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];

    return (
        <>
            <div className="card statistics_card" style={{ width: '15rem', height: "max-content" }}>
                <div className="card-body">
                    <div className='d-flex'>
                        <h5 className='card-title' style={{ fontSize: "1.2rem" }}>Statistic</h5>
                    </div>
                    <div className='d-flex flex-column p-2 justify-content-center align-items-center bg-white rounded-3'>
                        <div className='chart-title'><ArrowRightAlt className='arrow-icons' style={{ transform: 'rotate(180deg)' }} /> <span className='mx-1 mb-2'>Business Strategy</span>
                            <ArrowRightAlt className='arrow-icons' /> </div>
                        <BarChart
                            width={250}
                            height={150}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid stroke="transparent" />
                            <XAxis dataKey="name" />
                            <YAxis hide={true} />
                            <Tooltip />
                            <Bar dataKey="pv" barSize={8} fill="#23C0F6" background={{ fill: "#EFF3FE" }} />
                        </BarChart>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatisticsChartCard