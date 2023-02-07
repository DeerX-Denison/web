import React from "react";
import { FC } from "react";

const DeviceChartIcon:FC=(props) => {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z"
          fill="#171717"
        />
        <path
          d="M10 12h12"
          stroke="#737373"
          strokeWidth={2}
          strokeLinecap="square"
        />
        <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      </svg>
    )
  }

export default DeviceChartIcon;
  