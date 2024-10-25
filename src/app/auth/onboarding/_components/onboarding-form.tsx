"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { onboardUserSchema } from "@/app/auth/onboarding/_actions/schemas";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createUser } from "@/app/auth/onboarding/_actions/actions";
import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";

interface OnboardingFormProps {
  userId: string;
  image: string;
  name: string | null;
}

const OnboardingForm = ({ image, name }: OnboardingFormProps) => {
  const form = useForm<z.infer<typeof onboardUserSchema>>({
    resolver: zodResolver(onboardUserSchema),
    defaultValues: {
      name: name || "",
      image: image,
      studentId: "",
      course: "BCA",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof onboardUserSchema>) => {
    try {
      setIsLoading(true);
      const user = await createUser({
        name: values.name,
        imageUrl: values.image,
        studentId: values.studentId,
        course: values.course,
      });
      router.push(`/${user}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  disabled={false}
                  className="focus-visible:ring-1 ring-blue-500"
                  placeholder="e.g. John Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="studentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student ID</FormLabel>
              <FormControl>
                <Input
                  className="focus-visible:ring-1 ring-blue-500 uppercase"
                  placeholder="e.g. 23BCAJC###5"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your course" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="focus-visible:ring-1 ring-blue-500">
                  <SelectItem value="BCA">BCA</SelectItem>
                  <SelectItem value="BBA">BBA</SelectItem>
                  <SelectItem value="BCOM">BCOM</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} className="w-full" type="submit">
          {isLoading ? (
            <LoaderIcon className="size-4 animate-spin" />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default OnboardingForm;
