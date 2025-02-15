"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/"); // Ensures redirection after sign-out
  };

  return (
    <button onClick={handleSignOut} className="btn">
      Sign Out
    </button>
  );
}
