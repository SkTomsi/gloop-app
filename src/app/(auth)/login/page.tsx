import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LoginForm } from "@/features/auth/components/login-form";
import { auth } from "@/lib/auth";

export default async function Login() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user.id) {
    redirect("/");
  }

  return <LoginForm />;
}
