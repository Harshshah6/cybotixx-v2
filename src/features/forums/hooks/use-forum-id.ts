import { useParams } from "next/navigation";

export const useForumId = () => {
  const params = useParams();

  return params.forumId as string;
};
