"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "./action/loginAction";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userField, setUserField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    let hasError = false;

    // Validate username
    if (!username) {
      setUserField("Please enter your username");
      hasError = true;
    } else {
      setUserField("");
    }

    // Validate password
    if (!password) {
      setPasswordField("Please enter your password");
      hasError = true;
    } else {
      setPasswordField("");
    }

    // If there's an error, do not proceed
    if (hasError) {
      return;
    }

    // Submit the form data
    const res = await loginAction({ username, password });
    if ((await res.success) === true) {
      console.log("Login successful");
    }
    if (res.error) {
      setErrorMessage(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="bg-blue-200 border-4 border-black-200 rounded-lg p-8 mx-auto my-20 text-center max-w-md">
      <form
        className="flex flex-col items-center justify-center space-y-4"
        onSubmit={handleSubmit}
      >
        {errorMessage && (
          <p className="text-red-800 bg-pink-200 border-2 rounded-3xl p-2">
            {errorMessage}
          </p>
        )}
        <div className="">
          <label
            htmlFor="username"
            className="block text-center font-semibold mb-2"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            value={username}
            className="w-full border border-slate-300 rounded-lg py-3 px-4 outline-none bg-white focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="text-red-800">{userField}</p>
        </div>
        <div className="">
          <label
            htmlFor="password"
            className="block text-center font-semibold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            className="w-full border border-slate-300 rounded-lg py-3 px-4 outline-none bg-white focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-800">{passwordField}</p>
        </div>
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
