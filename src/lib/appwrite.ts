import { Account, Client } from "node-appwrite";
import "server-only";

export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
export const WORKSPACES_ID = process.env.NEXT_PUBLIC_APPWRITE_WORKSPACES_ID!;
export const MEMBERS_ID = process.env.NEXT_PUBLIC_APPWRITE_MEMBERS_ID!;
export const IMAGES_BUCKET_ID =
  process.env.NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID!;
export const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT!;
export const ENDPOINT_ID = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(ENDPOINT_ID)
    .setProject(PROJECT_ID)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

    return {
        get account() {
            return new Account(client)
        }
    }
}
