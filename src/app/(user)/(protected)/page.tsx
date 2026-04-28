import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import logger from "@/lib/logger";
import { caller } from "@/trpc/server";

export default async function Home() {
  const user = await caller.user.getUser();
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    logger.warn("No session found, redirecting to login");
    redirect("/login");
  }

  return (
    <div className="prose font-mono flex flex-col gap-4">
      {JSON.stringify(user, null, 1)}
    </div>
  );
}
