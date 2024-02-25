import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";


function SvgComponent(props) {
  return (
    <Svg
      width={298}
      height={327}
      viewBox="0 0 338 327"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        opacity={0.8}
        x={24}
        y={70}
        width={32}
        height={34}
        rx={16}
        fill="#1578DA"
      />
      <Rect
        opacity={0.8}
        x={273}
        y={17}
        width={11}
        height={12}
        rx={5.5}
        fill="#1578DA"
      />
      <Rect
        opacity={0.8}
        x={106}
        width={10}
        height={11}
        rx={5}
        fill="#1578DA"
      />
      <Path
        opacity={0.8}
        d="M315 112c0-6.075 4.925-11 11-11s11 4.925 11 11v2c0 6.075-4.925 11-11 11s-11-4.925-11-11v-2z"
        fill="#1578DA"
      />
      <Rect
        opacity={0.8}
        width={34}
        height={35}
        rx={17}
        transform="matrix(1 0 0 -1 0 256)"
        fill="#1578DA"
      />
      <Rect
        opacity={0.8}
        width={12}
        height={12}
        rx={6}
        transform="matrix(1 0 0 -1 269 310)"
        fill="#1578DA"
      />
      <Rect
        opacity={0.8}
        width={11}
        height={12}
        rx={5.5}
        transform="matrix(1 0 0 -1 88 327)"
        fill="#1578DA"
      />
      <Path
        opacity={0.8}
        d="M314 212c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12z"
        fill="#1578DA"
      />
    </Svg>
  );
}

export default SvgComponent;
