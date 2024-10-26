"use client";
import { useParams } from "next/navigation";
import React from "react";

export const useForumId = () => {
  const { forumId } = useParams();

  return forumId as string;
};
