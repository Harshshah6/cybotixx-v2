"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import EventDetails from "./_components/event-details";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEventId } from "@/features/events/hooks/use-event-id";
import { useGetEvent } from "@/features/events/api/use-get-event";
import { Button } from "@/components/ui/button";
import { HandIcon } from "lucide-react";
import Image from "next/image";
import { useGetParticipants } from "@/features/participants/api/use-get-participants";
import { format } from "date-fns";

const EventIdPage = () => {
  const eventId = useEventId();
  const { data: participants } = useGetParticipants({ eventId });

  const { data: event, isLoading: eventLoading } = useGetEvent({
    eventId,
  });

  if (eventLoading) {
    return <p>Loading Event</p>;
  }

  if (!event) {
    return <p>Error</p>;
  }

  console.log(event);
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href={`/dashboard/`}>Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Events</BreadcrumbPage>
              </BreadcrumbItem>{" "}
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Event Details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-2">
        <div className="w-full md:justify-start items-center  md:flex p-3 md:items-center gap-4 bg-muted/50 rounded-lg px-5">
          <div className="aspect-video relative h-40 md:h-full rounded-lg bg-blue-500 overflow-hidden cursor-pointer hover:opacity-80 transition-all">
            <Image
              src={event.imageUrl}
              alt="event image"
              fill
            />
          </div>
          <div className="flex flex-col space-y-2 truncate">
            <div>
              <p className="text-3xl font-semibold">{event?.eventName}</p>
              <p className="text-sm font-medium text-muted-foreground">
                Slogan of the event
              </p>
            </div>
            <p className="text-sm font-medium w-[fit-content] bg-white/20 font-mono tracking-tighter rounded-sm text-start px-1">
              Participants +{participants?.total}
            </p>
            <p className="text-sm truncate border px-1 h-6 w-[fit-content] flex justify-center font-mono tracking-tighter items-center bg-white/20 rounded-md">
              {format(event?.eventDate, "MMMM - dd - yyyy")}
            </p>
            <p className="text-sm truncate px-1 h-6 flex justify-center items-center font-mono tracking-tighter w-[fit-content] bg-white/20 rounded-md">
              {format(event?.eventDate, "hh:mm a")}
            </p>
          </div>
        </div>
        <EventDetails about={event?.about} />
      </div>
    </SidebarInset>
  );
};

export default EventIdPage;
