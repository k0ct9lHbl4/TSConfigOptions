import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import avatarPng from "@/assets/avatar.png";
import avatarJpg from "@/assets/avatar.jpg";
import CalendarSvg from "@/assets/calendar.svg";

import styles from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const incrementButtonClickHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div data-test-id="AppDataTestaIdBabel" className={styles.app}>
      <h1>PLATFORM={__PLATFORM__}</h1>

      <div className={styles.images}>
        <div>
          {avatarPng}
          <img src={avatarPng} width={50} height={50} alt="png" />
        </div>
        <div>
          {avatarJpg}
          <img src={avatarJpg} width={50} height={50} alt="jpg" />
        </div>
        <div>
          <CalendarSvg width={50} height={50} style={{ color: "green" }} />
        </div>
      </div>

      <div className={styles.links}>
        <Link to="/">Go to home</Link>
        <Link to="/about">Go to about</Link>
        <Link to="/shop">Go to shop</Link>
      </div>

      <h2> Hello World!</h2>
      <p>Clicked {count} times</p>
      <button type="button" onClick={incrementButtonClickHandler} className={styles.button}>
        <span>Click!</span>
      </button>
      <Outlet />
    </div>
  );
};
