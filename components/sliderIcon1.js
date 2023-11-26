import * as React from "react";
import Svg, { Rect, Circle } from "react-native-svg";

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
      <Rect
        x={0.616272}
        y={1.91187}
        width={26.312}
        height={6.864}
        rx={3.432}
        fill="#1578DA"
      />
      <Circle cx={36.0803} cy={5.3437} r={4.576} fill="#D9D9D9" />
      <Circle cx={49.8083} cy={5.34388} r={4.576} fill="#D9D9D9" />
    </Svg>
  );
}

export default SvgComponent;
