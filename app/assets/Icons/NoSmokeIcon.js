import React from 'react';
import Svg, { Path } from "react-native-svg";

function NoSmokeIcon({color}) {
    return (
        <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M21.91 18.037l1.826 1.825v-6.169H21.91v4.344zM26.931 13.693h-1.826v6.847h1.826v-6.847zM20.738 6.507a3.658 3.658 0 00-.266 4.393l.34.511h2.195l-1.015-1.523a1.824 1.824 0 01.132-2.192 3.637 3.637 0 00.199-4.49l-.334-.468h-2.087l-.104.074 1.039 1.455a1.815 1.815 0 01-.1 2.24zM24.846 6.507a3.658 3.658 0 00-.265 4.393l.34.511h2.195L26.1 9.888a1.824 1.824 0 01.133-2.192 3.637 3.637 0 00.198-4.49l-.334-.468H24.01l-.104.074 1.04 1.455a1.815 1.815 0 01-.1 2.24zM14.985 13.694L2.205.914H.912v1.29l11.49 11.49H.913v6.847H19.25l7.76 7.76h1.29V27.01L14.986 13.694zM2.739 18.715V15.52h11.49l3.195 3.195H2.739z"
        fill={color}
      />
    </Svg>
    );
}

export default NoSmokeIcon;