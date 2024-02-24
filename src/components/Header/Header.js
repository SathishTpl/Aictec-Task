import { Button } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <div className='d-flex justify-content-end align-items-center header-content'>
            <ul className="navbar-right list-inline mb-0 ">
                <li className="list-inline-item">
                    <span>Solution</span>
                </li>
                <li className="list-inline-item">
                    <span>Industries</span>
                </li>
                <li className="list-inline-item">
                    <span>Products</span>
                </li>
                <li className="list-inline-item">
                    <span>Resources</span>
                </li>
                <li className="list-inline-item">
                    <span>Pricing</span>
                </li>
                <li className="list-inline-item">
                    <Button variant="contained login-btn">Login</Button>
                </li>
            </ul>
        </div>
    )
}

export default Header