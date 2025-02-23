"use client"
import { useRouter } from "next/navigation"
const Back = () => {
    const router = useRouter()
  return (
    <button onClick={() => router.back()} className="mb-6">
        Go Back
    </button>
  )
}

export default Back
