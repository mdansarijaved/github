
import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";
import DashboardHeader from "@/components/dashboard-header";
import AuthProvider from "@/components/auth-provider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <AuthProvider session={session}>

    <div className="flex flex-col w-full h-full pt-20 ">
      <DashboardHeader />
      {children}
    </div>
    </AuthProvider>
  );
}
