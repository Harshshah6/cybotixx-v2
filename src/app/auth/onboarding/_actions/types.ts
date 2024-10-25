import { Models } from "node-appwrite";

export enum UserRoleTypes {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  SUPER_ADMIN = "SUPER_ADMIN",
  MODERATOR = "MODERATOR",
}

export type User = Models.Document & {
  userId: string;
  name: string;
  imageUrl: string;
  studentId: string;
  course: string;
  role: UserRoleTypes;
};
