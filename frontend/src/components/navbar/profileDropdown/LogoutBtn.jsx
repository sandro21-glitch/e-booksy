import React from "react";
import { useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../../../api/apiAuth";
import { setCredentials } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const [logout, { isLoading }] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(setCredentials(null));
      localStorage.removeItem("userInfo");
      navigate("/login");
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  return (
    <li
      onClick={handleLogout}
      className="hover:bg-lightPink hover:text-primaryPink dark:text-white dark:hover:text-primaryPink overflow-hidden transition-colors rounded-md"
    >
      <p>{isLoading ? "Logging out..." : "Logout"}</p>
    </li>
  );
};

export default LogoutBtn;
