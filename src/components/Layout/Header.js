import { Fragment } from "react";

import classes from "./Header.module.css";

import headerBgImage from "../../assets/meals.jpg";
import HeaderCartButton from "../UI/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>AppName</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerBgImage} alt="Some description" />
      </div>
    </Fragment>
  );
};

export default Header;
