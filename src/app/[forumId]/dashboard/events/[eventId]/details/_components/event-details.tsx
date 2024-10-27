"use client";
import { Button } from "@/components/ui/button";
import { HandIcon } from "lucide-react";
import React from "react";

interface Event {
  about: string;
}

const EventDetails = ({ about }: Event) => {
  return (
    <div className="border w-full h-full flex flex-col border-green-500">
      <div className="border flex justify-between px-5 items-center border-yellow-500 h-20">
        <p className="text-xl font-semibold">Rules and Regulations</p>
      </div>
      <div className="border flex-grow overflow-y-auto text-2xl border-red-500"></div>
    </div>
  );
};

export default EventDetails;
