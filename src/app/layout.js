import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from '@/providers/AuthProvider'
import AppLayout from './appLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nhom6Blog',
  description: 'Nơi chia sẻ những câu chuyện và kiến thức thú vị!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AppLayout>
            {children}
          </AppLayout>
        </AuthProvider>
      </body>
    </html>
  )
}
