import React from "react";
import { FC } from "react";
import { useId } from 'react'

const DeviceCardsIcon : FC = (props) =>{
    let id = useId()
  
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
          fill="#C8102E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
          // fill={`url(#${id}-gradient)`}
          fill="#F18D9E"
        />
        <rect x={9} y={6} width={14} height={4} rx={1} fill="#C8102E" />
        <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
        <defs>
          <linearGradient
            id={`${id}-gradient`}
            x1={16}
            y1={12}
            x2={16}
            y2={28}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F18D9E" />
            <stop offset={1} stopColor="#F18D9E" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    )
  }
export default DeviceCardsIcon;