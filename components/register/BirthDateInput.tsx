import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";
import { poppinsFontBody } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";

interface BirthDateInputProps {
  value: string | null;
  onContainerClicked: () => void;
  placeHolder: string;
}

export const BirthDateInput = ({
  value,
  onContainerClicked,
  placeHolder,
}: BirthDateInputProps) => {
  return (
    <Input
      inputMode="none"
      value={value || ""}// if value is null, then it will be an empty string
      onPress={onContainerClicked}
      placeholder={placeHolder}
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
          name="calendar-month"
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
