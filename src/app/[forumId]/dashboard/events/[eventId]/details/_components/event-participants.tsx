import React from 'react'
import { DataTable } from './(winners)/data-table'
import { columns } from './(winners)/columns'
import { useEventId } from '@/features/events/hooks/use-event-id'
import { useGetParticipants } from '@/features/participants/api/use-get-participants'


const EventParticipants = ({eventId}: {eventId: string}) => {

  const {data: participants} = useGetParticipants({eventId})

  

  return (
    <div className='bg-muted/50 rounded-lg'>

      <DataTable columns={columns} data={participants?.documents} />
    </div>
  )
}

export default EventParticipants