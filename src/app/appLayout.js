'use client'

import { ThemeContextProvider } from '@/context/ThemeContext'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ThemeProvider from '@/providers/ThemeProvider'

export default function AppLayout({ children }) {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <div className="container">
          <div className='wrapper'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>  
      </ThemeProvider>
    </ThemeContextProvider>
  )
}
