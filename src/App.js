import React from 'react'
import './assets/styles.scss'
import Heading from './components/Heading/Heading';
import Features from './components/Features/Features';
import CoreFeatures from './components/Core Features/CoreFeatures';
import ChooseUs from './components/ChooseUs/ChooseUs';
import ClientLogs from './components/ClientLogs/ClientLogs';

const App = () => {
  return (
    <div>
      <Heading />
      <Features />
      <CoreFeatures />
      <ChooseUs />
      <ClientLogs />
    </div>
  )
}

export default App