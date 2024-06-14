"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

// After submitting the login form, the data will go to this server action
// The server action will then check with authjs to validate/authenticate the user
export async function loginAction(formData) {
  try {
    await signIn("credentials", {
      username: formData.username,
      password: formData.password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };

        default:
          return { error: "Invalid credentials ❌" };
      }
    }

    throw error;
  }
}
