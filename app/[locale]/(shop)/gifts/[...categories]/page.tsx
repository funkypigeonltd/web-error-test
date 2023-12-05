import Link from "next/link";

export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ie" }];
}

export default function Page({ params }: { params: { locale: string; categories: string[] } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Gift Category  - locale: {params.locale} | categories: {params.categories.join('/')}</h1>

      <nav className="flex-grow mt-5">
        <ul>
          <li className="mt-3 text-center">
            {params.locale !== "uk" && params.categories && params.categories[0] && params.categories[0] === "random-category" && (
              <Link href="/uk/gifts/random-category">Random Category (UK)</Link>
            )}
          </li>
          <li className="mt-3 text-center">
            {params.locale !== "ie" && params.categories && params.categories[0] && params.categories[0] === "random-category" && (
              <Link href="/ie/gifts/random-category">Random Category (IE)</Link>
            )}
          </li>

          <li className="mt-3 text-center">
            {params.locale !== "uk" && params.categories && params.categories.length === 2 && (
              <Link href="/uk/gifts/level-one/level-two">Multi Level Category (UK)</Link>
            )}
          </li>
          <li className="mt-3 text-center">
            {params.locale !== "ie" && params.categories && params.categories.length === 2 && (
              <Link href="/ie/gifts/level-one/level-two">Multi Level Category (IE)</Link>
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