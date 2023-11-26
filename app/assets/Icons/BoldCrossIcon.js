import React from 'react';
import Svg, { Path } from "react-native-svg";


function BoldCrossIcon({color}) {
    return (
         <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.126 12.575l8.27 8.27a2.508 2.508 0 01-1.774 4.285 2.506 2.506 0 01-1.774-.736l-8.27-8.27-8.27 8.27a2.512 2.512 0 01-3.558.008 2.51 2.51 0 01.007-3.557l8.271-8.27-8.29-8.29A2.508 2.508 0 012.512 0a2.5 2.5 0 011.775.736l8.29 8.29 8.27-8.27A2.502 2.502 0 0122.622.02a2.508 2.508 0 011.774 4.284l-8.27 8.27z"
        fill={color}
      />
    </Svg>
    );
}

export default BoldCrossIcon;