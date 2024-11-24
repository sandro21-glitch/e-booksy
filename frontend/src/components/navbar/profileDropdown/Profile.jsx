import React from "react";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";

const Profile = () => {
  const {
    userInfo: { name, email },
  } = useSelector((store) => store.auth)

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div className="flex items-center gap-1 cursor-pointer" tabIndex="0">
        <div className="rounded-full w-[3rem] h-[3rem] p-[2px] border-2 border-lightGray">
          <div className="bg-lightGray w-full h-full rounded-full flex items-center justify-center">
            <span className="text-black text-[.8rem]">{name.slice(0, 3)}</span>
          </div>
        </div>
        <h6 className="text-[.9rem] capitalize font-semibold">{name}</h6>
      </div>
      <ul
        tabindex="0"
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <p className="font-semibold">
            Signed in as <br /> {email}
          </p>
        </li>
        <li>
          <p>My Library</p>
        </li>
        <li>
          <p>My Orders</p>
        </li>
        <hr />
        <li>
          <p>Create New Book</p>
        </li>
        <hr />
        <li>
          <p>Profile</p>
        </li>
        <LogoutBtn />
      </ul>
    </div>
  );
};

export default Profile;
