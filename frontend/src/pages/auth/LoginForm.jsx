import React, { useState } from "react";
import InputIcon from "../../components/InputIcon";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../api/apiAuth";
import { setCredentials } from "../../features/auth/authSlice";
import MiniLoader from "../../components/MiniLoader";
const LoginForm = () => {
  const [email, setEmail] = useState("sandro11@mail.ru");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await loginUser({ email, password }).unwrap();
      setError("");
      dispatch(setCredentials({ ...res.user }));
      navigate("/");
    } catch (err) {
      setError(err.data);
      console.error(err.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:border-darkGray ">
        <InputIcon type="email" />
        <input
          type="text"
          className="grow dark:text-white"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label
        htmlFor="password"
        className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:border-darkGray"
      >
        <InputIcon type="password" />
        <input
          type="password"
          className="grow dark:text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="btn transition-colors dark:bg-slate-900 dark:border-darkGray dark:text-white"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span>Logging in...</span>
            <MiniLoader />
          </>
        ) : (
          "Login"
        )}
      </button>
      {error && (
        <p className="text-red-500 text-center text-[.9rem]">{error}</p>
      )}
      <Link to="/register" className="text-[.9rem] text-center link dark:text-white">
        don't have an account
      </Link>
    </form>
  );
};

export default LoginForm;
