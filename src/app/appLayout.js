'use client';

// ===== Providers & Contexts =====
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';

// ===== Layout Components =====
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

/**
 * AppLayout Component
 * 
 * Đóng vai trò là wrapper chính cho toàn bộ giao diện của ứng dụng.
 * Component này cung cấp:
 * 1. Môi trường Theme (ThemeContextProvider & ThemeProvider).
 * 2. Cấu trúc layout cơ bản bao gồm Navbar ở trên, nội dung chính ở giữa và Footer ở dưới.
 *
 * @param {Object} props - Các thuộc tính được truyền vào component.
 * @param {React.ReactNode} props.children - Nội dung của page thao tác hiện tại.
 * @returns {JSX.Element} Giao diện hệ thống sau khi đã bọc các lớp Layout.
 */
const AppLayout = (props) => {
  const { children } = props;

  return (
    <ThemeContextProvider>
      <ThemeProvider>
        {/* Khung chứa nội dung chính với class cố định */}
        <div className="container">
          <div className="wrapper">
            {/* Thanh điều hướng */}
            <Navbar />
            
            {/* Nội dung trang (Page content) hiển thị tại đây */}
            <main className="content">
              {children}
            </main>

            {/* Chân trang */}
            <Footer />
          </div>
        </div>  
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

export default AppLayout;
