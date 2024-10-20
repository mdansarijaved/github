import { getUser } from "@/app/actions/user/user";
import { GITHUB_SEARCH_REPOS_URL } from "@/constants/url";

export const getUserRepositoryName = async () => {
  const user = await getUser();
  try {
    const response = await fetch(GITHUB_SEARCH_REPOS_URL, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    const data = await response.json();
    if (!data) {
      return;
    }
    const repositories = data;
    return repositories;
  } catch (error) {
    console.log(error);
    return null;
  }
};
