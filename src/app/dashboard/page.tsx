"use client";
import { useGetForums } from "@/features/forums/api/use-get-forums";
import { redirect } from "next/navigation";

const DashboardPage = () => {
  const { data: forums } = useGetForums();

  const firstForumId = forums?.documents[0].$id;

  if (firstForumId) {
    return redirect(`/dashboard/${firstForumId}/overview`);
  }
};

export default DashboardPage;
