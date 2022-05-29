import React from 'react'
import s from './Loader.module.scss'

export default function Loader() {
  return (
    <div className={s.spinner_container}>
      <div className={s.loading_spinner}>
      </div>
    </div>
  )
}
