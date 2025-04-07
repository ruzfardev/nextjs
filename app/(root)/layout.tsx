import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="sticky top-0 z-50 w-full bg-gray-800 shadow-md">
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
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600"
              >
                Dashboard
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600"
              >
                About
              </Link>
              <Link
                href="/books"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600"
              >
                Books
              </Link>
            </div>
          </div>
        </nav>
      </header>{" "}
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
