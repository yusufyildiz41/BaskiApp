import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { poppinsFontBody, poppinsFontSmall } from "@/constants/Fonts";

interface EmailRegisterInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export const EmailRegisterInput = ({
  value,
  onChangeText,
  placeholder,
}: EmailRegisterInputProps) => {
  return (
    <Input
      inputMode="email"
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      inputContainerStyle={{
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: -10,
        paddingVertical: 5,
      }}
      inputStyle={{
        fontFamily: poppinsFontBody,
        fontSize: 14,
        textAlign: "left",
      }}
      leftIcon={
        <Icon
          name="mail"
          size={24}
          color={Colors.primary}
          style={{
            marginLeft: 10,
          }}
        ></Icon>
      }
      leftIconContainerStyle={{
        justifyContent: "center",
      }}
    ></Input>
  );
};
