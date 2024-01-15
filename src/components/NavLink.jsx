import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    // spy dinamic source dan titlenya
    <Link href={href} className="block pl-3 pr-4 ">
      {title}
    </Link>
  );
};

export default NavLink;
