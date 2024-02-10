"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface LinksParam {
  links: {
    name: string;
    href: string;
  }[];
}

const MobileMenu = ({ links }: LinksParam) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {open ? (
        <IoClose onClick={() => setOpen(!open)} className="text-4xl" />
      ) : (
        <FiMenu onClick={() => setOpen(!open)} className="text-3xl" />
      )}

      <ul
        className={`fixed top-[80px] h-[calc(100vh-80px)] w-[100vw] bg-white ${
          open ? "right-0" : "-right-full"
        } transition-all duration-300 flex flex-col items-center pt-12 gap-4`}
      >
        {links.map((link, i) => (
          <li key={i} className="text-3xl w-[90%] flex justify-center">
            <Link
              onClick={() => setOpen(false)}
              href={link.href}
              className="w-full text-center py-2 bg-gray-300 rounded-lg"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
