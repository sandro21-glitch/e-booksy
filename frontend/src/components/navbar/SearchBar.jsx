import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <li className="flex-1 relative">
      <form>
        <input
          type="text"
          placeholder="Seacrh your book..."
          className="w-full border-2 rounded-xl p-2 text-[.8rem] border-lightGray hover:border-mediumGray active:border-darkGray"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 translate-y-[-50%] bg-none"
        >
          <FaSearch />
        </button>
      </form>
    </li>
  );
};

export default SearchBar;
