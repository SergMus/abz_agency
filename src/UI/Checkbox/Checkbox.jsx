import React, { useState } from "react";
import { api } from "./../../api";
import classNames from "classnames";
import s from "./Checkbox.module.scss";

export default function Checkbox({ setPosition }) {
  const [label, setLabel] = useState([]);

  useState(() => {
    api
      .getSelectItems()
      .then((result) => setLabel(result.data.positions))
      .catch((error) => console.log(error));
  }, []);

  const renderHandler = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div className={s.checkbox_container}>
      <p className={s.text}>Select your position</p>
      {label &&
        label.map((record, i) => {
          return (
            <div key={record.id}>
              <input
                required
                type="radio"
                id={record.id}
                name="position"
                defaultChecked={i === 0}
                className={classNames(s.checkbox_input)}
                value={record.id}
                onChange={renderHandler}
              />

              <label htmlFor="check" className={s.label}>
                {record.name}
              </label>
            </div>
          );
        })}
    </div>
  );
}
