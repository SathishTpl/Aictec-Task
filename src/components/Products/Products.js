import { BookOutlined, Campaign, DoNotDisturb, EmojiObjectsOutlined, HomeOutlined, 
         PercentRounded, SettingsOutlined, ThumbUpOutlined } from '@mui/icons-material'
import {
    Avatar, Button, Divider, List, ListItem, ListItemText,
    ThemeProvider, createTheme
} from '@mui/material'
import React from 'react'

const THEME = createTheme({
    typography: {
        "fontFamily": `"Jost", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});

const Products = () => {
    return (
        <div className="session-inner-wrapper products">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-11">
                    <div className="body text-center">
                        <h2 className='mb-3'>Sales Automation Modules</h2>
                        <p className='products-content mb-4'>
                            Unique and powerful suite of software to run your entire business,
                            brought to you by a company with the long term vision to transform the way you work.                        </p>
                        <div className='card product-outer-card p-2'>
                            <div className='card products-cards py-4'>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-6 col-lg-4'>
                                        <Button variant="contained" className='content-btn mt-4 mt-md-2 mt-sm-2 mb-3'>
                                            In Need
                                        </Button>
                                        <ThemeProvider theme={THEME}>
                                            <List className="p-0 list-divider">
                                                <ListItem className="p-0 mb-2">
                                                    <Avatar className="me-3" style={{ backgroundColor: '#EDEDFF' }}>
                                                        <PercentRounded style={{ color: '#928EF2' }} /> </Avatar>
                                                    <ListItemText primary={<span className='fw-bold'>Sales</span>}
                                                        secondary="Unique and powerful suite sale
                                            run your entire business" />
                                                </ListItem>
                                                <Divider className='mt-2 mb-lg-4 mb-xl-4 mb-md-2 mb-sm-2 ms-5' />
                                                <ListItem className="p-0">
                                                    <Avatar className="me-3" style={{ backgroundColor: '#FFE2ED' }}>
                                                        <Campaign style={{ color: '#FF80AD' }} /> </Avatar>
                                                    <ListItemText primary={<span className='fw-bold'>Marketing</span >}
                                                        secondary="Unique and powerful suite sale
                                            run your entire business" />
                                                </ListItem>
                                                <Divider className='mt-2 mb-lg-4 mb-xl-4 mb-md-2 mb-sm-2 ms-5' />
                                                <ListItem className="p-0">
                                                    <Avatar className="me-3" style={{ backgroundColor: '#E4F4E6' }}>
                                                        <SettingsOutlined style={{ color: '#2FCF3F' }} /> </Avatar>
                                                    <ListItemText primary={<span className='fw-bold'>Services</span >}
                                                        secondary="Unique and powerful suite sale
                                            run your entire business" />
                                                </ListItem>
                                            </List>
                                        </ThemeProvider>
                                    </div>

                                    <div className='col-sm-12 col-md-6 col-lg-4'>
                                        <Button variant="contained" className='content-btn mt-4 mt-md-2 mt-sm-2 mb-3'>
                                            Industry
                                        </Button>
                                        <ThemeProvider theme={THEME}>
                                            <List className="p-0 list-divider">
                                                <ListItem className="p-0 mb-2">
                                                    <Avatar className="me-3" style={{ backgroundColor: '#FFF1DB' }}>
                                                        <EmojiObjectsOutlined style={{ color: '#FFB545' }} /> </Avatar>
                                                    <ListItemText primary={<span className='fw-bold'>Automotive</span>}
                                                        secondary="Unique and powerful suite sale
                                            run your entire business" />
                                                </ListItem>
                                                <Divider className='mt-2 mb-lg-4 mb-xl-4 mb-md-2 mb-sm-2 ms-5' />
                                                <ListItem className="p-0">
                                                    <Avatar className="me-3" style={{ backgroundColor: '#DFF3F2' }}>
                                                        <HomeOutlined style={{ color: '#38CEC5' }} /> </Avatar>
                                                    <ListItemText primary={<span className='fw-bold'>Real Estate</span>}
                                                        secondary="Unique and powerful suite sale
                                            run your entire business" />
                                                </ListItem>
                                                <Divider className='mt-2 mb-lg-4 mb-xl-4 mb-md-2 mb-sm-2  ms-5' />
                                                <ListItem className="p-0">
                                                    <Avatar className="me-3" style={{ backgroundColor: '#D5F2FC' }}>
                                                        <BookOutlined style={{ color: '#23C0F6' }} /> </Avatar>
                                                    <ListItemText primary={<span className='fw-bold'>Education</span>}
                                                        secondary="Unique and powerful suite sale
                                            run your entire business" />
                                                </ListItem>
                                            </List>
                                        </ThemeProvider>
                                    </div>
                                    <div className='col-sm-12 col-md-6 col-lg-4 '>
                                        <Button variant="contained" className='content-btn mt-4 mt-md-2 mt-sm-2 mb-3'>
                                            Solution
                                        </Button>
                                        <ThemeProvider theme={THEME}>
                                            <List className="p-0 list-divider">
                                                <ListItem className="p-0 mb-2">
                                                    <Avatar className="me-3" style={{ backgroundColor: '#FFE4E4' }}>
                                                        <i className="bi bi-chat-square-dots" style={{ color: '#FF4F4F' }}></i> </Avatar>
                                                    <ListItemText primary={<span className='fw-bold'>Project Management</span>}
                                                        secondary="Unique and powerful suite sale
                                            run your entire business" />
                                                </ListItem>
                                                <Divider className='mt-2 mb-lg-4 mb-xl-4 mb-md-2 mb-sm-2 ms-5' />
                                                <ListItem className="p-0">
                                                    <Avatar className="me-3" style={{ backgroundColor: '#F4E5FF' }}>
                                                        <i className="bi bi-truck" style={{ color: '#A76FD2' }}></i></Avatar>
                                                    <ListItemText primary={<span className='fw-bold'>Delivery Management</span>}
                                                        secondary="Unique and powerful suite sale
                                            run your entire business" />
                                                </ListItem>
                                                <Divider className='mt-2 mb-lg-4 mb-xl-4 mb-md-2 mb-sm-2 ms-5' />
                                                <ListItem className="p-0">
                                                    <Avatar className="me-3" style={{ backgroundColor: '#FFE7DF' }}>
                                                        <ThumbUpOutlined style={{ color: '#BC7964' }} /> </Avatar>
                                                    <ListItemText primary={<span className='fw-bold'>Loyalty Management</span>}
                                                        secondary="Unique and powerful suite sale
                                            run your entire business" />
                                                </ListItem>
                                                <Divider className='mt-2 mb-lg-4 mb-xl-4 mb-md-2 mb-sm-2 ms-5' />
                                                <ListItem className="p-0">
                                                    <Avatar className="me-3" style={{ backgroundColor: '#FFDEF2' }}>
                                                        <DoNotDisturb style={{ color: '#FA77C5' }} /> </Avatar>
                                                    <ListItemText primary={<span className='fw-bold'>Professional Management</span>}
                                                        secondary="Unique and powerful suite sale
                                            run your entire business" />
                                                </ListItem>
                                            </List>
                                        </ThemeProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products