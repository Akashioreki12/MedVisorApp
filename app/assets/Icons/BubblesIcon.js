import React from 'react';
import Svg, { Circle, Path } from "react-native-svg"
function BubblesIcon(props) {
    return (
         <Svg
      width={95}
      height={144}
      viewBox="0 0 95 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={59.5} cy={108.5} r={35.5} fill="#1578DA" fillOpacity={0.2} />
      <Circle cx={59.5} cy={108.5} r={26.5} fill="#1578DA" />
      <Circle cx={7} cy={77} r={4} fill="#1578DA" />
      <Circle cx={4} cy={33} r={4} fill="#1578DA" />
      <Circle cx={84.5} cy={62.5} r={2.5} fill="#1578DA" />
      <Circle cx={59.5} cy={2.5} r={2.5} fill="#1578DA" fillOpacity={0.2} />
      <Circle cx={38.5} cy={15.5} r={2.5} fill="#1578DA" fillOpacity={0.2} />
      <Circle cx={36.5} cy={44.5} r={7.5} fill="#1578DA" />
      <Path
        d="M57.05 116.095h-.02a.922.922 0 01-.688-.331l-6.128-7.354a.92.92 0 011.413-1.176l5.448 6.537 10.321-11.467a.921.921 0 011.368 1.231l-11.03 12.256a.92.92 0 01-.685.304z"
        fill="#fff"
      />
      <Circle cx={68.5} cy={25.5} r={7.5} fill="#1578DA" fillOpacity={0.2} />
    </Svg>
    );
}

export default BubblesIcon;
