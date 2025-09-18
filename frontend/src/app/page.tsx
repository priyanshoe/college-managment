'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1>Home page</h1>
      <Button
        onClick={() => router.push('/teacher')}
        variant="secondary">Click me</Button>
    </div>
  )
}