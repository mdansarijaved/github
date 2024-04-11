import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const Dashboard = async ({params}:{params :{username : string}}) => {
 
  const session = getServerSession(); 
  
  

  return (
 <>
 </>
  );
};

export default Dashboard;
