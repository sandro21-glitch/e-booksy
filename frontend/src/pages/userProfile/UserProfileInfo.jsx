import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { useGetUserQuery } from "../../api/apiUser";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const UserProfileInfo = () => {
  const { data: user, isLoading } = useGetUserQuery();

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Loader />
      </div>
    );
  }

  if (!user) {
    return navigate("/login");
  }

  const { name, email, isAuthor } = user;

  return (
    <div className="flex justify-center gap-5 items-center min-w-[25rem] mt-10">
      <div className="w-20 h-20 bg-mediumGray rounded-md flex items-center justify-center">
        <p className="text-[.9rem] capitalize">{name.slice(0, 3)}</p>
      </div>
      <div className="flex flex-col gap-[1px]">
        <p className="text-[1rem] font-bold capitalize">{name}</p>
        <p className="text-[.9rem]">{email}</p>
        <div className="flex items-center gap-5">
          <p className="text-[.9rem] capitalize">
            role:{" "}
            <span className="uppercase italic">
              {isAuthor ? "author" : "user"}
            </span>
          </p>
          <button className="text-[.7rem] underline">
            {isAuthor ? "Update Author Bio" : "Become an Author"}
          </button>
        </div>
      </div>
      <div className="w-10 h-10 cursor-pointer bg-lightGray hover:bg-mediumGray transition-colors flex items-center justify-center rounded-md">
        <FaRegEdit className="text-[1.2rem]" />
      </div>
    </div>
  );
};

export default UserProfileInfo;
