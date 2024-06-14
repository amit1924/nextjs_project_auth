import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

export const { auth, signIn, handlers } = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const users = [
          {
            id: 12,
            name: "amit",
            password: "test1234",
            role: "user",
          },
          {
            id: 13,
            name: "arsh",
            password: "test5678",
            role: "admin",
          },
        ];

        const user = users.find((u) => u.name === credentials.username);

        if (user && credentials.password === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,

  // Without Cutom Login we get Nextjs Login page
  // http://localhost:3000/api/auth/signin

  // For Cutom Login Page
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
});
