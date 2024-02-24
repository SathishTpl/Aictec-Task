import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const ColumnChart = () => {
    return (
        <>
            <div className="card column_chart_card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <div className='d-flex justify-content-end three-dots'>
                        <FiberManualRecordIcon style={{ color: '#65C67F' }} />
                        <FiberManualRecordIcon style={{ color: '#F9BE41' }} />
                        <FiberManualRecordIcon style={{ color: '#FF7373' }} />
                    </div>
                    <div className='d-flex patterns'>
                        <div className='pattern-1'></div>
                        <div className='pattern-2'></div>
                        <div className='pattern-3'></div>
                        <div className='pattern-4'></div>
                        <div className='pattern-5'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColumnChart