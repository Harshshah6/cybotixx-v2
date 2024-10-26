import "server-only";
import { Account, Client } from "node-appwrite";

export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
export const FORUMS_ID = process.env.NEXT_PUBLIC_APPWRITE_FORUMS_ID!
export const EVENTS_ID = process.env.NEXT_PUBLIC_APPWRITE_EVENTS_ID!
export const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT!;
export const ENDPOINT_ID = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;

export const adminclient = new Client()
  .setEndpoint(ENDPOINT_ID)
  .setProject(PROJECT_ID)
  .setKey(process.env.NEXT_APPWRITE_SUPER_ADMIN_KEY!);

export const memberClient = new Client()
  .setEndpoint(ENDPOINT_ID)
  .setProject(PROJECT_ID)
  .setKey(process.env.NEXT_APPWRITE_MEMBER_KEY!);
