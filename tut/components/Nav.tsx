"use client";

import Image from "@components/Image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Todos", href: "/todos" },
  { title: "Posts", href: "/posts" },
  { title: "Users", href: "/users" },
  { title: "About", href: "/about" },
];
const Nav = () => {
  const currentRoute = usePathname();
  return (
    <nav className="flex justify-between items-center sticky drop-shadow-md bg-slate-300 px-6 py-4">
      {/* <div className="flex flex-row gap-5 items-center"> */}
      <Link href="/" className="flex gap-2 flex-center">
        <Image className="object-contain" alt="logo" src="/assets/images/logo.svg" size={45} />
      </Link>
      {/* </div> */}

      <SearchBar />
      {/* <div className="flex flex-row items-center gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            className={`${
              currentRoute == link.href ? "text-slate-900" : "text-slate-500"
            } text-lg hover:text-slate-600 transition-color`}
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <button className="bg-slate-600 rounded-md px-8 py-1 text-neutral-100 hidden md:block">Login</button> */}
    </nav>
  );
};

export default Nav;
