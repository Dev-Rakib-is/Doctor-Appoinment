// src/layouts/DashboardLayout.jsx

import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4 hidden md:block">
          <h2 className="text-lg font-bold mb-6">Dashboard</h2>
          <ul className="space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded text-base font-normal">
              <Link to={"/"} className="block ">Home</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded text-base font-normal">
              <Link to={"/doctor"} className="block ">Doctors</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded text-base font-normal">
              <Link to={"/register"} className="block ">Registration</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded text-base font-normal">
              <Link to={"/login"} className="block ">Login</Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <Outlet /> {/* React Router Outlet */}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
