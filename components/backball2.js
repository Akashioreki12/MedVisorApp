import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
     
      viewBox="0 0 344 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.972 214.25c9.832-84.192 130.488-88.069 131.504-88.299 1.047-.238 2.12-.451 3.162-.657 2.117-.418 4.179-1.034 6.282-1.454 1.283-.258 2.393-.877 3.618-1.235a37.16 37.16 0 006.763-2.77 9.745 9.745 0 012.743-1.021c.733-.135 1.007-.832 1.668-1.07 1.071-.385 2.074-.947 3.114-1.414a1.01 1.01 0 00.728-.719l.952.226c.372-.17-.09-.296.019-.506.409-.232.789-.585 1.367-.558.543.027.666-.586 1.161-.743 1.074-.345 1.745-1.576 3.082-1.401.701-.859 1.771-1.197 2.651-1.804.409-.317.918-.48 1.437-.461l.12.007c.51.065.508-.919 1.175-.576 1.306-1.353 3.203-1.523 4.828-2.128 2.608-.971 5.154-2.143 7.949-2.683 1.398-.27 2.77-.951 4.189-1.253 3.189-.679 6.336-1.574 9.61-1.875 1.352-.124 2.676-.545 4.03-.656l1.566-.129c2.349-.189 4.701-.353 7.061-.369a2.986 2.986 0 011.605.188c.569.317 1.028-.296 1.633-.279.719.017 1.359.375 2.137.262.429-.062 1.084.127 1.581.056 1.617-.231 3.174.482 4.784.214a4.155 4.155 0 011.766.391c1.882.535 3.907.194 5.713.981.893.374 1.86.539 2.824.482l.373-.028c.276-.019.543-.021.709.13.659.602 1.523.568 2.297.763l.128.034c.864.252 1.805.207 2.672.573.837.46 1.749.77 2.695.915 1.626.056 3.009.759 4.466 1.26.728.25 1.632.219 2.093 1.093.235.444.897-.463 1.242.175l.035.074c.198.461.6.489 1.093.423.451-.06.666.728 1.139.565.473-.163 1.137-.184 1.19.077.136.653.906.095.976.638.022.056.07.097.128.114 1.661.376 2.917 1.603 4.568 2.063a8.252 8.252 0 012.687 1.463c.776.553 1.597 1.04 2.454 1.459 1.434.767 2.572 1.925 4.001 2.67.387.202.131 1.218 1.024.79.145.628.8.519 1.168.807.268.302.487.642.65 1.009.865.327 1.64.849 2.263 1.525a44.712 44.712 0 014.027 3.916l1.032 1.145c1.376 1.53 2.713 3.1 3.563 5.004.218.49.758.341.994.751 1.383 2.374 3.006 4.602 3.957 7.23.399 1.101 1.218 2.1 1.636 3.225.791 2.134 1.852 4.153 2.401 6.4l.091.399c.304 1.426.849 2.859 1.197 4.311a38.095 38.095 0 011.309 9.166l-.007 1.904c-.008 1.693-.03 3.385-.18 5.078-.071.801-.418 1.537-.411 2.279a5.153 5.153 0 01-.421 2.103c-.218.526.203 1.041-.121 1.597a1.61 1.61 0 00-.294 1.477l.034.101c.131.297-.235.808-.381 1.22a8.978 8.978 0 01-.666 1.756c-.266.429.351 1.087-.414 1.319.386.626-13.59 38.532 1.356 76.596 1.624 3.147 2.088 6.663 3.25 9.959.542 1.532.676 3.199.979 4.816l.068.346c.583 2.86.87 5.756 1.186 8.652a60.17 60.17 0 01.269 7.998c-.047 1.92-.189 3.838-.2 5.758-.005.779-.643 1.468-.258 2.275-.665 1.635-.305 3.476-1.03 5.099.207 1.16-.334 2.164-.763 3.158-.329.759.076 1.557-.365 2.311a4.606 4.606 0 00-.804 2.286c.052 1.378-.59 2.496-1 3.698a253.528 253.528 0 01-3.01 8.325c-.345.903-.376 1.96-1.193 2.673-.717.626-.448 1.777-1.278 2.377-.302.219.189.601-.061.955-.489.69-.334 1.668-1.14 2.273-.597.447-.346 1.453-1.061 1.942l-.103.063c-.51.279.497 1.288-.582 1.426-.205 1.042-.889 1.845-1.398 2.735-.42.737-.34 1.674-1.109 2.294-.654.528-.356 1.706-1.293 2.12-.158 1.263-1.228 2.083-1.622 3.258-.351.886-.82 1.721-1.397 2.483a82.672 82.672 0 00-2.382 3.717c-.281.45-.587.884-.916 1.3-.179.234-.517.257-.64.607-.778 2.215-2.349 3.972-3.755 5.778a23.66 23.66 0 01-2.377 2.937l-.293.302c-.291.264-.488.858-.875 1.075-1.077.603-1.688 1.622-2.398 2.528l-.12.15c-.393.511-.86.963-1.385 1.341-.1.071-.301.082-.333.167-.595 1.571-2.067 2.379-3.162 3.506-.941.969-2.045 1.785-3 2.736l-.35.364c-2.071 2.245-35.236 25.59-40.774 28.028l-1.585.697c-1.587.696-3.184 1.381-4.803 1.994l-1.378.522c-1.381.521-2.77 1.03-4.172 1.46l-1.873.575c-3.747 1.147-7.507 2.258-11.339 3.131-3.419.779-6.868 1.352-10.321 1.933a81.843 81.843 0 01-6.669.836c-3.574.302-7.154.525-10.738.67-3.375.131-6.716-.453-10.073-.143-1.959-.689-4.099-.093-6.048-.846-1.037.268-2.028-.19-3.002-.34-1.005-.155-2.089-.056-3.066-.572-.444-.236-1.052.119-1.593-.175a1.83 1.83 0 00-1.521-.257c-.236-.712-.815.036-1.232-.297a2.633 2.633 0 00-1.591-.57c-1.305.046-2.404-.819-3.577-.826-1.201-.006-2.138-.698-3.2-.821l-.2-.016c-1.406-.063-2.341-1.166-3.655-1.353-.116-.016-.191-.297-.288-.457-.302.012-.273.343-.53.545a5.368 5.368 0 00-.995-1.08 8.817 8.817 0 00-1.692-.628l-1.326.787c-.657-.424-1.305-.379-1.799-.901-.215-.227-.958-.201-1.459-.284-.658-.11-.955-.993-1.501-.852a2.798 2.798 0 01-1.79-.354 2002.593 2002.593 0 01-15.651-5.536c-.559-.198-1.294-.169-1.549-.903-.885.666-1.024-.559-1.654-.651a4.136 4.136 0 01-1.568-.848c-.866-.581-2.005-.759-3.012-1.15a3.987 3.987 0 01-1.925-1.025c-.433-.52-1.289-.552-1.931-.98a11.01 11.01 0 00-2.511-1.443 3.635 3.635 0 01-1.734-.968c-.37-.417-1.261-.214-1.49-.966-1.176-.341-2.057-1.159-3.048-1.803l-.187-.119a75.974 75.974 0 01-7.356-5.232c-1.974-1.571-3.976-3.109-5.935-4.699a36.376 36.376 0 01-1.85-1.617 79.622 79.622 0 01-6.23-6.184c-1.684-1.975-3.463-3.877-5.064-5.931-.852-1.091-1.945-2.031-2.86-3.101-2.161-2.523-4.25-5.099-6.204-7.779a44.914 44.914 0 01-4.732-7.315c-.327-.698-.854-1.302-1.226-1.982a18.43 18.43 0 00-1.185-2.358c-.678-.9-1.054-1.95-1.676-2.851-.481-.7-.046-1.677-.993-2.248-.689-.416-.278-1.624-1.08-2.14.096-1.148-.967-1.814-1.216-2.895l-.027-.144c-.176-1.13-.965-2.168-1.484-3.246a26.783 26.783 0 01-1.532-3.253c-.673-2.079-1.85-3.943-2.558-5.981-.673-1.943-1.78-3.75-2.041-5.814-.062-.487-.497-.449-.64-.796-.15-.361.02-.719-.164-1.051-.693-1.366-29.403-13.31-19.571-97.501z"
        fill="#1578DA"
      />
      <Rect
        opacity={0.8}
        x={5.7334}
        y={69.9468}
        width={34.4}
        height={34.4}
        rx={17.2}
        fill="#1578DA"
      />
      <Rect
        opacity={0.8}
        x={275.2}
        y={17.2002}
        width={11.4667}
        height={11.4667}
        rx={5.73333}
        fill="#1578DA"
      />
      <Rect
        opacity={0.8}
        y={184.613}
        width={11.4667}
        height={11.4667}
        rx={5.73333}
        fill="#1578DA"
      />
      <Rect
        opacity={0.8}
        x={94.0273}
        width={11.4667}
        height={11.4667}
        rx={5.73333}
        fill="#1578DA"
      />
      <Path
        opacity={0.8}
        d="M319.921 112.947c0-6.65 5.39-12.04 12.04-12.04 6.649 0 12.04 5.39 12.04 12.04 0 6.649-5.391 12.04-12.04 12.04-6.65 0-12.04-5.391-12.04-12.04z"
        fill="#1578DA"
      />
    </Svg>
  );
}

export default SvgComponent;