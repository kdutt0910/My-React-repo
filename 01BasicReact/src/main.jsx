import React, { StrictMode } from 'react'
import { createRoot,createElement } from 'react-dom/client'

import App from './App.jsx'

// const anotherElelment = "Chai aur KD"

// const element = React.createElement(
//   'a',
//   { href: 'https://www.google.com', target: '_blank' },
//   'Click here to visit Google',
//   anotherElelment
// )

createRoot(document.getElementById('root')).render(
  
    // element
    <StrictMode>
      <App />
    </StrictMode>
)
