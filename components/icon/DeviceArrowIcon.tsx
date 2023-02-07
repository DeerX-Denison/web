import React from "react";
import { FC } from 'react';

interface Props{
  className: string,
}
const DeviceArrowIcon : FC<Props> = (props) => {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
          fill="#737373"
        />
        <path
          d="M12 25l8-8m0 0h-6m6 0v6"
          stroke="#171717"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      </svg>
    )
}
export default DeviceArrowIcon;