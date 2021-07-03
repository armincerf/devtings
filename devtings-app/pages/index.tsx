import Head from "next/head";
import CategoryCard from "../components/categoryCard";
import Header from "../components/header";
import { Category } from "../types/category";

const categories: Category[] = [
  {
    category_name: "Frontend Frameworks",
    benchmark_version: "v1.0",
    reviews: [
      { product: "React + Redux", benchmark_date: "2021-06-06T12:01:01Z", tags: ["react", "js", "whatever"]},
      { product: "Svelte", benchmark_date: "2021-06-05T12:01:01Z", tags: ["svelte", "js", "lightweight"] },
      { product: "React + Redu1x", benchmark_date: "2021-06-04T12:01:01Z" },
      { product: "Something else", benchmark_date: "2021-06-03T12:01:01Z" },
    ],
  },
  {
    category_name: "Backend Frameworks",
    benchmark_version: "v1.0",
    reviews: [
      { product: "React + Redux3", benchmark_date: "2021-06-06T12:01:01Z" },
      { product: "Something else3", benchmark_date: "2021-06-05T12:01:01Z", tags: ["clojure", "JVM", "crux"] },
      { product: "React + Redu5x", benchmark_date: "2021-06-04T12:01:01Z" },
      { product: "Something else4", benchmark_date: "2021-06-03T12:01:01Z" },
      { product: "React + Redu2x", benchmark_date: "2021-06-06T12:01:01Z" },
      { product: "Something else5", benchmark_date: "2021-06-06T12:01:01Z" },
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header props={{}} />

      <main className="flex flex-col items-center w-full flex-1 text-center">
        <section className="w-full flex items-center justify-center">
          <div className="hero">
            <div className="landing-page-background"></div>
            <div className="hero-content">
              <h1>
                Find the
                <br />
                best dev tools
                <br />
                for your needs
              </h1>
              <p>
                No ads, as little bias and subjectivity as possible. Just open
                source benchmarks on open source standardised 'real world'
                example applications.
              </p>
            </div>
          </div>
        </section>
        <CategoryCard {...{ categories }} />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
