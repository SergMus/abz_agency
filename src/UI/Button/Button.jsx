import React from "react";
import classNames from "classnames";

import s from "./../Button/Button.module.scss";

export default function Button({ text, disabled, hidden, eventFunc }) {
  return (
    <button
      className={classNames(s.btn, disabled && s.disabled, hidden && s.hidden)}
      onClick={eventFunc}
    >
      {text}
    </button>
  );
}
