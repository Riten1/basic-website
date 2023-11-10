import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext";
import { useState } from "react";

const LayoutRoots = () => {
  const [user, setUser] = useState({});
  return (
    <UserContextProvider value={{ user, setUser }}>
      <header>
        <div className="w-full  flex items-center justify-between mx-auto p-10 ">
          <button>Logo</button>
          <ul className="flex gap-5">
            <li>
              <NavLink
                className={({ isActive }) => {
                  isActive ? "text-red-700" : `text-black`;
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  isActive ? "text-red-700" : `text-black`;
                }}
                to="product"
              >
                Products
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                className={({ isActive }) => {
                  isActive ? "text-red-700" : `text-black`;
                }}
                to="aboutus"
              >
                About Us
              </NavLink>
            </li>{" "}
            <li>
              {" "}
              <NavLink to="github">GitHub</NavLink>
            </li>
          </ul>

          <NavLink to="login">Login</NavLink>
        </div>
      </header>
      <div className="h-screen">
        <Outlet />
      </div>
    </UserContextProvider>
  );
};

export default LayoutRoots;
