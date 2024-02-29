import React from 'react'
import {
    Avatar, Button, List, ListItem, ListItemText,
    ThemeProvider, Typography, createTheme
} from '@mui/material'
import mobile from '../../assets/img/mobile-removebg-preview.png'
import playstore from '../../assets/img/playstore.png'

const THEME = createTheme({
    typography: {
        "fontFamily": `"Jost", sans-serif`,
        "fontSize": 16,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});

const WorkTutorial = () => {
    return (
        <div className="session-inner-wrapper w-tutorial">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <h2>How It Works</h2>
                    <p className='mt-lg-3 mt-0 me-lg-4 me-md-2 me-sm-0'>
                        Unique and powerful suite of software to run your business,
                        brought to you by  vision to you work.
                    </p>
                    <ThemeProvider theme={THEME}>
                        <List className="p-0 pt-xl-3 pt-lg-3 pt-2 list-divider">
                            <ListItem className="py-2 px-xl-4 px-lg-4 px-md-2 list-1">
                                <Avatar className="me-3 bg-transparent  ">
                                    <h3 className='heading-5' style={{ color: '#47CFFF' }}>01</h3> </Avatar>
                                <ListItemText primary={<Typography className='fw-bold mb-2'>Download Your App</Typography>}
                                    secondary="CentraHub CRM automatically logs in any reactions 
                                made by your leads, prospects" />
                            </ListItem>
                            <ListItem className="py-2 px-xl-4 px-lg-4 px-md-2 my-xl-3 my-lg-3 my-md-2 list-1">
                                <Avatar className="me-3 bg-transparent " style={{ backgroundColor: '#FFE2ED' }}>
                                    <h3 className='heading-5' style={{ color: '#47CFFF' }}>02</h3> </Avatar>
                                <ListItemText primary={<Typography className='fw-bold mb-2'>List Your Company Detail</Typography >}
                                    secondary="Customers making it easier for your sales team members 
                                audience they make contact." />
                            </ListItem>
                            <ListItem className="py-2 px-xl-4 px-lg-4 px-md-2 my-xl-3 my-lg-3 my-md-2 list-1">
                                <Avatar className="me-3 bg-transparent s" style={{ backgroundColor: '#E4F4E6' }}>
                                    <h3 className='heading-5' style={{ color: '#47CFFF' }}>03</h3> </Avatar>
                                <ListItemText primary={<Typography className='fw-bold mb-2'>Enjoy Your Business</Typography >}
                                    secondary="Customers making it easier for your sales team members 
                                audience they make contact." />
                            </ListItem>
                        </List>
                    </ThemeProvider>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-7">
                    <div className='card card-mobile pt-xl-5 pt-lg-5 pt-md-4 pt-sm-2 pb-4 ps-xl-5 ps-lg-5 ps-md-4 ps-sm-2'>
                        <div className='d-flex'>
                            <div className='me-2'>
                                <h3 style={{ lineHeight: '40px' }}>
                                    The Perfect CRM Software: Boost Your Field Sales Team's Efficiency
                                </h3>
                                <p style={{ color: '#3BA3C8', display: 'block', fontSize: '16px' }}>
                                    Depending on the Sales Approaches Standardize a Marketing Process
                                </p>
                                <p>
                                    Unique and powerful suite of software to run your entire business,
                                    brought to you by a company.
                                </p>
                                <div className='d-flex gap-3 mt-lg-5 mt-md-3 mt-sm-2'>
                                    <Button variant="contained" className='apple-btn' 
                                    style={{ display: 'flex', lineHeight: '12px', alignItems: 'center' }}>
                                        <i className="bi bi-apple h3 mb-0"></i>
                                        <div style={{ textAlign: 'center' }}>
                                            <small>Download On The</small>
                                            <h5 className='mb-0'>App Store</h5>
                                        </div>
                                    </Button>
                                    <Button variant="contained" className='apple-btn' 
                                    style={{ display: 'flex', lineHeight: '12px', alignItems: 'center' }}>
                                        <img src={playstore} alt='img' className='img-fluid' height='25px' width='25px'  />
                                        <div style={{ textAlign: 'center' }}>
                                            <small>GET IN ON</small>
                                            <h5 className='mb-0'>Google Play</h5>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                            <div className='mobile-image'>
                                <img src={mobile} width='300px' height='550px' alt='' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkTutorial