// import React from "react";
import { useLocation, useNavigate } from "react-router";
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function PathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-bs shadow-sm sticky z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${
                PathMathRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={` py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent cursor-pointer ${
                PathMathRoute("/Offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/Offers")}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent cursor-pointer ${
                PathMathRoute("/Sign-in") && " border-b-red-400 text-black"
              }`}
              onClick={() => navigate("/Sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
