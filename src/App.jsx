import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SigninPage from "./pages/SignInPage";
import SignupPage from "./pages/SignupPage";
import Product from "./pages/Product";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);

const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          index
          element={isLoggedIn ? <Navigate to="/home" /> : <SigninPage />}
        />
        <Route
          path="/home"
          index
          element={!isLoggedIn ? <Navigate to="/signin" /> : <HomePage />}
        />
        <Route
          path="/product/:id"
          index
          element={!isLoggedIn ? <Navigate to="/signin" /> : <Product />}
        />
        <Route
          path="/about"
          element={!isLoggedIn ? <Navigate to="/signin" /> : <AboutPage />}
        />
        <Route
          path="/signin"
          element={isLoggedIn ? <Navigate to="/home" /> : <SigninPage />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/home" /> : <SignupPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
