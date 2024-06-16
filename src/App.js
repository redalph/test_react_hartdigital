import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import MainPage from './Main_page'
import Cases from './Cases'
import Service from './Service'
import Contacts from './Contacts'
import Vacancies from './Vacancies'
import News from './News'

import './styles.scss'

export default function App() {
  return (
    <Router>
    <div className='wrapper'>
      <link rel="stylesheet" type="text/css" href="styles.scss" />

      <Header />

      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/vacancies" element={<Vacancies />} />
      <Route path="/news" element={<News />} />
      </Routes>
  
      <Footer />

      
    </div>

    </Router>
  )
}


