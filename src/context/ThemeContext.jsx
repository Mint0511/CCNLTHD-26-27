/*
  ThemeContext dùng để quản lý trạng thái giao diện (theme) cho toàn bộ ứng dụng, ví dụ như chuyển đổi giữa chế độ sáng (light) và tối (dark).
  - ThemeContext: tạo ra một context để lưu trữ trạng thái theme.
  - ThemeContextProvider: là component dùng để bọc các component con, giúp các component này có thể truy cập và thay đổi theme ở bất cứ đâu trong ứng dụng mà không cần truyền props qua nhiều cấp.
  => Giúp việc quản lý và thay đổi theme trở nên dễ dàng, tập trung và hiệu quả hơn.
*/

"use client" /* "use client" là một chỉ thị trong Next.js để xác định rằng component này sẽ được render trên phía client (trình duyệt) thay vì phía server. Điều này cho phép sử dụng các tính năng của React như useState, useEffect, và context API mà không gặp lỗi khi render trên server. */

import { createContext, useEffect, useState} from "react";

export const ThemeContext = createContext() /* createContext() là một hàm trong React dùng để tạo một context */

const getFormLocalStorage = () => {
    if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
    }
    return "light"; /* Hàm getFormLocalStorage kiểm tra xem có đang chạy trên môi trường trình duyệt (window) hay không. Nếu có, nó sẽ lấy giá trị của "theme" từ localStorage. Nếu không có giá trị nào được lưu trữ, nó sẽ trả về "light" làm giá trị mặc định. */
}

export const ThemeContextProvider = ({children}) => {
    const [theme,setTheme] = useState(()=>{
        return getFormLocalStorage() /* useState() là một hook trong React dùng để quản lý trạng thái trong component. Ở đây, nó được sử dụng để tạo ra một trạng thái có tên là theme với giá trị mặc định được lấy từ hàm getFormLocalStorage(). Điều này có nghĩa là khi component được khởi tạo, nó sẽ kiểm tra localStorage để xem nếu có giá trị nào đã được lưu trữ cho "theme". Nếu có, nó sẽ sử dụng giá trị đó làm trạng thái ban đầu; nếu không, nó sẽ sử dụng "light" làm giá trị mặc định. */
    });
    
    const toggle = ()=>{
        setTheme(theme === "light" ? "dark" : "light") /* Hàm toggle được định nghĩa để chuyển đổi giữa hai trạng thái "light" và "dark". Khi hàm này được gọi, nó sẽ kiểm tra giá trị hiện tại của theme. Nếu theme đang là "light", nó sẽ chuyển sang "dark"; nếu theme đang là "dark", nó sẽ chuyển sang "light". */
    };
    
    useEffect(()=>{
        localStorage.setItem("theme", theme) /* useEffect() là một hook trong React dùng để thực hiện các tác dụng phụ (side effects) trong component. Ở đây, nó được sử dụng để lưu giá trị của theme vào localStorage mỗi khi giá trị của theme thay đổi. Điều này đảm bảo rằng khi người dùng thay đổi theme, lựa chọn của họ sẽ được lưu lại và có thể được khôi phục khi họ truy cập lại ứng dụng sau này. */  
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    );
}; /* ThemeContext.Provider là một component được cung cấp bởi context API của React. Nó được sử dụng để cung cấp giá trị của context (ở đây là theme và toggle) cho tất cả các component con nằm trong nó. Bất kỳ component nào nằm trong ThemeContext.Provider đều có thể truy cập vào giá trị theme và hàm toggle thông qua useContext(ThemeContext). */
