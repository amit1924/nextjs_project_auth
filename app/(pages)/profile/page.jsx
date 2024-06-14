import Link from "next/link";
import React from "react";
import { auth } from "@/auth";

const ProfilePage = () => {
  return (
    <>
      <h1 className="text-center relative ">Profile Page</h1>{" "}
      <div className="absolute top-17 right-0">
        <Link
          href="api/auth/signout"
          className="bg-blue-500 p-4 border rounded-3xl hover:bg-red-400"
        >
          Logout
        </Link>
      </div>
    </>
  );
};

export default ProfilePage;
