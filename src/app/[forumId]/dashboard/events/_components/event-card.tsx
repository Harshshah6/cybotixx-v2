"use client";
import { useGetParticipants } from "@/features/participants/api/use-get-participants";
import Image from "next/image";
import React from "react";

interface EventCardProps {
  eventName: string;
  imageUrl: string;
  date: string;
  eventId: string;
}

const EventCard = ({ eventName, imageUrl, date, eventId }: EventCardProps) => {
  const { data: participants } = useGetParticipants({ eventId });

  console.log(participants);

  return (
    <div className=" aspect-square relative group cursor-pointer rounded-xl bg-muted/50 hover:-translate-y-1 transition-all hover:shadow-event hover:shadow-blue-500 hover:-translate-x-1 overflow-hidden">
      <span>
        <div className="h-3 bg-blue-600 w-3 z-20 animate-pulse rounded-full absolute right-2 top-2" />
      </span>
      <div className="border aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt="image"
          width={500}
          height={200}
          className="h-full w-full object-cover bg-center group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      <div className="p-3 flex-grow">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold tracking-tight">{eventName}</p>
          <p className="text-sm truncate border px-1 h-6 flex justify-center items-center bg-white/20 rounded-md">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
