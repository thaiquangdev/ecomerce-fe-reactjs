import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectRouter = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");
  // Kiểm tra nếu có token thì cho phép truy cập
  if (!token) {
    // Nếu không có token, điều hướng về trang đăng nhập
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectRouter;
