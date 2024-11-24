import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <li className="flex-1 relative">
      <form>
        <input
          type="text"
          placeholder="Seacrh your book..."
          className="w-full border-2 rounded-xl p-2 text-[.8rem] border-lightGray hover:border-mediumGray active:border-darkGray 
           outline-none dark:bg-slate-900 dark:border-darkGray dark:text-white"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 translate-y-[-50%] bg-none dark:text-white"
        >
          <FaSearch />
        </button>
      </form>
    </li>
  );
};

export default SearchBar;
