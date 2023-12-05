import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Test Page 1</h1>

      <nav className="flex-grow mt-5">
        <ul>
          <li className="text-center">
            <Link href="/">Home</Link>
          </li>
          <li className="mt-3 text-center">
            <span className="underline">Test Page 1</span>
          </li>
          <li className="mt-3 text-center">
            <Link href="/uk/test-page-2">Test Page 2 (UK)</Link>
          </li>
          <li className="mt-3 text-center">
            <Link href="/ie/test-page-2">Test Page 2 (IE)</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}