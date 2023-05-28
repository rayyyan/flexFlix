import React from "react"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Path, Svg } from "react-native-svg"
import { CONSTANTS } from "../../utils"
interface IMenu extends TouchableOpacityProps {}
export const Menu = React.memo((props: IMenu) => {
  const { style, ...otherProps } = props
  return (
    <TouchableOpacity
      {...props}
      style={[style, { marginRight: -CONSTANTS.Screen_Padding * 0.8 }]}
    >
      <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
        <Path
          d="M9.25 4.848C9.25 7.09 7.37 8.947 5 8.947S.75 7.09.75 4.848C.75 2.607 2.63.75 5 .75s4.25 1.857 4.25 4.098zM9.25 15.848c0 2.242-1.88 4.099-4.25 4.099S.75 18.09.75 15.849c0-2.242 1.88-4.099 4.25-4.099s4.25 1.857 4.25 4.098zM20.25 15.848c0 2.242-1.88 4.099-4.25 4.099s-4.25-1.857-4.25-4.098c0-2.242 1.88-4.099 4.25-4.099s4.25 1.857 4.25 4.098zM20.25 4.848c0 2.242-1.88 4.099-4.25 4.099s-4.25-1.857-4.25-4.099C11.75 2.607 13.63.75 16 .75s4.25 1.857 4.25 4.098z"
          stroke="#fff"
          strokeWidth={1.5}
        />
        <Path stroke="#fff" strokeWidth={0.2} d="M9 3.9L11 3.9" />
        <Path stroke="#fff" strokeWidth={0.2} d="M9 15.9L11 15.9" />
        <Path
          stroke="#fff"
          strokeWidth={0.2}
          d="M15.9234 12.0008L15.9 9.00078"
        />
        <Path
          stroke="#fff"
          strokeWidth={0.2}
          d="M4.92344 12.0008L4.9 9.00078"
        />
      </Svg>
    </TouchableOpacity>
  )
})
