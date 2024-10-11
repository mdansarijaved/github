import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
        const extendedSession = {
          ...session.user,
          accessToken: token.accessToken,
          login: token.login,
          node_id: token.node_id,
          avatar_url: token.avatar_url,

          followers_url: token.followers_url,
          following_url: token.following_url,
          gists_url: token.gists_url,
          starred_url: token.starred_url,
          subscriptions_url: token.subscriptions_url,
          organizations_url: token.organizations_url,
          repos_url: token.repos_url,
          events_url: token.events_url,
          received_events_url: token.received_events_url,
          type: token.type,
          site_admin: token.site_admin,
          name: token.name,
          company: token.company,
          blog: token.blog,
          location: token.location,
          email: token.email,
          hireable: token.hireable,
          bio: token.bio,
          twitter_username: token.twitter_username,
          public_repos: token.public_repos,
          public_gists: token.public_gists,
          followers: token.followers,
          following: token.following,
          created_at: token.created_at,
          updated_at: token.updated_at,
        };
        session.user = extendedSession;
      }
      console.log(token);
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (account) {
        token.accessToken = account.access_token!;
      }
      if (profile) {
        console.log("profile", profile);
        token.login = profile.login as string;
        token.id = profile.id as string;
        token.node_id = profile.node_id as string;
        token.avatar_url = profile.avatar_url as string;
        token.html_url = profile.html_url as string;
        token.type = profile.type as string;
        token.site_admin = profile.site_admin as boolean;
        token.name = profile.name as string;
        token.company = profile.company as string;
        token.blog = profile.blog as string;
        token.location = profile.location as string;
        token.email = profile.email as string;
        token.hireable = profile.hireable as boolean;
        token.bio = profile.bio as string;
        token.twitter_username = profile.twitter_username as string;
        token.public_repos = profile.public_repos as number;
        token.public_gists = profile.public_gists as number;
        token.followers = profile.followers as number;
        token.following = profile.following as number;
        token.created_at = profile.created_at as string;
        token.updated_at = profile.updated_at as string;
      }
      console.log("this is token", token);
      return token;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
