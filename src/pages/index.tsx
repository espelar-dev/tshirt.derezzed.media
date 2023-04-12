import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./index.module.css";
import NavLink from "@/components/atoms/NavLink";
import NavLogo from "@/components/atoms/NavLogo";
import NavIcon from "@/components/atoms/NavIcon";
import NavBar from "@/components/organisms/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        {/* <NavLink text="hello" href="/hello" /> */}
        {/* <NavIcon type="cart" /> */}
        <NavBar />
      </div>
    </>
  );
}
