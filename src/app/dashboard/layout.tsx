import { getUser } from "@/app/auth/onboarding/_actions/actions";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
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


  return (
    <main className="min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </main>
  );
}
