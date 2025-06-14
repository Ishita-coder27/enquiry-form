import React from 'react';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Enquiry from './Enquiry.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Enquiry/>
  </React.StrictMode>,
)
