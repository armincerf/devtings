import { randomInt } from "crypto";
import Head from "next/head";
import slugify from "slugify";
import CategoryCards from "../components/categoryCards";
import Header from "../components/header";
import { Category } from "../types/category";
import { Review } from "../types/review";

const categoryNames = [
  "Frontend Frameworks",
  "Backend Frameworks",
  "Databases",
  "Programming Languages",
];

const tags = {
  "Frontend Frameworks": ["VanilaJS", "React", "Svelte", "Ember.js", "Next.js"],
  "Backend Frameworks": ["Clojure + Edge", "Java", "Node.js"],
  "Databases": ["PostgreSQL", "Mongo", "Crux", "Firebase"],
  "Programming Languages": ["C", "Rust", "JavaScript", "Clojure"]
}

const genReviews = (category_name): Review => {
  return {
    product: Math.random().toString(36),
    benchmark_date: new Date().toString(),
    tags: tags[category_name],
  };
};

const genCategory = (category: Category["category_name"]): Category => {
  return {
    category_id: slugify(category),
    category_name: category,
    benchmark_version: "v0.1",
    reviews: Array(5).fill(genReviews(category)),
  };
};

const categories: Category[] = categoryNames.map((name) => genCategory(name));

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header {...{ categories }} />

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
        {categories.length && <CategoryCards {...{ categories }} />}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
