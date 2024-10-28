"use client"
import { Button } from "@/components/ui/button";
import { useGetForums } from "@/features/forums/api/use-get-forums";
import { SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import Hero from "./_components/hero";
import { Separator } from "./_components/ui/seperator";
import Team from "./_components/team";
import Gallery from "./_components/gallery";
import Footer from "./_components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Modals from "./_components/modals";
import Navbar from "./_components/navbar";
import { BackgroundBeams } from "./_components/ui/background-beans";
import Image from "next/image";

const HomePage = () => {


  const { data: forums } = useGetForums()

  const router = useRouter()


  return <div className="">
    <ThemeProvider attribute="class" defaultTheme="dark">
      {/* <Navbar /> */}
      <div className="pl-10 pt-2 flex justify-start items-center">
        <Image
          src={`/cybotix-dark.png`}
          alt="logo"
          width={200}
          height={200}
          className="size-14"
        />
        <p className="text-2xl font-semibold">CYBOTIXX</p>
      </div>
      <Hero />
      <Modals />
      <Toaster />
      <BackgroundBeams className="-z-40 opacity-80" />
    </ThemeProvider>
    {/* <Separator className="w-1/2 mx-auto" />
    <Team />
    <Separator className="w-1/2 mx-auto mt-16" />
    <Gallery /> */}
    {/* <Separator className="w-1/2 mx-auto" /> */}
    {/* <About /> */}
    {/* <Footer /> */}
  </div>;
};

export default HomePage;

{/* <Button onClick={() => router.push(`/${forums?.documents[0].$id}/dashboard`)}>Dashboard</Button> */ }