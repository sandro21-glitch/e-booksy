import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProfilePage from "./pages/userProfile/ProfilePage";
import { useEffect } from "react";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;

    if (theme === "dark") {
      root.classList.add("dark");
      body.classList.add("bg-gray-900");
      body.classList.remove("bg-white");
    } else {
      root.classList.remove("dark");
      body.classList.add("bg-white"); 
      body.classList.remove("bg-gray-900"); 
    }
  }, [theme]);

  return (
    <Router v7_startTransition>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
