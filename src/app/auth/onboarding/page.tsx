import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import OnboardingForm from "./_components/onboarding-form";

const OnboardingPage = async () => {
  const { userId } = await auth();

  const user = await currentUser();

  if (!user || !userId) {
    return redirect("/auth/sign-up");
  } 

  return (
    <div className="border px-4 w-full md:w-[400px] py-4 rounded-lg">
      <div className=" flex flex-col text-start mb-4">
        <p className="text-3xl font-semibold">Onboarding</p>
        <p className="text-gray-400 text-sm">Fill in your details</p>
      </div>
      <Separator className="mb-4" />
      <OnboardingForm
        name={user.fullName}
        userId={user.id}
        image={user.imageUrl}
      />
    </div>
  );
};

export default OnboardingPage;
