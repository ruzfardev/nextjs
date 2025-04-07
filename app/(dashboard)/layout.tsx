import React from "react";
import Link from "next/link";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 p-4 sticky top-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              Logo
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/users"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
            >
              Users
            </Link>
            <Link
              href="/dashboard/analytics"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
            >
              Analytics
            </Link>
          </div>
        </div>
      </nav>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Layout;
