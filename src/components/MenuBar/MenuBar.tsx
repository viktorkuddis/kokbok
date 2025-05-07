import { NavLink } from "react-router-dom";
import styles from "./MenuBar.module.css";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

const MenuBar = () => {
  const { isMobileDevice } = useContext(AppContext);
  console.log(isMobileDevice);

  return (
    <nav className={styles.menuBar}>
      <div className={!isMobileDevice ? "page-section-content-container" : ""}>
        <div
          className={`${
            isMobileDevice ? styles.contentMobile : styles.contentDesktop
          }`}
        >
          <NavLink to="/" className={styles.logoItem}>
            <b>SMART</b>KOKBOK
          </NavLink>
          <ul className={styles.menuItems}>
            <li>
              <NavLink
                to="/smarta-listor"
                className={({ isActive }) =>
                  isActive ? `${styles.item} ${styles.activeLink}` : styles.item
                }
              >
                🤔 Vad ska jag laga?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alla-recept"
                className={({ isActive }) =>
                  isActive ? `${styles.item} ${styles.activeLink}` : styles.item
                }
              >
                📚 Alla recept
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/koket"
                className={({ isActive }) =>
                  isActive ? `${styles.item} ${styles.activeLink}` : styles.item
                }
              >
                👩‍🍳 Köket
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inkopslista"
                className={({ isActive }) =>
                  isActive ? `${styles.item} ${styles.activeLink}` : styles.item
                }
              >
                📝 Inköpslista
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
