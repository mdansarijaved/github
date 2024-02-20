import { Landing } from "@/components/landing";

export default function Home() {
  return (
    <div className=" flex items-center justify-center py-20 h-full relative overflow-hidden z-10">
         {/* <div className="absolute top-1/3 right-3/4 rounded-full h-40 w-40 translate-x-1/3 -translate-y-1/4 blur-3xl bg-blue-400 aria-disabled -z-10 "></div>
         <div className="absolute top-1/2 right-2/3 rounded-full h-40  w-40  -translate-y-1/2 blur-3xl bg-purple-600 -z-10 "></div> */}
      {/*<Hero />*/}
      <Landing />
    </div>
  );
}
