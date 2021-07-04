import { useState } from "react";
import { useEffect } from "react";
import { Category } from "../types/category";
import CategoriesDropDown from "./CategoriesDropDown";
import Logo from "./logo";

function Header({ categories }: { categories: Category[] }) {
  const [productMenu, setProductMenu] = useState(false);
  const showProductMenu = () => setProductMenu(true);
  const hideProductMenu = () => setProductMenu(false);

  useEffect(() => {
    let scrollPosition = window.scrollY;
    let prevScrollPosition;
    const hideHeaderPosition = 63;
    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {
      scrollPosition = window.scrollY;
      if (header) {
        if (
          scrollPosition >= prevScrollPosition &&
          scrollPosition >= hideHeaderPosition
        ) {
          header.classList.add("is-partial");
        } else {
          header.classList.remove("is-partial");
        }
        prevScrollPosition = scrollPosition;
      }
    });
  });
  return (
    <div className="sticky-header">
      <div
        id="header"
        className="bg-white transition-transform duration-200 translate-y-0 left-0 right-0 top-0 z-20 fixed shadow-sm"
      >
        <nav className="nav-bar header-content relative flex justify-between max-w-4xl px-4 mx-auto items-center">
          <div
          className="h-full flex items-center"
            onClick={showProductMenu}
            onMouseEnter={showProductMenu}
            onMouseLeave={hideProductMenu}
          >
            {productMenu && <CategoriesDropDown {...{categories}} />}
            Product Reviews
          </div>
          <div>Search Bar</div>
          <div>About</div>
        </nav>
        <div className="bg-primary">
          <div className="logo-bar max-w-4xl px-4 mx-auto flex items-center translate-x-0 top-0 left-0 right-0">
            <a href="/" className="logo" aria-label="home page">
              <Logo />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
