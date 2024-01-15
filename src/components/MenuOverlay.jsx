import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col  items-center text-slate-300">
      {links.map((link, index) => {
        return (
          <li
            key={index}
            className="py-2 hover:text-white
          "
          >
            <NavLink href={link.path} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
