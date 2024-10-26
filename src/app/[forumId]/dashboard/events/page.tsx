"use client"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useGetEvent } from "@/features/events/api/use-get-event";
import { useForumId } from "@/features/forums/hooks/use-forum-id";
import Image from "next/image";

export default function Page() {

  const forumId = useForumId()

  const {data: events} = useGetEvent({forumId})

  console.log(events)

  return (
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard/overview">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Events</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">


            <div className=" aspect-square rounded-xl bg-muted/50 hover:-translate-y-1 transition-all hover:shadow-event hover:shadow-blue-500 hover:-translate-x-1 overflow-hidden">
              <div className="border border-yellow-500 aspect-video overflow-hidden">
                <Image src={`https://cloud.appwrite.io/v1/storage/buckets/671b7d480000a3616092/files/671b7d5c00042840d0da/view?project=67192758000375cf388b&project=67192758000375cf388b&mode=admin`} alt="image" width={500} height={200} className="h-full w-full object-cover bg-center hover:scale-125 transition-all duration-1000" />
              </div>  
              <div className="border-2 border-red-500 flex-grow">

              </div>
            </div>

            
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
        </div>
      </SidebarInset>
  );
}
