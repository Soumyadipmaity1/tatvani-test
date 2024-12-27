'use client'; // Mark this file as a client component

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Sidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-64 bg-gray-900 text-white px-6 py-4 fixed top-0 left-0 h-screen">
      <div className="flex items-center justify-center">
        <img
          src="/tatvani_logo.jpg"
          alt="logo"
          className="w-12 mr-3 rounded-full"
          border="0"
        />
        <span className="sm:text-4xl text-2xl font-bold text-[#d3be1c] dark:text-white lg:pb-2 pb-1 pt-0.5">
          Tatvani
        </span>
      </div>
      <ul className="pt-4">
        <li 
          className={`p-4 my-4 rounded-lg text-xl ${
            pathname === '/dashboard' ? 'bg-gray-700' : 'hover:bg-gray-800'
          }`}
        >
          <Link href="/admin/dashboard">Dashboard</Link>
        </li>
        <li
          className={`p-4 my-4 rounded-lg text-xl ${
            pathname === '/admin/add-post' ? 'bg-gray-700' : 'hover:bg-gray-800'
          }`}
        >
          <Link href="/admin/add-post">Add Post</Link>
        </li>
        <li
          className={`p-4 my-4 rounded-lg text-xl ${
            pathname === '/admin/add-advertise' ? 'bg-gray-700' : 'hover:bg-gray-800'
          }`}
        >
          <Link href="/admin/add-advertise">Add Advertise</Link>
        </li>
        <li
          className={`p-4 my-4 rounded-lg text-xl ${
            pathname === '/admin/review-posts' ? 'bg-gray-700' : 'hover:bg-gray-800'
          }`}
        >
          <Link href="/admin/review-posts">Review Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;