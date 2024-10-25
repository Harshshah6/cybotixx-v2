import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetForum = ({
  param,
}: {
  param: {
    forumId: string;
  };
}) => {
  const query = useQuery({
    queryKey: ["forum"],
    queryFn: async () => {
      const response = await client.api.forums[":forumId"].$get({
        param,
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch forum`);
      }

      const { data } = await response.json();

      return data;
    },
  });
  return query;
};
