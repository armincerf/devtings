import Head from "next/head";
import Image from "next/image";
import slugify from "slugify";
import CategoryCards from "../components/categoryCards";
import Header from "../components/header";
import { getAllCategories, getCategoryBySlug } from "../lib/api";
import { GetStaticProps } from "next";
import { Category } from "../types/category";

export const getStaticProps: GetStaticProps = async (_context) => {
  const categories = getAllCategories();

  return {
    props: {
      categories: categories,
    },
  };
};

export default function Home({ categories }: {category: Category, categories: Category[]}) {
  //const util = require('util')
  //console.log('cats', util.inspect(categories, false, null, true));

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
