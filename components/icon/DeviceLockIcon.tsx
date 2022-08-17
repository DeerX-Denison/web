import React from "react";
import { FC } from "react";

const DeviceLockIcon:FC=(props)=> {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
        <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z"
          fill="#171717"
        />
      </svg>
    )
  }
export default DeviceLockIcon;