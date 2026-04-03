'use client'

import { ThemeContextProvider } from '@/context/ThemeContext'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
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
