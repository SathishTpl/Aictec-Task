import React from 'react'
import './assets/styles.scss'
import Heading from './components/Heading/Heading';
import Features from './components/Features/Features';
import CoreFeatures from './components/Core Features/CoreFeatures';
import ChooseUs from './components/ChooseUs/ChooseUs';
import ClientLogs from './components/ClientLogs/ClientLogs';
import Products from './components/Products/Products';
import WorkTutorial from './components/WorkTutorial/WorkTutorial';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Heading />
      <Features />
      <CoreFeatures />
      <ChooseUs />
      <ClientLogs />
      <Products />
      <WorkTutorial />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App