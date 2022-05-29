import React from "react";
import Button from "../../UI/Button/Button";
import s from "./DescriptionBox.module.scss";

export default function DescriptionBox() {
  return (
    <div className={s.wrapper}>
      <div className={s.description_box}>
        <h1 className={s.heading}>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <div className={s.btn_container}>
          <a href="#registration"> <Button text="Sign up" /></a>
        </div>
      </div>
    </div>
  );
}
