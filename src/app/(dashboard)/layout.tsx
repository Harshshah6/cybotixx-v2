import { getUser } from "@/app/auth/onboarding/_actions/actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/auth/sign-in");
  }

  const user = await getUser({ userId });

  if (!user) {
    redirect("/auth/onboarding");
  }

  return <main className="min-h-screen">{children}</main>;
}
