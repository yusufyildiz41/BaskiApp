import { CheckBox } from "@rneui/themed";
import { poppinsFontBody } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { useState } from "react";

interface AgreementCheckInputProps {
  setIsAgreementChecked: (value: boolean) => void;
  placeholder: string;
}

export const AgreementCheckInput = ({
  setIsAgreementChecked,
  placeholder,
}: AgreementCheckInputProps) => {
  const [isChecked, setIsChecked] = useState(false);

  function checkHandler() {
    setIsChecked(!isChecked);
    setIsAgreementChecked(!isChecked);
  }

  return (
    <CheckBox
      containerStyle={styles.checkBoxContainer}
      textStyle={{
        fontFamily: poppinsFontBody,
      }}
      title={placeholder}
      checked={isChecked}
      onPress={checkHandler}
    ></CheckBox>
  );
};

const styles = StyleSheet.create({
  checkBoxContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: "transparent",
  },
});
