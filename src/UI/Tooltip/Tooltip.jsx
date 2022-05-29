import React from 'react';
import s from './Tooltip.module.scss';

export default function Tooltip({props:{positionX, positionY, tooltipHandler}, text}) {
  return (
    <div className={s.wrap_tooltip}>
        <p className={s.text} onMouseMove={tooltipHandler}>
          {text}
          <span
            className={s.tooltip}
            style={{ top: positionY + "px", left: positionX + "px" }}
          >
            {text}
          </span>
        </p>
      </div>
  )
}
