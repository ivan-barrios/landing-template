import Link from "next/link";

interface LinksParam {
  links: {
    name: string;
    href: string;
  }[];
}

const DesktopMenu = ({ links }: LinksParam) => {
  return (
    <ul className="hidden md:flex gap-6">
      {links.map((link, i) => (
        <li key={i}>
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
