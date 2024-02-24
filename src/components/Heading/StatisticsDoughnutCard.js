import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const StatisticsDoughnutCard = () => {

    const data = {
        labels: ['1', '2', '3',],
        datasets: [
            {
                label: '# of Votes',
                data: [25, 25, 25, 25],
                backgroundColor: [
                    'rgba(161, 131, 246, 1)',
                    'rgba(251, 155, 145, 1)',
                    'rgba(255, 175, 88, 1)',
                    'rgba(255, 255, 255, 1)',
                ],
                borderColor: [
                    'rgba(161, 131, 246, 1)',
                    'rgba(251, 155, 145, 1)',
                    'rgba(255, 175, 88, 1)',
                    'rgba(255, 255, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <div className="card doughnut_card p-2" style={{ width: '17rem', height: "max-content" }}>
                <div className="card-body">
                    <h5 className='card-title mr-2' style={{ fontSize: "1.2rem" }}>Global Statistic</h5>
                    <div className='d-flex justify-content-center alig-items-center'>
                        <div className='doughnut_chart' style={{ width: '10rem', height: '10rem' }}>
                            <div>Sale <br /><span>(75% )</span></div>
                            <Doughnut data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatisticsDoughnutCard