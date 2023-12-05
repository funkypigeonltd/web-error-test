import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Home Page</h1>

      <nav className="flex-grow mt-5">
        <ul>
          <li className="text-center">
            <span className="underline">Home</span>
          </li>
          <li className="mt-3 text-center">
            <Link href="/test-page-1">Test Page 1</Link>
          </li>
          <li className="mt-3 text-center">
            <Link href="/uk/test-page-2">Test Page 2 (UK)</Link>
          </li>
          <li className="mt-3 text-center">
            <Link href="/ie/test-page-2">Test Page 2 (IE)</Link>
          </li>
          <li className="mt-3 text-center">
            <Link href="/uk/gifts/balloons">Balloons (UK)</Link>
          </li>
          <li className="mt-3 text-center">
            <Link href="/ie/gifts/balloons">Balloons (IE)</Link>
          </li>
          <li className="mt-3 text-center">
            <Link href="/uk/gifts/birthday">Birthday (UK)</Link>
          </li>
          <li className="mt-3 text-center">
            <Link href="/ie/gifts/birthday">Birthday (IE)</Link>
          </li>

          <li className="mt-3 text-center">
            <Link href="/uk/gifts/random-category">Random Category (UK)</Link>
          </li>
          <li className="mt-3 text-center">
            <Link href="/ie/gifts/random-category">Random Category (IE)</Link>
          </li>

          <li className="mt-3 text-center">
            <Link href="/uk/gifts/level-one/level-two">Multi Level Category (UK)</Link>
          </li>
          <li className="mt-3 text-center">
            <Link href="/ie/gifts/level-one/level-two">Multi Level Category (IE)</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
