import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProfilePage from "./pages/userProfile/ProfilePage";
import { useEffect } from "react";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnAuthenticatedRoute from "./components/UnauthenticatedRoute";
import UpdateUserProfile from "./pages/updateUserProfile/UpdateUserProfile";
import UpdateAuthorBio from "./pages/updateAuthorBio/UpdateAuthorBio";
import { useJwt } from "react-jwt";
import { useLogoutUserMutation } from "./api/apiAuth";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);
  
  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;

    // Apply theme based on state
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
    <Router>
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
          path="/update-profile"
          element={
            <AuthenticatedRoute>
              <UpdateUserProfile />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/update-author"
          element={
            <AuthenticatedRoute>
              <UpdateAuthorBio />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <UnAuthenticatedRoute>
              <Login />
            </UnAuthenticatedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <UnAuthenticatedRoute>
              <Register />
            </UnAuthenticatedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
