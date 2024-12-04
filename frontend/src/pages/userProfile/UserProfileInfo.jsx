import React, { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useGetUserQuery } from "../../api/apiUser";
import Loader from "../../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import UserRoleCard from "./UserRoleCard";

const UserProfileInfo = () => {
  const { data: user, isLoading, error } = useGetUserQuery();
  const navigate = useNavigate();

  // Redirect to login if there's no user or an error occurs
  useEffect(() => {
    if (!isLoading && (!user || error)) {
      navigate("/login");
    }
  }, [user, isLoading, error, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Loader />
      </div>
    );
  }

  if (error) {
    console.error("Error fetching user:", error);
    return <div className="text-red-500">Error fetching user data</div>;
  }

  const { name = "Guest", email = "", isAuthor = false } = user || {};

  return (
    <div className="flex justify-center items-center gap-5 mt-10 min-w-[25rem]">
      {/* Avatar */}
      <div className="flex items-center justify-center w-20 h-20 rounded-md bg-mediumGray dark:bg-darkGray">
        <p className="text-[0.7rem] capitalize dark:text-white">
          {name.slice(0, 3)}
        </p>
      </div>

      {/* User Info */}
      <UserRoleCard email={email} isAuthor={isAuthor} name={name} />

      {/* Edit Profile Button */}
      <Link
        to="/update-profile"
        className="flex items-center justify-center w-10 h-10 rounded-md bg-lightGray dark:bg-gray-700 dark:text-white hover:bg-mediumGray transition-colors"
      >
        <FaRegEdit className="text-[1.2rem]" />
      </Link>
    </div>
  );
};

export default UserProfileInfo;
