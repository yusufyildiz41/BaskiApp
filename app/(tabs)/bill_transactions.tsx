import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { poppinsFontTitle } from "@/constants/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import TransactionCardItem, {
  ItemType,
} from "@/components/bill_transactions/TransactionCardItem";

export default function BillTransactions() {
  const { top } = useSafeAreaInsets();
  let screenName: string;

  const handleClickedItem = (itemType: ItemType) => {
    // how to
     switch(itemType) {
      case ItemType.BILL_ENQUIRY:
        router.push("/(bill_transaction)/BillEnquiryScreen");
        break;
      case ItemType.BILL_PAYMENT:
        router.push("/(bill_transaction)/BillPaymentScreen");
        break;
    }
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: top + 20 }]}>
      <TransactionCardItem
        label="Fatura Sorgula"
        icon="query-stats"
        onPress={handleClickedItem}
        itemType={ItemType.BILL_ENQUIRY}
      />
      <TransactionCardItem
        label="Fatura Ödeme"
        icon="credit-card"
        onPress={handleClickedItem}
        itemType={ItemType.BILL_PAYMENT}
      />

      <TransactionCardItem
        label="Fatura Hareketleri"
        icon="timeline"
        onPress={handleClickedItem}
        itemType={ItemType.BILL_MOVEMENT}
      />
      <TransactionCardItem
        label="Fatura Ödeme Geçmişi"
        icon="history"
        onPress={handleClickedItem}
        itemType={ItemType.BILL_PAYMENT_HISTORY}
      />

      <TransactionCardItem
        label="Fatura İtiraz Formu"
        icon="report"
        onPress={handleClickedItem}
        itemType={ItemType.BILL_OBJECTION_FORM}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    gap: 15,
  },
});
