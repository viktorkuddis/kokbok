import { NavLink } from "react-router-dom";
import styles from "./MenuBar.module.css";

const MenuBar = () => {
  return (
    <nav className={styles.menuBar}>
      <div className="page-section-content-container">
        <ul className={styles.menuItems}>
          <li>
            <NavLink to="/" className={styles.logoItem}>
              <b>SMART</b>KOKBOK
            </NavLink>
          </li>
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
    </nav>
  );
};

export default MenuBar;
