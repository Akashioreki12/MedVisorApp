import React from 'react';
import Svg, { Path } from "react-native-svg";

function CrossMarkIcon(props) {
    return (
        <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.807 3.807l18.386 18.386M3.807 22.194L22.193 3.806"
        stroke="#010101"
        strokeWidth={1.625}
        strokeMiterlimit={10}
      />
    </Svg>
    );

}

export default CrossMarkIcon;

