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

const EventIdPage = () => {
  const eventId = useEventId();

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
      <div className="w-full flex justify-between items-center px-5">
        <p className="lg:text-3xl md:text-2xl sm:text-xl text-md font-semibold">
          {event.eventName}
        </p>
        <Button className="text-md bg-blue-500 dark:text-white font-medium hover:bg-blue-500/80">
          <HandIcon className="size-5" />
          <p>Participate now</p>
        </Button>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-2">
        <ScrollArea className="min-h-[100vh] overflow-hidden flex-1 flex rounded-xl bg-muted/50 md:min-h-min">
          <EventDetails about={event?.about} />
        </ScrollArea>
      </div>
    </SidebarInset>
  );
};

export default EventIdPage;
