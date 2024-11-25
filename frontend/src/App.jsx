import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProfilePage from "./pages/userProfile/ProfilePage";
import { useEffect } from "react";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

const App = () => {
  const user = useSelector((state) => state.auth.userInfo);
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
        <Route
          path="/profile"
          element={
            <AuthenticatedRoute>
              <ProfilePage />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AuthenticatedRoute>
              <Login />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <AuthenticatedRoute>
              <Register />
            </AuthenticatedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
