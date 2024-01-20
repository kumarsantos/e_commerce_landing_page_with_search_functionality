import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isValidElement } from "../../utils/helper";
import { userAuth } from "../../services";
import { useAuthContext } from "../../App";

const SigninPage = () => {
  const [error, setError] = useState("");
  const { setIsLoggedIn } = useAuthContext();
  const [authDetails, setAuthDetails] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const { isValid, message } = isValidElement(authDetails);
    if (isValid) {
      const formData = new FormData();
      // formData.append("email", authDetails.email);
      // formData.append("password", authDetails.password);
      // formData.append("grant_type", "password");

      const res = userAuth(formData);
      setIsLoggedIn(res);
      setError("");
    } else {
      setAuthDetails({ email: "", password: "" });
      setError(message);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 flex flex-col gap-y-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label
            for="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              placeholder="promilo45@test.com"
              type="email"
              autocomplete="email"
              required
              onChange={(e) =>
                setAuthDetails({
                  ...authDetails,
                  [e.target.name]: e.target.value,
                })
              }
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              for="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Test@123"
              autocomplete="current-password"
              required
              onChange={(e) =>
                setAuthDetails({
                  ...authDetails,
                  [e.target.name]: e.target.value,
                })
              }
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            onClick={handleLogin}
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="/signup"
            className="font-semibold ml-1 leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Signup here...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
