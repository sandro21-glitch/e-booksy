import React from "react";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";
import { Link } from "react-router-dom";

const Profile = () => {
  const {
    userInfo: { name, email },
  } = useSelector((store) => store.auth);

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div className="flex items-center gap-1 cursor-pointer" tabIndex="0">
        <div className="rounded-full w-[3rem] h-[3rem] p-[2px] border-2 border-lightGray dark:border-gray-700">
          <div className="bg-lightGray dark:bg-gray-700  w-full h-full rounded-full flex items-center justify-center">
            <span className="text-black dark:text-white text-[.7rem]">{name.slice(0, 3)}</span>
          </div>
        </div>
        <h6 className="text-[.9rem] dark:text-white capitalize font-semibold">{name}</h6>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 dark:bg-shadeGray rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <p className="font-semibold dark:text-white">
            Signed in as <br /> {email}
          </p>
        </li>
        <li>
          <p className="dark:text-white">My Library</p>
        </li>
        <li>
          <p className="dark:text-white">My Orders</p>
        </li>
        <hr />
        <li>
          <p className="dark:text-white">Create New Book</p>
        </li>
        <hr />
        <li>
          <Link to={"/profile"} className="block dark:text-white">
            Profile
          </Link>
        </li>
        <LogoutBtn />
      </ul>
    </div>
  );
};

export default Profile;
