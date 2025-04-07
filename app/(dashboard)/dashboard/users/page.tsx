import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <Link href="/dashboard/users/1">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-4"></div>
            <h3 className="text-xl font-semibold text-center mb-2">John Doe</h3>
            <p className="text-gray-600 text-center">Software Engineer</p>
          </div>
        </Link>
        <Link href="/dashboard/users/2">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-4"></div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Jane Smith
            </h3>
            <p className="text-gray-600 text-center">Product Manager</p>
          </div>
        </Link>
        <Link href="/dashboard/users/3">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-4"></div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Mike Johnson
            </h3>
            <p className="text-gray-600 text-center">UI Designer</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
