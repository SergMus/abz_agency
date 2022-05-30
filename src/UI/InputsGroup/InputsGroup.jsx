import React from "react";
import s from "./InputsGroup.module.scss";
import { emailValidate } from "./../../utils";

export default function InputsGroup({
  inputs: { setName, setEmail, setPhone, name, email, phone },
}) {
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  return (
    <>
      <div className={s.input_wrapper}>
        <input
          id="name"
          minLength="2"
          maxLength="60"
          className={s.input}
          name="name"
          placeholder="Your name"
          value={name}
          type="text"
          onChange={nameHandler}
        />
        <label htmlFor="name" className={s.label}>
          user name, should be 2-60 characters
        </label>
      </div>

      <div className={s.input_wrapper}>
        <input
          id="email"
          type="email"
          minLength="2"
          maxLength="100"
          className={s.input}
          name="email"
          placeholder="Email"
          pattern={emailValidate}
          value={email}
          onChange={emailHandler}
        />
        <label htmlFor="email" className={s.label}>
          email must be a in format name@name.domain
        </label>
      </div>

      <div className={s.input_wrapper}>
        <input
          id="tel"
          type="tel"
          className={s.input}
          name="phone"
          placeholder="Phone"
          pattern="^[\+]{0,1}380([0-9]{9})$"
          value={phone}
          onChange={phoneHandler}
        />
        <label htmlFor="tel" className={s.label}>
          number should start with code of Ukraine +380
        </label>
      </div>
    </>
  );
}
