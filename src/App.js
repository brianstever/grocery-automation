import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, Route, Link } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import Dashboard from './Dashboard';
import Navbar from './NavBar';
import HeroSection from './HeroSection';
import './index.css';

const routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HeroSection />
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
        <Link to="reset">Reset</Link>
        <Link to="dashboard">Dashboard</Link>
      </>
    )
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "reset",
    element: <Reset />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
];

function App() {
  return (
    <RouterProvider routes={routes}>
      <Route path="*" element={<div>Not Found</div>} />
    </RouterProvider>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
