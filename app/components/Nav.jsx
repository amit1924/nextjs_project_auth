import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="m-2 p-5 border rounded-lg bg-green-100 text-blue-300 font-bold">
      <div className="flex  items-center justify-between ">
        <Link href="/" className="hover:text-red-400">
          Home
        </Link>
        <Link href="/about" className="hover:text-orange-600">
          About
        </Link>
        <Link href="/settings" className="hover:text-yellow-400">
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Nav;
