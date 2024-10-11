"use server";
import { auth } from "@/auth";
import { GITHUB_USERS_URL } from "@/constants/url";

export const getUser = async () => {
  const user = await auth();
  const data = await fetch(`${GITHUB_USERS_URL}/${user?.user.login}`);
  const userData = await data.json();
  return userData;
};
