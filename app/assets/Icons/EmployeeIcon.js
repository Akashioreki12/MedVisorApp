import React from 'react';
import Svg, { Path } from "react-native-svg"

function EmployeeIcon({color}) {
    return (
         <Svg
      width={32}
      height={40}
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.7 10.01c0 6.318-3.816 11.74-8.897 11.74-5.086 0-8.898-5.422-8.898-11.741C6.905 3.693 10.187 0 15.803 0 21.418 0 24.7 3.692 24.7 10.01zM.187 35.872c.76.905 4.04 3.674 15.616 3.674 11.577 0 14.853-2.769 15.616-3.672a.822.822 0 00.178-.627c-.174-1.744-1.744-9.542-15.794-9.542S.183 33.502.007 35.246a.823.823 0 00.18.625z"
        fill={color}
      />
    </Svg>
    );
}
export default EmployeeIcon;