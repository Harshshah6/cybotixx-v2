"use client";
import { Button } from "@/components/ui/button";
import { HandIcon } from "lucide-react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventOverView from "./event-overview";
import { ScrollArea } from "@/components/ui/scroll-area";
import EventRules from "./event-rules";
import EventParticipants from "./event-participants";
import EventWinners from "./event-winners";
import { useGetEvent } from "@/features/events/api/use-get-event";
import { useEventId } from "@/features/events/hooks/use-event-id";


const EventDetails = () => {




  const eventDetailTabs = [
    {
      name: "Overview",
    },
    {
      name: "Rules",
    },
    {
      name: "Participants",
    },
    {
      name: "Winners",
    },
  ];

  const eventId = useEventId()

  const {data: event} = useGetEvent({eventId})

  console.log(event)





  return (
    <div className="rounded-lg h-full flex flex-col p-1">
      <Tabs defaultValue="Overview" className="rounded-none h-full overflow-hidden">
        <TabsList className="min-w-full flex bg-transparent p-0 gap-3 rounded-none border-b">
          {eventDetailTabs.map((tab) => (
            <TabsTrigger key={tab.name} className="" value={tab.name}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent className="h-full" value="Overview">
          <EventOverView overview={event?.eventOverview}   />
        </TabsContent>
        <TabsContent className="h-full" value="Rules">
          <EventRules rules={event?.eventRules} />
        </TabsContent>
        <TabsContent value="Participants">
          <EventParticipants eventId={eventId} />
        </TabsContent>
        <TabsContent value="Winners">
          <EventWinners eventId={eventId} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventDetails;
