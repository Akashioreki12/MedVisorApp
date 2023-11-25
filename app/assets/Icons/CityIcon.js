import React from 'react';
import Svg, { Path } from "react-native-svg"

function CityIcon({color}) {
    return (
        <Svg
      width={43}
      height={43}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3.023 12.765V25.7H0v12.262h13.27V12.766H3.023zm6.383 19.317h-2.52v-2.52h2.52v2.52zm-2.52-6.383v-2.52h2.52v2.52h-2.52zM43 6.383H32.586v17.972h6.383V37.793H43V6.383zm-3.863 12.765h-2.52v-2.52h2.52v2.52zm0-6.383h-2.52v-2.519h2.52v2.52zM31.242 25.7V0H20.996v6.383h-6.383v35.945h23.012V25.699h-6.383zm-10.246 0h-2.52v-2.52h2.52v2.52zm0-6.55h-2.52v-2.52h2.52v2.52zm6.383 19.316h-2.52v-2.52h2.52v2.52zm0-6.383h-2.52v-2.52h2.52v2.52zm0-6.383h-2.52v-2.52h2.52v2.52zm0-12.934h-2.52v-2.519h2.52v2.52zm6.383 25.7h-2.52v-2.52h2.52v2.52zm0-6.383h-2.52v-2.52h2.52v2.52z"
        fill={color}
      />
    </Svg>
    );
}

export default CityIcon;