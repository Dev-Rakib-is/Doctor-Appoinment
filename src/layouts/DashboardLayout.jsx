// src/layouts/DashboardLayout.jsx

import { Outlet } from "react-router-dom";
import Header from "./Header";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-lg font-bold mb-6">Dashboard</h2>
          <ul className="space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded">
              <a href="/patient/dashboard">Home</a>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <a href="/patient/appointments">Appointments</a>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <a href="/doctors">Doctors</a>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <a href="/logout">Logout</a>
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
