import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Tab, TabView } from "@rneui/themed";
import { useState, useRef, useEffect } from "react";
import { Icon } from "@rneui/themed";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { TabItem } from "@rneui/base/dist/Tab/Tab.Item";
import { poppinsFontBody, poppinsFontTitle, poppinsFontSmall } from "@/constants/Fonts";
import AddRequestTabScreen from "@/components/bill_transactions/AddRequestTabScreen";
import RequestEnquiryTabScreen from "@/components/bill_transactions/RequestEnquiryTabScreen";

export default function BillObjectionFormScreen() {
  const { top } = useSafeAreaInsets();
  const [index, setIndex] = useState(0);

  console.log(index);

  return (
    <SafeAreaView style={[styles.container, { paddingTop: top + 20 }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon name="arrow-back-ios" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Fatura Talep Formu</Text>
      </View>
      
      <Tab
        style={styles.tabContainer}
        value={index}
        onChange={(e) => setIndex(e)}
        disableIndicator={true}
        variant="primary"
      >
        <TabItem
          title="Talep Ekle"
          titleStyle={{ fontSize: 14 }}
          containerStyle={
            index === 0 ? styles.selectedTab : styles.unselectedTab
          }
        />
        <TabItem
          title="Talep Sorgula"
          titleStyle={{ fontSize: 14 }}
          containerStyle={
            index === 1 ? styles.selectedTab : styles.unselectedTab
            
          }
        />
      </Tab>
      {index === 0 ? <AddRequestTabScreen /> : <RequestEnquiryTabScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: "transparent",
    gap: 5
  },
  selectedTab: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  unselectedTab: {
    backgroundColor: "#CECCCC",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: poppinsFontTitle,
    color: Colors.primary,
  },
});
