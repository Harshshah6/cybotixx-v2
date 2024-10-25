import { Client, Databases } from "node-appwrite";

export const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;
export const APPWRITE_PROJECT = process.env.NEXT_PUBLIC_APPWRITE_PROJECT!;

export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
export const USERS_ID = process.env.NEXT_PUBLIC_APPWRITE_USERS_ID!;
export const FORUMS_ID = process.env.NEXT_PUBLIC_APPWRITE_FORUMS_ID!;
export const IMAGES_ID = process.env.NEXT_PUBLIC_APPWRITE_IMAGES_ID!;

export const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT)
  .setKey(process.env.NEXT_APPWRITE_KEY!);

export const databases = new Databases(client);
