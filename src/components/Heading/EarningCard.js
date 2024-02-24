import React from 'react'

const EarningCard = () => {
    return (
        <>
            <div className="card earning_card" style={{ width: '14rem', height: "max-content" }}>
                <div className="card-body d-flex align-items-center">
                    <div className='circle'>
                        <div className='inner-circle'></div>
                    </div>
                    <div className='card-text'>
                        <h3 className='m-0 p-0'>$4.658</h3>
                        <span>Earned this month</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default EarningCard