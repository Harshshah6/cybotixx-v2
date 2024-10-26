import { Hono } from "hono";

import { handle } from "hono/vercel";
import forums from "@/features/forums/server/route";
import events from "@/features/events/server/route";
import participants from "@/features/participants/server/route";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .route("/forums", forums)
  .route("/events", events)
  .route("/participants", participants);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);

export type AppType = typeof routes;
