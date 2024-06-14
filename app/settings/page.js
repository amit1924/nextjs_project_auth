import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  console.log(session);

  if (!session) {
    redirect("api/auth/signin");
  }
  return (
    <div className="flex justify-center  m-48 ">
      {session?.user.role === "admin" ? (
        <p className="bg-red-100 border rounded-lg p-4">Authorized User</p>
      ) : (
        <p className="">
          You are logged in but not authorized to view this page
        </p>
      )}
    </div>
  );
};

export default SettingsPage;
