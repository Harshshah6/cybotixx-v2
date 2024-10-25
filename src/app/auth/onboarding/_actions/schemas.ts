import { z } from "zod";

export const onboardUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  image: z.string().url("Image must be a valid URL"), // Assuming image is a URL
  studentId: z.string().min(1, "Student ID is required"),
  course: z.enum(["BCA", "BBA", "BCOM"]),
});
