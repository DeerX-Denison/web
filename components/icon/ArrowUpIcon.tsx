import React from "react";
import { FC } from 'react';

interface Props{
  className: string
  width: number,
  // onClick: any,
}
const ArrowUpIcon : FC<Props> = (props) => {
    return (
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAk0lEQVRIie3UQQrCMBCF4S/qDXpMF3oUwdqFHs0zeASpmwihWkyTusuDQJIZ/jcThtDUVKuwMPcY9yeMaxfSR+iIGzb/gq9qEjAk0Etc7/Ng2TN/wNPKr/Eu4Kyykzl4Gi82+QWvMsmFF5l8g+e0nW2SwpdOx3Ta+mlCVwGfM+lgF4MPHLBV/g2M2OOOZ2Q2Na2gF4pwQ0nCrOImAAAAAElFTkSuQmCC"
        style={{width: `${props.width}px`}}
        className={props.className}
      ></img>
    )
}
export default ArrowUpIcon;