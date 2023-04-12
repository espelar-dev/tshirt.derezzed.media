import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";

const NavLogo = () => {
  return (
    <Link href="/">
      <Image width={250} src={logo} alt="derezzed-media" />
    </Link>
  );
};

export default NavLogo;