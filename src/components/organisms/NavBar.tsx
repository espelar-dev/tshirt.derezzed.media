import NavIcon from "../atoms/NavIcon";
import NavLink from "../atoms/NavLink";
import NavLogo from "../atoms/NavLogo";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={`${styles.navbarContainer}`}>
      <div className={`${styles.navlogoContainer}`}>
        <div className={`${styles.navlogo}`}>
          <NavLogo />
        </div>
      </div>
      <div className={`${styles.navlinkContainer}`}>
        <div className={`${styles.navlink}`}>
          <NavLink text="home" href="/home" selected={true} />
        </div>
        <div className={`${styles.navlink}`}>
          <NavLink text="shop" href="/shop" selected={false} />
        </div>
        <div className={`${styles.navlink}`}>
          <NavLink text="editor" href="/editor" selected={false} />
        </div>
        <div className={`${styles.navlink}`}>
          <NavLink text="contact" href="/contact" selected={false} />
        </div>
      </div>
      <div className={`${styles.naviconContainer}`}>
        <div className={`${styles.navicon}`}>
          <NavIcon type="cart" selected={true} />
        </div>
        <div className={`${styles.navicon}`}>
          <NavIcon type="user" selected={false} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;