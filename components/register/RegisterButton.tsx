import { Button } from "@rneui/themed";
import { Colors } from "@/constants/Colors";
import { poppinsFontBody } from "@/constants/Fonts";
import { StyleSheet } from "react-native";

interface RegisterButtonProps {
  buttonText: string;
  onPress: () => void;
}

export const RegisterButton = ({
  buttonText,
  onPress,
}: RegisterButtonProps) => {
  return (
    <Button
      title={buttonText}
      onPress={onPress}
      containerStyle={styles.buttonContainer}
      buttonStyle={styles.button}
      titleStyle={styles.buttonTitle}
    ></Button>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 8,
    marginTop: 10,
    width: "80%",
  },
  buttonTitle: {
    fontFamily: poppinsFontBody,
    fontSize: 16,
    color: Colors.background,
    textAlign: "center",
  },
});
