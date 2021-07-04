import React from "react";
import { Category } from "../types/category";
import Link from "next/link";

function CategoriesDropDown({ categories }: { categories: Category[] }) {
  return (
    <div className="categories-dropdown absolute top-full bg-white z-20 py-2">
      {" "}
      {categories.map(({ category_name, category_id, benchmark_version }) => (
        <Link href={`/${encodeURIComponent(category_id)}`}>
          <a className="px-4 hover:bg-primary block">
            <span className="uppercase font-semibold text-sm pr-4 text-gray-700 tracking-tighter">
              {category_name}
              <br />
              Reviews
            </span>
            <span className="text-gray-500 text-xs pr-4">
              {benchmark_version}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default CategoriesDropDown;
