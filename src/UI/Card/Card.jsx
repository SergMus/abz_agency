import React, { useState } from "react";
import s from "./Card.module.scss";
import defaultPhoto from "./../../assets/photo-cover.svg";
import Tooltip from "../Tooltip/Tooltip";

export default function Card({
  user: {
    name,
    email,
    phone,
    position,
    photo,
  },
}) {
  const [image, setImage] = useState(photo);
  const [positionX, setPositionX] = useState("");
  const [positionY, setPositionY] = useState("");

  const tooltipHandler = (e) => {
    let x = e.nativeEvent.offsetX - 20;
    let y = e.nativeEvent.offsetY + 30;
    setPositionX(x);
    setPositionY(y);
  };

  return (
    <div className={s.card_box}>
      <div className={s.image_wrapper}>  
        <img
          src={image}
          alt="photograph"
          className={s.image}
          onError={() => setImage(defaultPhoto)}
        />
      </div>

      <Tooltip text={name} props={{ positionX, positionY, tooltipHandler }} />

      <div className={s.text_box}>
        <Tooltip
          text={position}
          props={{ positionX, positionY, tooltipHandler }}
        />
        <Tooltip
          text={email}
          props={{ positionX, positionY, tooltipHandler }}
        />
        <Tooltip
          text={phone}
          props={{ positionX, positionY, tooltipHandler }}
        />
      </div>
    </div>
  );
}
