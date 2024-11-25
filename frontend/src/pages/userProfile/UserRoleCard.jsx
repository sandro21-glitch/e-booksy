import React, { useState } from "react";
import { useUpdateUserMutation } from "../../api/apiUser";
import MiniLoader from "../../components/MiniLoader";
const UserRoleCard = ({ email, isAuthor, name }) => {
  const [isAuthorUi, setIsAuthorUi] = useState(isAuthor);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const updateUserRole = async () => {
    setIsAuthorUi(false);
    try {
      await updateUser({ isAuthor: true });
      setIsAuthorUi(true);
    } catch (error) {
      setIsAuthorUi(isAuthor);
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-[1px]">
      <p className="text-[1rem] font-bold capitalize dark:text-white">{name}</p>
      <p className="text-[.9rem] dark:text-white">{email}</p>
      <div className="flex items-center gap-5">
        <p className="text-[.9rem] capitalize dark:text-white">
          role:{" "}
          <span className="uppercase italic">
            {isAuthorUi ? "author" : "user"}
          </span>
        </p>
        <button
          type="button"
          className="text-[.7rem] underline dark:text-white"
          onClick={isAuthorUi ? undefined : updateUserRole}
        >
          {isLoading ? (
            <>
              <span className="text-[.7rem] dark:text-white">Updating...</span>
              <MiniLoader />
            </>
          ) : isAuthorUi ? (
            "Update Author Bio"
          ) : (
            "Become an Author"
          )}
        </button>
      </div>
    </div>
  );
};

export default UserRoleCard;
