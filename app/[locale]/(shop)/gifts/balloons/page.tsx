import { Metadata } from "next";
import Link from "next/link";

export function generateMetadata({ params, searchParams }: { params: { locale: string }; searchParams: { [key: string]: string | string[] | undefined } }): Metadata {
  console.log('balloons generateMetadata', { params, searchParams });

  let index = true;
  if (searchParams) {
    if (searchParams.query && searchParams.query.length > 0) {
      index = false;
    }
  }

  return {};
}

export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ie" }];
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Page({ params }: { params: { locale: string } }) {
  await sleep(1000);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Balloons  - locale: {params.locale}</h1>

      <nav className="flex-grow mt-5">
        <ul>
          <li className="mt-3 text-center">
            {params.locale !== "uk" && (
              <Link href="/uk/gifts/balloons">Balloons (UK)</Link>
            )}
          </li>
          <li className="mt-3 text-center">
            {params.locale !== "ie" && (
              <Link href="/ie/gifts/balloons">Balloons (IE)</Link>
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