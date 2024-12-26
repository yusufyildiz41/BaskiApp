import { Button } from "@rneui/themed";
import { Colors } from "@/constants/Colors";
import { poppinsFontBody } from "@/constants/Fonts";
import { StyleSheet } from "react-native";

interface LoginButtonProps {
  buttonText: string;
  onPress: () => void;
}

export const LoginButton = ({ buttonText, onPress }: LoginButtonProps) => {
  return (
    <Button
      title={buttonText}
      onPress={onPress}
      containerStyle={styles.buttonContainer}
      buttonStyle={styles.button}
      titleStyle={styles.buttonTitle}
    />
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    alignItems: "center",
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
