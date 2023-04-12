import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import user from "../../assets/images/user.svg";
import userSelected from "../../assets/images/user-selected.svg";
import cart from "../../assets/images/cart.svg";
import cartSelected from "../../assets/images/cart-selected.svg";

type NavIconProps = {
  type: string;
  selected?: boolean;
};

const NavIcon = (props: NavIconProps) => {
  const { type, selected } = props;

  let src: StaticImageData | string = "";
  if (type === "user") {
    src = selected ? userSelected : user;
  } else if (type === "cart") {
    src = selected ? cartSelected : cart;
  }

  return (
    <Link href="/">
      <Image height={30} width={30} src={src} alt="derezzed-media" />
    </Link>
  );
};

export default NavIcon;