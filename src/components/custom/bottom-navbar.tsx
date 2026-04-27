"use client";

import { Activity, Home, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/u", icon: Home, label: "Home" },
  { href: "/u/activity", icon: Activity, label: "Activity" },
  { href: "/u/profile", icon: User, label: "Profile" },
  { href: "/u/settings", icon: Settings, label: "Settings" },
];

export function BottomNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 max-w-md mx-auto left-0 right-0 z-40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-16 max-w-md mx-auto items-center justify-around px-2 pb-safe">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Button
              key={item.href}
              variant="ghost"
              className={cn(
                "flex flex-col items-center justify-center h-12 px-3 py-1 gap-0.5 rounded-lg transition-colors",
                isActive
                  ? "text-primary fill-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
              asChild
            >
              <Link href={item.href}>
                <Icon
                  className={cn("size-5", isActive && "fill-current")}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span
                  className={cn(
                    "text-[10px] font-medium",
                    isActive && "text-primary",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
