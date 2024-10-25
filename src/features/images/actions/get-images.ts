import { client, DATABASE_ID, IMAGES_ID } from "@/features/config";
import { Databases } from "node-appwrite";

export const getImages = async () => {
  try {
    const databases = new Databases(client);

    const images = await databases.listDocuments(DATABASE_ID, IMAGES_ID);

    return images;
  } catch {
    console.log("Some error occured");
  }
};
