"use server";
import { Client, Databases } from "node-appwrite";
import {
  APPWRITE_ENDPOINT,
  APPWRITE_PROJECT,
  DATABASE_ID,
  USERS_ID,
} from "../../../../features/config";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { User, UserRoleTypes } from "./types";

export const getUser = async ({ userId }: { userId: string }) => {
  try {
    const client = new Client()
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT)
      .setKey(process.env.NEXT_APPWRITE_KEY!);

    const databases = new Databases(client);

    const user = await databases.getDocument<User>(
      DATABASE_ID,
      USERS_ID,
      userId
    );

    return user;
  } catch {
    return null;
  }
};

export const createUser = async ({
  name,
  imageUrl,
  studentId,
  course,
}: {
  name: string | null;
  imageUrl: string;
  studentId: string;
  course: string;
}) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/auth/sign-up");
  }

  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  const databases = new Databases(client);
  const newUser = await databases.createDocument<User>(
    DATABASE_ID,
    USERS_ID,
    userId,
    {
      name,
      imageUrl,
      studentId,
      course,
      role: UserRoleTypes.MEMBER,
    }
  );

  return newUser.$id;
};
