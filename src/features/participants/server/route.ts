import { adminclient, DATABASE_ID, memberClient, PARTICIPANTS_ID } from "@/lib/appwrite";
import { Hono } from "hono";
import { Databases, Query } from "node-appwrite";

const app = new Hono()
  .get("/", async (c) => {
    const databases = new Databases(memberClient);
    const participants = await databases.listDocuments(
      DATABASE_ID,
      PARTICIPANTS_ID
    );

    if (participants.total === 0) {
      return c.json({
        data: {
          documents: [],
          total: 0,
        },
      });
    }

    return c.json({
      data: participants,
    });
  })
  .get("/:eventId", async (c) => {
    const { eventId } = c.req.param();
    const databases = new Databases(adminclient);
    const participants = await databases.listDocuments(
      DATABASE_ID,
      PARTICIPANTS_ID,
      [Query.equal("eventId", eventId)]
    );

    if (!participants) {
      return c.json({
        data: {
          documents: [],
          total: 0,
        },
      });
    }

    return c.json({
      data: participants,
    });
  });

export default app;
