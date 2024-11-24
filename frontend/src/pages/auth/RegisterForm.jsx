import React, { useState } from "react";
import InputIcon from "../../components/InputIcon";
import { useRegisterUserMutation } from "../../api/apiAuth";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("mern123@gmail.com");
  const [userName, setUserName] = useState("MERN");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await registerUser({
        email,
        name: userName,
        password,
      }).unwrap();
      dispatch(
        setCredentials({
          email: res.user.email,
          name: res.user.name,
          userId: res.user.userId,
        })
      );
      navigate('/')
      setError("");
    } catch (error) {
      setError(error.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 mb-5">
        <label className="input input-bordered flex items-center gap-2">
          <InputIcon type="email" />
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <InputIcon type="username" />
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <InputIcon type="password" />
          <input
            type="password"
            className="grow"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        <button type="submit" className="btn transition-colors">
          {isLoading ? "Registering..." : "Register"}
        </button>
        {error && (
          <p className="text-red-500 text-center text-[.9rem]">{error}</p>
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
