import Link from "next/link";

export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ie" }];
}

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Birthday  - locale: {params.locale}</h1>

      <nav className="flex-grow mt-5">
        <ul>
          <li className="mt-3 text-center">
            {params.locale !== "uk" && (
              <Link href="/uk/gifts/birthday">Birthday (UK)</Link>
            )}
          </li>
          <li className="mt-3 text-center">
            {params.locale !== "ie" && (
              <Link href="/ie/gifts/birthday">Birthday (IE)</Link>
            )}
          </li>

          <li className="mt-3 text-center">
            <Link href="/">Back To Home</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}