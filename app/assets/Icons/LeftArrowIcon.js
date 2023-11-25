import React from 'react';
import Svg, {Path} from "react-native-svg";


function LeftArrowIcon(props) {
    return (
        <Svg
      width={26}
      height={26}
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.429 10.714l8.142 8c.572.572 1.429.572 2 0 .572-.571.572-1.428 0-2l-7-7.143 7-7.142c.572-.572.572-1.429 0-2C10.286.143 10 0 9.571 0c-.428 0-.714.143-1 .429l-8.142 8c-.572.714-.572 1.571 0 2.285 0-.143 0-.143 0 0z"
        fill="#010101"
      />
    </Svg>
    );
}

export default LeftArrowIcon;