import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Test Page 1</h1>

      <nav className="flex-grow mt-5">
        <ul>
          <li className="text-center">
            <Link href="/">Back To Home</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}