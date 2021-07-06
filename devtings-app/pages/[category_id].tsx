import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import slugify from "slugify";
import CategoryCards from "../components/categoryCards";
import Header from "../components/header";
import { getAllCategories, getCategoryBySlug } from "../lib/api";
import { Category } from "../types/category";
import { Review } from "../types/review";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async ({ params }) => {  
  const category = getCategoryBySlug(params.category_id);
  const categories = getAllCategories();

  return {
    props: {
      category: {
        ...category,
      },
      categories: 
        categories,
    },
  };
};

export default function CategoryPage({ category, categories }: {category: Category, categories: Category[]}) {
  const { category_name, reviews, benchmark_version } = category;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header {...{ categories }} />

      <main className="flex flex-col w-full ">
        <section className=" pt-16 w-full flex flex-col mx-auto px-4 max-w-4xl">
          <div className=" text-6xl bold-title text-gray-800 mb-8">
            {category_name}
          </div>
          <div className="flex items-center">
            <span className="text-5xl font-extralight text-secondary pr-4">{reviews.length}</span>
             <span className="bold-title text-gray-800">Reviews</span> 
          </div>
          <div className="flex items-center">
            <span className="text-5xl font-extralight text-secondary pr-4">{benchmark_version}</span>
             <span className="bold-title text-gray-800">Test Methodology</span> 
             <span>Which test should we add or improve? <Link href="/discuss"><a className="text-secondary font-bold">Discuss here</a></Link></span>
          </div>
          <p className="my-6 text-lg">Start with our picks for the best {category_name} below. These are the ones we recommend based on our testing and in-depth reviews.</p>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getAllCategories();

  return {
    paths: categories.map((category) => {
      return {
        params: {
          category_id: category.category_id.toLowerCase(),
        },
      };
    }),
    fallback: false,
  };
}
