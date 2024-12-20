import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Heading } from "./heading";
import { Services } from "./services"
import { Products } from './products';
import { Feedbacks } from './feedback';
import { Footer } from './footer';
import { Counter } from './counter';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/CSS/responsive.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Heading />
            <Services />
            <Products />
            <Feedbacks />
            <Footer />
          </>
        } />
        <Route path="/counter" element={<Counter />} /> 
      </Routes>
    </Router>
  </StrictMode>,
)
