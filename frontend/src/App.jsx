
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { store } from "./store";
import ProfilePage from "./pages/userProfile/ProfilePage";

const App = () => {

  const jwtToken = localStorage.getItem("jwt");
  console.log(jwtToken);
  
  return (
    <Provider store={store}>
      <Router v7_startTransition>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
