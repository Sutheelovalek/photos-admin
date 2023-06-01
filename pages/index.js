/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const {data: session} = useSession();

  return <Layout>
    <div className="text-blue-900 flex justify-between">
      <h2>
          Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex bg-gray-300 text-black gap-1 rounded-sm overflow-hidden">
      <img src={session?.user?.image} alt='admin image' className="w-8 h-8 rounded-l-sm"/>
      <span className="px-2">{session?.user?.name}</span> 
      </div>
      <button 
    className="bg-blue-500 rounded-xl py-1 px-3 items-center text-white font-normal"
    onClick={() => signOut()}>Sign out</button>
    </div>
  </Layout>

}
