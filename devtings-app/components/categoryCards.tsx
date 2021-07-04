import React from "react";
import { Category } from "../types/category";
import { Review } from "../types/review";

const dedupedTags = (reviews: Review[]) => {
  const tags = reviews.flatMap(({ tags }) => tags);
  const tagSet = new Set(tags);
  return Array.from(tagSet);
};

function CategoryCards({ categories }: { categories: Category[] }) {
  return (
    <div className="w-full px-4 max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories
        .filter(({ reviews }) => reviews.length)
        .map(({ category_name, benchmark_version, reviews }) => (
          <div
            key={category_name}
            className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="bg-primary flex-row">
              <h2>{category_name}</h2>
              <h3>{reviews.length} reviews</h3>
              <div>{benchmark_version}</div>
            </div>
            <div className="flex flex-row">
              <span className="uppercase font-bold pr-2">Best</span>
              {dedupedTags(reviews).map((tag) => (
                <a key={tag} href={`/${category_name}/${tag}`} className="pr-2">
                  {tag}
                </a>
              ))}
            </div>
            <div>
              <strong className="uppercase">Latest Activity</strong>

              {reviews.map(({ benchmark_date, product }) => (
                <React.Fragment key={product}>
                  <div>
                    <div>{benchmark_date}</div>
                    Update
                  </div>
                  <a href={`/${category_name}/${product}`}>{product}</a>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default CategoryCards;
