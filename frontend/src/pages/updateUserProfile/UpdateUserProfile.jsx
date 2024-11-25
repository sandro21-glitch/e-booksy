import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useUpdateUserMutation } from "../../api/apiUser";
import MiniLoader from "../../components/MiniLoader";

const UpdateUserProfile = () => {
  const user = useSelector((store) => store.auth.userInfo);
  const [newName, setNewName] = useState("");

  const dispatch = useDispatch();
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const updateUserName = async (e) => {
    e.preventDefault();
    try {
      const res = await updateUser({ name: newName }).unwrap();
      dispatch(setCredentials({ ...user, name: res.name }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="border-2 border-mediumGray rounded-md p-5 w-[24rem] flex justify-center items-center flex-col">
        <p className="text-[1.1rem] dark:text-white font-semibold leading-[1.5rem] text-center mb-5 normal-case">
          Update User
        </p>
        <div className="border-2 border-mediumGray rounded-full w-[3rem] h-[3rem] p-[2px]">
          <FaUserCircle className="w-full h-full" />
        </div>
        <form className="w-full" onSubmit={updateUserName}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text dark:text-white text-[.8rem]">
                Full Name
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs text-[.8rem]"
              value={newName === "" ? user.name : newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </label>
          <button type="submit" className="btn w-full mt-5">
            {isLoading ? (
              <>
                <span>Updating...</span>
                <MiniLoader />
              </>
            ) : (
              "Update Profile"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
