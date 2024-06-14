import React from "react";
import Link from "next/link";

const NavbarMiddleware = () => {
  return (
    <div className="m-2 p-5 border rounded-lg bg-green-100 text-blue-300 font-bold">
      <div className="flex  items-center justify-between ">
        <Link href="/dashboard" className="hover:text-yellow-400">
          Dashboard
        </Link>
        <Link href="/profile" className="hover:text-yellow-400">
          Profile
        </Link>
        <Link href="/details" className="hover:text-yellow-400">
          Details
        </Link>
      </div>
    </div>
  );
};

export default NavbarMiddleware;
