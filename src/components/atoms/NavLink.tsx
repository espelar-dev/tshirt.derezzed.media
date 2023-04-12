import Link from "next/link";
import styles from "./NavLink.module.css";

type NavLinkProps = {
  href: string;
  text: string;
  selected?: boolean;
};

const NavLink = (props: NavLinkProps) => {
  const { text, href, selected } = props;

  return (
    <Link className={`${styles.navlink} ${selected ? styles.selected : ""}`} href={href}>{text}</Link>
  );
};

export default NavLink;