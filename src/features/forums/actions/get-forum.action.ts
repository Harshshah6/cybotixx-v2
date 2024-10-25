import { client, DATABASE_ID, FORUMS_ID } from "@/features/config";
import { Databases } from "node-appwrite";

export const getForum = ({ forumId }: { forumId: string }) => {
  try {
    const databases = new Databases(client);

    const forum = databases.getDocument(DATABASE_ID, FORUMS_ID, forumId);

    if (!forum) {
      return [];
    }

    return forum;
  } catch {
    console.log("Some Error Occured")
  }
};
