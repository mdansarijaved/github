import { AuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github";

const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
      authorization: { params: { scope: 'user : email ' } },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const userResponse = await fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
          Authorization: `token ${token.accessToken}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
      const user = await userResponse.json();
      session.user.accessToken = token.accessToken;
      session.user.login = user.login;
      session.user.url = user.url;
      session.user.repos_url = user.repos_url;
      session.user.followers = user.followers;
      session.user.following = user.following;
      session.user.public_repos = user.public_repos;
      session.user.organizations_url = user.organizations_url;
      session.user.created_at = user.created_at;
      session.user.company = user.company;
      session.user.blog = user.blog;
      session.user.bio = user.bio;
      session.user.html_url = user.html_url;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account && account.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

export default authOptions; 