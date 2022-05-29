import React, { useState } from "react";
import s from "./Upload.module.scss";

export default function Upload({ setUserImage }) {

  const [uploadTxt, setUploadTxt] = useState('Upload your photo');
  const [style, setStyle] = useState(false);

  const imageHandler = () => {
    const fileField = document.querySelector("input[type='file']");
    setUserImage(fileField.files[0]);
    setUploadTxt(fileField.files[0].name);
    setStyle(true);
  };

  return (
    <div className={s.upload_container}>
      <button className={s.btn}>Upload</button>
      <input
        required
        type="file"
        id="upload"
        name="upload"
        placeholder="Upload your photo"
        onChange={imageHandler}
      />
      <label htmlFor="upload" className={style ? s.color : undefined}>{uploadTxt}</label>
    </div>
  );
}
