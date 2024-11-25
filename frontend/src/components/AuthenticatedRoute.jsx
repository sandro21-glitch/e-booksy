import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthenticatedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); 
    }
  }, [user, navigate]);

  if (!user) {
    return null; 
  }

  return children; 
};

export default AuthenticatedRoute;
