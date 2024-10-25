import { client, DATABASE_ID, FORUMS_ID } from "@/features/config";
import { Hono } from "hono";
import { Databases } from "node-appwrite";

const app = new Hono()
  .get("/", async (c) => {
    const databases = new Databases(client);

    const forums = await databases.listDocuments(DATABASE_ID, FORUMS_ID);

    return c.json({ data: forums });
  })
  .get("/:forumId", async (c) => {
    const databases = new Databases(client);

    const { forumId } = c.req.param();

    const forum = await databases.getDocument(DATABASE_ID, FORUMS_ID, forumId);

    if (!forum) {
      return c.json({
        data: null,
      });
    }

    return c.json({
      data: forum,
    });
  });

export default app;
