import { useState } from "react";
import Button from "./Button";
import Cv from "/src/assets/CV_CamiloCuitiva.pdf";
import ImageMundev from "/src/assets/image-mundevux.svg";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <div className="fixed w-full z-20 top-0 left-0 bg-quaternary/20 backdrop-filter backdrop-blur">
      <div className="flex items-center justify-between max-w-7xl mx-auto flex-wrap p-6">
        <a href="/" className="flex items-center text-xl md:text-2xl">
          <img src={ImageMundev} alt="MundevUX" className="w-7 md:w-9" />
          <h1 className="font-bold text-primary mt-1 md:mt-2">MundevUX</h1>
        </a>
        <div className="flex justify-center items-center md:order-2">
          <Button href={Cv} text="Download CV" />
          <button className="block md:hidden" onClick={handleClick}>
            {open ? (
              <svg
                fill="none"
                className="h-6 w-6 fill-current"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                fill="none"
                className="h-6 w-6 fill-current"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full block flex-grow md:flex md:items-center md:w-auto md:order-1`}
        >
          <ul className="text-md mt-6 md:mt-0 md:flex-grow md:flex md:justify-center">
            {navLinks.map((link, index) => (
              <li key={index} className="mx-4 my-2 md:my-0 text-center">
                <a
                  href={link.path}
                  className="block text-base md:text-lg font-medium text-primary hover:text-secondary/80 transition"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
