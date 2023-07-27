'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Home() {
  const router=useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Home access page</h1>
    <Link href="/login">Goto Login</Link>
    <button onClick={()=>router.push("/login")}>button Login</button>

    </main>
  )
}
