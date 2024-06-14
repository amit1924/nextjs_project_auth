import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
const AboutPage = async () => {
  const session = await auth();
  console.log(session);

  if (!session) {
    redirect("api/auth/signin");
  }
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 right-0 mt-1">
          <Link href="/api/auth/signout">Logout</Link>
        </div>
      </div>
      <div className="text-red-800  text-center">AboutPage</div>
      <div className="text-center mt-5 text-green-900 font-bold text-2xl">
        {session?.user.name}
      </div>
    </>
  );
};

export default AboutPage;
