import { DATABASE_ID, EVENTS_ID, memberClient } from "@/lib/appwrite";
import { Hono } from "hono";
import { Databases, Query } from "node-appwrite";

const app = new Hono().get("/:forumId", async (c) => {
  const { forumId } = c.req.param();

  const databases = new Databases(memberClient);

  const event = await databases.listDocuments(DATABASE_ID, EVENTS_ID, [
    Query.equal("forumId", forumId),
  ]);

  if (!event) {
    return c.json({
      data: {
        documents: [],
        total: 0,
      },
    });
  }

  return c.json({
    data: event,
  });
});

export default app;
