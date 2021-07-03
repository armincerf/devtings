import Logo from "./logo";

function Header({ props }) {
  return (
    <div className="sticky-header">
      <div className="transition-transform duration-200 translate-y-0 left-0 right-0 top-0 z-20 fixed shadow-sm">
        <nav className="nav-bar header-content relative bg-white z-10 flex justify-between max-w-4xl px-4 mx-auto items-center">
          <div>Product Reviews</div>
          <div>Search Bar</div>
          <div>About</div>
        </nav>
        <div className="bg-primary">
            <div className="logo-bar max-w-4xl px-4 mx-auto flex items-center translate-x-0 top-0 left-0 right-0">
              <a href="/" className="logo"><Logo /></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
