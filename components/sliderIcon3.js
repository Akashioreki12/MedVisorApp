import * as React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={55}
      height={10}
      viewBox="0 0 55 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={4.9602} cy={5.16284} r={4.62933} fill="#D9D9D9" />
      <Circle cx={18.848} cy={5.16266} r={4.62933} fill="#D9D9D9" />
      <Rect
        x={28.1069}
        y={1.69086}
        width={26.6187}
        height={6.944}
        rx={3.472}
        fill="#1578DA"
      />
    </Svg>
  );
}

export default SvgComponent;
