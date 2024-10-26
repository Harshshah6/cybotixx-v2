import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetParticipants = ({eventId}: {eventId: string}) => {
  const query = useQuery({
    queryKey: ["participants", eventId],
    queryFn: async () => {
      const response = await client.api.participants[":eventId"].$get({
        param: {
          eventId,
        },
      });

      const { data } = await response.json();

      return data;
    },
  })

  return query;
};
