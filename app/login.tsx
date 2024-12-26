import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { useState, useEffect, useRef, useCallback } from "react";
import { loadFonts } from "@/constants/Fonts";
import { EmailInput } from "@/components/login/EmailInput";
import { PasswordInput } from "@/components/login/PasswordInput";
import { LoginButton } from "@/components/login/LoginButton";
import { router } from "expo-router";
import { poppinsFontTitle, poppinsFontBody, poppinsFontSmall } from "@/constants/Fonts";
function Login() {
  const { top } = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, { paddingTop: top }]}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.appNameText}>BASKİ</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>
            Baski uygulamasına hoşgeldiniz. Lütfen giriş yapınız.
          </Text>
        </View>

        <EmailInput
          value={email}
          onChangeText={setEmail}
          placeholder="E-Posta veya TC Kimlik No"
        ></EmailInput>

        <PasswordInput
          value={password}
          onChangeText={setPassword}
          placeHolder="Şifrenizi Giriniz"
        ></PasswordInput>

        <LoginButton

          buttonText="Giriş Yap"
          onPress={() => {
            router.replace("/(tabs)/home")
          }}
        ></LoginButton>

        <View style={styles.notAnAccountContainer}>
          <Text style={styles.notAnAccountText}>Hesabın yok mu? </Text>
          <Pressable onPress= {() => router.push("/register")}>
            <Text style={styles.registerText}>Kayıt ol</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  appNameText: {
    fontFamily: poppinsFontTitle,
    fontSize: 40,
    color: Colors.primary,
    textAlign: "center",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  greetingText: {
    fontFamily: poppinsFontTitle,
    fontSize: 16,
    marginHorizontal: 20,
    textAlign: "center",
    color: Colors.title
  },
  inputContainer: {
    fontSize: 16,
    textAlign: "left",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  loginButtonContainer: {
    width: "100%",
    alignItems: "center",
  },
  notAnAccountContainer: {
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  notAnAccountText: {
    fontFamily: poppinsFontBody,
    fontSize: 12,
  },
  registerText: {
    fontFamily: poppinsFontBody,
    fontSize: 12,
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});
