"use server";
import { auth } from "@/auth";
import { GITHUB_USERS_URL } from "@/constants/url";

export const getUser = async () => {
  const user = await auth();
  if (!user) return null;
  return user.user;
};
