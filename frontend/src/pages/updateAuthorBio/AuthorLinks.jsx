import React, { useState } from "react";

const AuthorLinks = ({ link, handleLinkChange, index }) => {
  return (
    <li className="flex items-center mb-2">
      <input
        type="text"
        value={link}
        onChange={(e) => handleLinkChange(index, e.target.value)}
        placeholder="https://www.example.com/@something"
        className="flex-grow border p-2 mr-2 outline-none text-[.8rem] bg-[#F6F6F6] border-none rounded-md dark:bg-[#27272A] dark:text-white"
      />
    </li>
  );
};

export default AuthorLinks;
