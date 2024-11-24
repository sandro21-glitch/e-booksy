import React, { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useGetUserQuery } from "../../api/apiUser";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const UserProfileInfo = () => {
  const { data: user, isLoading } = useGetUserQuery();

  const navigate = useNavigate();
  
    useEffect(() => {
      if (!user) {
        navigate("/login");
      }
    }, [user, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Loader />
      </div>
    );
  }

  const { name, email, isAuthor } = user;

  return (
    <div className="flex justify-center gap-5 items-center min-w-[25rem] mt-10">
      <div className="w-20 h-20 bg-mediumGray dark:bg-darkGray rounded-md flex items-center justify-center">
        <p className="text-[.7rem] capitalize dark:text-white">
          {name.slice(0, 3)}
        </p>
      </div>
      <div className="flex flex-col gap-[1px]">
        <p className="text-[1rem] font-bold capitalize dark:text-white">
          {name}
        </p>
        <p className="text-[.9rem] dark:text-white">{email}</p>
        <div className="flex items-center gap-5">
          <p className="text-[.9rem] capitalize dark:text-white">
            role:{" "}
            <span className="uppercase italic">
              {isAuthor ? "author" : "user"}
            </span>
          </p>
          <button className="text-[.7rem] underline dark:text-white">
            {isAuthor ? "Update Author Bio" : "Become an Author"}
          </button>
        </div>
      </div>
      <div className="w-10 h-10 cursor-pointer bg-lightGray dark:bg-gray-700 dark:text-white hover:bg-mediumGray transition-colors flex items-center justify-center rounded-md">
        <FaRegEdit className="text-[1.2rem]" />
      </div>
    </div>
  );
};

export default UserProfileInfo;
