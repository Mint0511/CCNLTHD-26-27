'use client';

import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// 1. Tách biệt phần giao diện (UI Layout) thành một component riêng biệt
const CoreLayout = ({ children }) => (
  <div className="container">
    <div className="wrapper">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  </div>
);

// 2. AppLayout giờ đây chỉ đóng vai trò là "Provider Tree" (Phân tách trách nhiệm - Separation of Concerns)
export default function AppLayout({ children }) {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <CoreLayout>
          {children}
        </CoreLayout>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
