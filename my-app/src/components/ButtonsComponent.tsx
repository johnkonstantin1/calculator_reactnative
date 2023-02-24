import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Context } from "../theme/Theme";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: Boolean;
  isGray?: Boolean;
}

export default function Button({
  title,
  isBlue,
  isGray,
  onPress,
}: ButtonProps) {
  const theme = useContext(Context);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === "light"
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextDark
            : Styles.smallTextLight
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
