import { useGetEvent } from "@/features/events/api/use-get-event";
import { useEventId } from "@/features/events/hooks/use-event-id";
import React from "react";

const EventDetails = () => {
  const eventId = useEventId();

  const { data: event } = useGetEvent({ eventId });

  console.log(event);

  return <div></div>;
};

export default EventDetails;
