import React from "react";
import { SlBookOpen } from "react-icons/sl";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="border-2 border-mediumGray rounded-md p-5 w-[24rem] flex justify-center items-center flex-col">
        <div className="my-10 ">
          <SlBookOpen size={90} className="dark:text-white" />
        </div>
        <h1 className="text-[1.1rem] dark:text-white font-semibold leading-[1.5rem] text-center mb-5 normal-case">
          Books are the keys to countless doors. Sign up and unlock your
          potential.
        </h1>
        <LoginForm /> 
      </div>
    </div>
  );
};

export default Login;
