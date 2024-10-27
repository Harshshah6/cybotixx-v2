"use client"
import { Button } from "@/components/ui/button";
import { useGetForums } from "@/features/forums/api/use-get-forums";
import { SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {


  const {data: forums} = useGetForums()

  const router = useRouter()


  return <div className="min-h-screen flex justify-center items-center">
    <SignedIn>
      <Button onClick={() => router.push(`/${forums?.documents[0].$id}/dashboard`)}>Dashboard</Button>
    </SignedIn>
  </div>;
};

export default HomePage;
