import React, { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useGetUserQuery } from "../../api/apiUser";
import Loader from "../../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import UserRoleCard from "./UserRoleCard";

const UserProfileInfo = () => {
  const { data: user, isLoading, error } = useGetUserQuery();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if there's no user or an error occurs
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
    return <div>Error fetching user data</div>;
  }

  // Make sure the user object is defined before destructuring
  const { name = "Guest", email = "", isAuthor = false } = user || {};

  return (
    <div className="flex justify-center gap-5 items-center min-w-[25rem] mt-10">
      <div className="w-20 h-20 bg-mediumGray dark:bg-darkGray rounded-md flex items-center justify-center">
        <p className="text-[.7rem] capitalize dark:text-white">
          {name.slice(0, 3)}
        </p>
      </div>
      <UserRoleCard email={email} isAuthor={isAuthor} name={name} />
      <Link
        to={"/update-profile"}
        className="w-10 h-10 cursor-pointer bg-lightGray dark:bg-gray-700 dark:text-white hover:bg-mediumGray transition-colors flex items-center justify-center rounded-md"
      >
        <FaRegEdit className="text-[1.2rem]" />
      </Link>
    </div>
  );
};

export default UserProfileInfo;
