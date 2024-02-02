'use client'
import { useSession } from "next-auth/react"

const Dashboard = () => {
  const {data: session} = useSession(); 
  console.log(session)
 if(session){
  return(
    <div>
      youre logged in as {session?.user?.login}
    </div>
  )
 }
}

export default Dashboard