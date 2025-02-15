import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  // Check authentication status on the server
  const { userId } = await auth();
  
  // If a user is signed in, redirect them to /products
  if (userId) {
    redirect("/products");
  } 


  return (
    <>
      <SignedOut>
        <div className="w-full flex items-center justify-center">

        
          <SignIn routing="hash" />
          </div>
      </SignedOut>
      <SignedIn>
        {/* This is a fallback in case the redirect hasn't happened yet */}
        <p>Redirecting...</p>
      </SignedIn>
    </>
  );
}
