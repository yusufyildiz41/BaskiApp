import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";
import { poppinsFontBody, poppinsFontSmall } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";

interface PhoneNumberInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export const PhoneNumberInput = ({
  value,
  onChangeText,
  placeholder,
}: PhoneNumberInputProps) => {
  return (
    <Input
      inputMode="tel"
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      inputContainerStyle={{
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
          name="call"
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
