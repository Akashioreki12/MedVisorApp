import React from 'react';
import Svg, { Path } from "react-native-svg";


function UnknownIcon({color}) {
    return (
       <Svg
      width={39}
      height={39}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M19.32 30.36a2.07 2.07 0 100-4.14 2.07 2.07 0 000 4.14zM20.7 23.46h-2.76v-5.52h2.76a2.76 2.76 0 000-5.52h-2.76a2.763 2.763 0 00-2.76 2.76v.69h-2.76v-.69a5.527 5.527 0 015.52-5.52h2.76a5.52 5.52 0 110 11.04v2.76z"
        fill={color}
      />
      <Path
        d="M19.32 38.64a2.868 2.868 0 01-2.033-.841L.84 21.353a2.878 2.878 0 010-4.066L17.287.84a2.878 2.878 0 014.066 0l16.446 16.446a2.878 2.878 0 010 4.066L21.353 37.799a2.866 2.866 0 01-2.033.84zm0-35.881c-.03 0-.06.012-.082.034L2.793 19.238a.116.116 0 000 .163l16.445 16.446a.116.116 0 00.163 0l16.446-16.446a.116.116 0 000-.163L19.401 2.793a.116.116 0 00-.081-.034z"
        fill={color}
      />
    </Svg>
    );
}

export default UnknownIcon;