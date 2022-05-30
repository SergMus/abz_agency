import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Button from "../../UI/Button/Button";
import s from "./FormBox.module.scss";
import InputsGroup from "./../../UI/InputsGroup/InputsGroup";
import Upload from "./../../UI/Upload/Upload";
import Checkbox from "../../UI/Checkbox/Checkbox";
import { api } from "../../api";
import successImage from "./../../assets/success-image.svg";

export default function FormBox({defaultPage}) {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState("");

  const form = useRef(null)

  useEffect(() => {
    api
      .getToken()
      .then((res) => setToken(res.data.token))
      .catch((error) => console.log(error));
  }, []);

  const submit = (e) => {
    e.preventDefault();

    let formData = new FormData(form.current);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("position_id", position);
    formData.append("phone", phone);
    formData.append("photo", userImage);

    api
      .createUser(formData, token)
      .then(() => {
        setSuccess(true);
        defaultPage(true);
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setError(true);
        }
        if (err.response.status === 422) {
          setValidationError(err.toJSON());
        }
      });
  };

  return (
    <div id="registration" className={s.user_infobox}>
      {success ? (
        <>
          <h1 className={s.heading}>User successfully registered</h1>
          <img src={successImage} alt="registered" width="328" height="290" />
        </>
      ) : (
        <>
          <h1 className={s.heading}>Working with POST request</h1>
          <div className={s.form_wrapper}>
            <form className={s.form} ref={form} onSubmit={submit}>
              <InputsGroup
                inputs={{ setName, setEmail, setPhone, name, email, phone }}
                validationError={validationError}
              />
              <Upload
                setUserImage={setUserImage}
                validationError={validationError}
              />
              <Checkbox setPosition={setPosition} />
              <Button
                text="Sign up"
                disabled={
                  name.length && email.length && phone.length && userImage
                    ? false
                    : true
                }
              />
              <p className={classNames(s.error, error ? s.show : null)}>
                User with this phone or email already exist
              </p>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
