import React from "react";
import { FC } from "react";

const DeviceListIcon:FC=(props) =>{
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
          fill="#C8102E"
        />
        <circle cx={11} cy={14} r={2} fill="#F18D9E" />
        <circle cx={11} cy={20} r={2} fill="#F18D9E" />
        <circle cx={11} cy={26} r={2} fill="#F18D9E" />
        <path
          d="M16 14h6M16 20h6M16 26h6"
          stroke="#F18D9E"
          strokeWidth={2}
          strokeLinecap="square"
        />
        <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      </svg>
    )
  }
export default DeviceListIcon;