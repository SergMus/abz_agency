import React from "react";
import Button from "../../UI/Button/Button";
import s from "./Header.module.scss";
import logo from "./../../assets/Logo.svg";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href="/" className={s.logo}>
          <img src={logo} alt="logo" />
        </a>

        <nav className={s.nav}>
          <a href="#cards" style={{ marginRight: 10 }}>
            <Button text="Users" />
          </a>
          <a href="#registration">
            <Button text="Sign up" />
          </a>
        </nav>
      </div>
    </header>
  );
}
