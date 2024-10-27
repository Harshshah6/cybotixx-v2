"use client";
import { useGetEvent } from "@/features/events/api/use-get-event";
import { useEventId } from "@/features/events/hooks/use-event-id";
import React from "react";

const EventDetails = () => {
  const eventId = useEventId();

  const { data: event } = useGetEvent({ eventId });

  console.log(event);

  return (
    <div className="border w-full h-full flex flex-col border-green-500">
      <div className="border border-yellow-500 h-20">
        {/* <p>{event?.eventName}</p> */}
      </div>
      <div className="border flex-grow overflow-y-auto text-2xl border-red-500"></div>
    </div>
  );
};

export default EventDetails;
