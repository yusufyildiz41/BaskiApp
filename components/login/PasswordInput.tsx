// export means that this component can be used in other files
// const means that this component can only be used in this file
// {} means that the component can take props
// () means that the component can take props
// => means that the component returns a value
import { useState } from "react";
import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { poppinsFontBody } from "@/constants/Fonts";

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeHolder: string;
}

export const PasswordInput = ({
  value,
  onChangeText,
  placeHolder,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      value={value}
      onChangeText={onChangeText}
      placeholder={placeHolder}
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
      secureTextEntry={!showPassword}
      leftIcon={
        <Icon
          name="lock"
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
      rightIcon={
        <Icon
          name={showPassword ? "visibility" : "visibility-off"}
          size={24}
          color={Colors.primary}
          onPress={() => setShowPassword(!showPassword)}
        />
      }
      rightIconContainerStyle={{
        justifyContent: "center",
        marginRight: 10,
      }}
    ></Input>
  );
};
