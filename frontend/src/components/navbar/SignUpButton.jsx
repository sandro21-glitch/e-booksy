import React from "react";
import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
    <li>
      <Link to="/login">
        <button className="p-2 text-[.8rem] border-2 rounded-lg border-mediumGray hover:border-darkGray dark:border-gray-700 dark:text-white transition-colors">
          Sign Up / In
        </button>
      </Link>
    </li>
  );
};

export default SignUpButton;
