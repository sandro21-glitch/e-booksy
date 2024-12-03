import React from "react";
import { FaPlus } from "react-icons/fa";

const AddNewLinkBtn = ({ handleAddNewLink }) => {
  return (
    <div className="w-full flex justify-end">
      <button
        type="button"
        onClick={handleAddNewLink}
        className="  mt-4 w-8 h-8 flex items-center justify-center rounded-md bg-mediumGray hover:bg-lightGray   dark:bg-[#27272A] text-black dark:text-white"
      >
        <FaPlus className="text-[0.6rem]" />
      </button>
    </div>
  );
};

export default AddNewLinkBtn;
