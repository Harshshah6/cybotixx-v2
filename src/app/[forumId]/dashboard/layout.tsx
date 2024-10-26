import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useGetForums } from "@/features/forums/api/use-get-forums";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="min-h-screen">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        {children}
      </SidebarProvider>
    </main>
  );
}
