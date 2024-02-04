import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

const Dashboard = async() => {
  const session= await getServerSession(authOptions);
  console.log(session?.user.login)
 if(session){

  return(
    <div>
      
    </div>
  )
 }
}

export default Dashboard