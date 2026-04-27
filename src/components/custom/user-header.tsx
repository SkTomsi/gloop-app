"use client";

import { Bell, Settings } from "lucide-react";
import Link from "next/link";
import { TitleM } from "@/components/typography/font";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";

export function UserLayoutHeader() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <header className="sticky top-0 z-50 max-w-md mx-auto w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="flex h-14 w-full              max-w-md mx-auto items-center justify-between px-4">
          <div className="h-8 w-20 bg-muted animate-pulse rounded" />
        </div>
      </header>
    );
  }

  const user = session?.user;
  const userName = user?.name || user?.email?.split("@")[0] || "User";
  const initials = userName.slice(0, 2).toUpperCase();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-14 w-full max-w-md mx-auto items-center justify-between px-4">
        <Link href={"/u"} className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarImage src={user?.image ?? undefined} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <TitleM className="font-semibold">{userName}</TitleM>
        </Link>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="/u/notifications">
              <Bell className="size-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="/u/settings">
              <Settings className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
