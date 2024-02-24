import React from 'react';
import stylevintage from '../../assets/img/stylevintage.png'
import Bitorrent from '../../assets/img/bitorrent.png'
import Bitmax from '../../assets/img/bitmax.jpg'
import Target from '../../assets/img/Target.png'
import crypto from '../../assets/img/crypto.jpg'
import Kotak from '../../assets/img/kotak.png'
import Unzo from '../../assets/img/unzo.png'
import { EnergySavingsLeaf, EnergySavingsLeafOutlined } from '@mui/icons-material';

const ClientLogs = () => {
    return (
        <div className="session-inner-wrapper client-logs">
            <div className="d-flex align-items-center justify-content-center">
                <div className='text-center'>
                    <h2>
                        Trusted by more than 75 million users globally
                    </h2>
                    <p>
                        Unique and powerful suite of software to run your entire business,<br />
                        brought to you  transform the way you work.
                    </p>
                </div>
            </div>
            <div className='client-logo mt-4 d-flex align-items-center justify-content-center'>
                <div className='client-text p-md-2 p-sm-2 p-4 border-end'>
                    <h3>Cross-<span className='xy'>Xy</span></h3>
                </div>
                <div className='client-text p-4 d-flex align-items-center'>
                    <img src={Bitorrent} alt='' className='mb-2 me-2' width='25px' height='25px' />
                    <h3>Bittorent</h3>
                </div>
                <div className='client-text p-4'>
                    <img src={stylevintage} className='img-fluid' alt='' width='55px' height='55px' />
                </div>

                <div className='client-text d-flex align-items-center p-4'>
                    <i className="bi bi-bootstrap-fill h3 me-2" style={{ color: '#7782FF' }}></i>
                    <h3 style={{ letterSpacing: '7px' }}>RAND</h3>
                </div>
            </div>
            <hr style={{ width: '75%',margin:'0 auto' }} />

            <div className='client-logo d-flex align-items-center justify-content-center'>
                <div className='client-text p-md-2 p-sm-0 p-4 border-end'>
                    <h3 className='bitax'>Bit
                        <img src={Bitmax} alt='' width='25px' height='25px' />ax
                    </h3>
                </div>
                <div className='client-text p-4 d-flex align-items-center border-end'>
                    <img src={Target} alt='' width='95px' height='55px' />
                </div>
                <div className='client-text p-4 d-flex flex-column border-end'>
                    <span style={{ marginBottom: '-17px' }}>Modern</span>
                    <h3>Crypto
                        <img src={crypto} alt='' width='55px' height='55px' style={{ transform: 'rotate(90deg)' }} />
                    </h3>
                </div>
                <div className='classic-text border-end p-4'>
                    <div className='d-flex gap-1'>
                        <span>C</span><span>l</span><span>a</span><span>s</span><span>s</span><span>i</span><span>c</span>
                    </div>
                    <p className='m-0'>DESIGN STUDIO</p>
                </div>
                <div className='client-text p-4'>
                    <h5>Up Shot</h5>
                </div>
            </div>

            <div className='client-logo mt-4 d-flex align-items-center justify-content-center'>
                <div className='client-text p-4 d-flex align-items-center border-end'>
                    <h3>
                        <i className="bi bi-bag-check-fill me-1" style={{ color: '#6AD368' }}></i>
                        Salebin
                    </h3>
                </div>
                <div className='client-text p-4 d-flex align-items-center border-end'>
                    <h3>
                        <img src={Kotak} className='img-fluid me-1' alt='' width='30px' height='30px' />
                        Kotak
                    </h3>
                </div>
                <div className='client-text p-4 d-flex align-items-center border-end'>
                    <h3>
                        <img src={Unzo} className='' alt='' width='50px' height='50px' />
                        Unzo
                    </h3>
                </div>

                <div className='client-text p-4 d-flex align-items-center'>
                    <h3>
                        <EnergySavingsLeaf style={{ color: '#FF69B1' }}/>
                        Minti
                    </h3>
                </div>
            </div>

        </div>
    )
}

export default ClientLogs