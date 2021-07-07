import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Category } from "../../types/category";
import { useInterval } from "../../lib/utils";
import styles from "./IntroText.module.css";

interface IIntroTextProps {
  categories: Category[];
}

const IntroText = ({ categories }: IIntroTextProps) => {
  const [titlePos, setTitlePos] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const rotateTitle = async () => {
    await new Promise((r) => setTimeout(r, 500));
    setTitlePos(0);
    setCategoryIndex((categoryIndex + 1) % categories.length);
  };
  useInterval(() => {
    setTitlePos(20);
    rotateTitle();
  }, 5000);
  return (
    <>
      <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl ratio">
        <div className="overflow-hidden block">
          <span
            className={`block whitespace-nowrap transform translate-y-${titlePos} transition-all ease-in duration-300 motion-reduce:transition-none`}
          >
            {categories && categories[categoryIndex].category_name}
          </span>
        </div>
        <span className="text-blue-800">scientifically tested</span>
      </h2>
      <p className="mt-3 w-3/4 text-base sm:mx-auto lg:mx-0 text-gray-500 sm:mt-6 sm:text-xl lg:text-lg xl:text-xl">
        Straight to the point developer tool recommendations. We run open source
        benchmarks and normalise the results, so that you can compare the
        potential tools for your next project easily.
      </p>
    </>
  );
};

export default IntroText;
