import * as React from "react"
import Svg, {Path} from "react-native-svg"

const Searchicon = () => (
    <Svg
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
>
        <Path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.947 9.947 0 0 0 23 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z" />
    </Svg>
)

export default Searchicon
