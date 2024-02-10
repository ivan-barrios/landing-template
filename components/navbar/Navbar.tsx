import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  return (
    <nav className="h-[80px] bg-white w-full flex justify-center">
      <div className="w-full max-w-maxSectionWidth flex justify-between items-center sectionPaddings">
        <div>LOGO</div>
        {/* <Image src={} alt="Logo" /> */}
        <DesktopMenu links={links} />

        <MobileMenu links={links} />
      </div>
    </nav>
  );
};

export default Navbar;

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Services",
    href: "/#services",
  },
  {
    name: "Testimonials",
    href: "/#testimonials",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];
