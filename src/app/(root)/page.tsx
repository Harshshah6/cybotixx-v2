"use client"
import { Button } from "@/components/ui/button";
import { SignedIn, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {

  const router = useRouter()

  const {userId} = useAuth()

  return <div className="min-h-screen flex justify-center items-center">
    <SignedIn>
      <Button onClick={() => router.push(`/dashboard`)}>Dashboard</Button>
    </SignedIn>
  </div>;
};

export default HomePage;
