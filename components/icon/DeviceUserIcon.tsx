import React from "react";
import { FC } from "react";

interface Props{
    className: string,
}

const DeviceUserIcon:FC<Props> = (props)=>{
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
        <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
          fill="#F18D9E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
          fill="#C8102E"
        />
      </svg>
    )
  }
export default DeviceUserIcon;