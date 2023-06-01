import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return(
      <div className="flex items-center bg-blue-900 w-screen h-screen">
    <div className="text-center w-full">
      <button 
      onClick={() => signIn('google')}
      className="bg-white p-2 px-4 rounded-lg text-lg">Login with Google</button>
    </div>
  </div>
    )
  }
  

  return (
    <>
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">Logged in as {session.user.email} 
      <button 
      className="bg-white p-2 px-4 rounded-lg"
      onClick={() => signOut()}>Sign out</button>
      </div>
      


    </div>
    </>
  )
}
