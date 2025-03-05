import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //
import '../src/index.css';
import { Provider, useSelector } from "react-redux";
import store from "store/storage";
import { OrbitProgress } from "react-loading-indicators";


const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
 
  const [loading, setLoading] = useState(true); 
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 


  useEffect(() => {
 
    const checkAuthentication = async () => {
  
      setTimeout(() => {
        setLoading(false); 
      }, 1000); 
    };

    checkAuthentication();
  }, []);

 
  if (loading) {
    return (
      <div className="loading-container">
          <div className="d-flex justify-content-center align-items-center vh-100 position-fixed w-100 h-100" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
            <OrbitProgress variant="spokes" color="#32cd32" size="medium" text="Loading" textColor="black" />
          </div>
        </div>
    );
  }

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        {/* Protected Routes */}
        <Route 
          path="/admin/*" 
          element={isAuthenticated ? <AdminLayout /> : <Navigate to="/auth/login" replace />} 
        />
        {/* Public Routes */}
        <Route 
          path="/auth/*" 
          element={!isAuthenticated ? <AuthLayout /> : <Navigate to="/admin/dashboard" replace />} 
        />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/admin/dashboard" : "/auth/login"} />} />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
