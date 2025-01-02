import {
  View,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { poppinsFontBody, poppinsFontTitle } from "@/constants/Fonts";
import { Input, Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function RequestEnquiryTabScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchCard}>
          <Text style={styles.infoText}>
            Geçmiş taleplerinizi sorgulamak için lütfen TC kimlik numaranızı ve
            talep sonrasında size verilen takip numarasını giriniz
          </Text>

          <Input
            placeholder="TC Kimlik No"
            maxLength={11}
            leftIcon={
              <Icon name="person-search" size={20} color={Colors.primary} />
            }
            keyboardType="number-pad"
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputInnerContainer}
            inputStyle={styles.input}
          />

          <Input
            maxLength={8}
            placeholder="Takip Numarası"
            leftIcon={<Icon name="numbers" size={20} color={Colors.primary} />}
            keyboardType="number-pad"
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputInnerContainer}
            inputStyle={styles.input}
          />

          <Button
            title="Sorgula"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: poppinsFontTitle,
    color: Colors.primary,
    flex: 1,
  },
  searchCard: {
    backgroundColor: Colors.background,
    borderRadius: 15,
    padding: 15,
    elevation: 3,
    marginTop: 15,
  },
  inputContainer: {
    paddingHorizontal: 0,
  },
  inputInnerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    paddingStart: 10,
    borderColor: Colors.primary,
    justifyContent: "center",
  },
  input: {
    fontFamily: poppinsFontBody,
    fontSize: 11,
    textAlign: "left",
  },
  infoText: {
    fontFamily: poppinsFontBody,
    fontSize: 12,
    color: Colors.title,
    textAlign: "center",
    marginVertical: 15,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 5,
  },
  buttonText: {
    fontFamily: poppinsFontBody,
    fontSize: 16,
    marginRight: 10,
  },
});
