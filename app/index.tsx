import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Link } from "expo-router";
import { Button } from "@rneui/themed";
import { router } from "expo-router";
import { loadFonts } from "@/constants/Fonts";
/**
 * useSafeAreaInsets is a hook that returns the safe area insets of the device.
 * it is used to add padding what status bar takes.
 *
 */

export default function Index() {

  const fontsReady = loadFonts();

  useEffect(() => {
    // Set timeout for 3 seconds then navigate
    const timer = setTimeout(() => {
      router.replace("/login"); // Replace instead of push to clear the stack
    }, 3000);

    // Cleanup timeout if component unmounts
    return () => clearTimeout(timer);
  }, [fontsReady]);

  return (
  
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={require("../assets/images/splash-logo.png")}
          resizeMode="contain"
        />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
    justifyContent: "center",
  },
  imageContainer: {
    width: 160,
    height: 160,
  },
});
