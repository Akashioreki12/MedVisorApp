import React from 'react';
import Svg, { Path } from "react-native-svg";
function GovernmentIcon({color}) {
    return (
        <Svg
      width={42}
      height={39}
      viewBox="0 0 42 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M42 37.062v1.488H0v-1.485a1.443 1.443 0 011.44-1.444h1.246a1.508 1.508 0 01-.006-.145v-1.343a1.443 1.443 0 011.44-1.44h1.243V21.728h-.93a1.68 1.68 0 010-3.36h33.235a1.68 1.68 0 110 3.36h-.885v10.965h1.097a1.443 1.443 0 011.44 1.44v1.343c0 .049-.003.097-.009.145h1.249a1.443 1.443 0 011.44 1.44zM36.786 15.71a15.71 15.71 0 10-31.42 0h31.42zM8.93 32.693h3.362V23.41a1.68 1.68 0 10-3.362 0v9.283zm6.955-9.256v9.256h3.362v-9.256a1.681 1.681 0 10-3.362 0zm6.954.025v9.23h3.362v-9.23a1.681 1.681 0 00-3.362 0zm6.955.024v9.207h3.362v-9.207a1.68 1.68 0 10-3.362 0z"
        fill={color}
      />
    </Svg>
    );
}

export default GovernmentIcon;