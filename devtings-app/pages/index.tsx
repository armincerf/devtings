import Head from "next/head";
import Image from "next/image";
import slugify from "slugify";
import CategoryCards from "../components/categoryCards";
import Header from "../components/header";
import { getAllCategories, getCategoryBySlug } from "../lib/api";
import { GetStaticProps } from "next";
import { Category } from "../types/category";
import IntroText from "../components/IntroText";
import LatestReviews from "../components/LatestReviews";

export const getStaticProps: GetStaticProps = async (_context) => {
  const categories = getAllCategories();

  return {
    props: {
      categories: categories,
    },
  };
};

export default function Home({
  categories,
}: {
  category: Category;
  categories: Category[];
}) {
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
        <section className="pt-8 mx-auto px-4 sm:pt-8 sm:px-6 md:pt-10 xl:pt-14">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 pl-15 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <IntroText {...{categories}} />
            </div>
            <div className="mt-12 mb-10 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <LatestReviews />
            </div>
          </div>
        </section>
        {categories.length && <CategoryCards {...{ categories }} />}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
