import { BottomNavbar } from "@/components/custom/bottom-navbar";
import { UserLayoutHeader } from "@/components/custom/user-header";
import { OnboardingPrompt } from "@/features/onboarding/components/onboarding-prompt";

export default function ConsumerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <UserLayoutHeader /> */}
      <div className="pb-16">{children}</div>
      <OnboardingPrompt />
      {/* <BottomNavbar /> */}
    </div>
  );
}
