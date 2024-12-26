import { View, Text, StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function BillEnquiryScreen() {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <SafeAreaView style = {{
      flex: 1,
      paddingTop: top + 10
    }}>
      <Text>Bill Enquiry Screen</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  }
})
