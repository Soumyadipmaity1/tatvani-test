"use client"

import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clear tokens, etc.)
    // Redirect to the login page
    router.push('/login');
  };

  return (
    <header className="bg-gray-950 text-white p-4 fixed top-0 left-64 right-0 z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
