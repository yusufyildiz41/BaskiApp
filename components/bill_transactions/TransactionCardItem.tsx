import { Pressable, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { poppinsFontTitle } from "@/constants/Fonts";

export enum ItemType {
  BILL_ENQUIRY = "BillEnquiryScreen",
  BILL_PAYMENT = "BillPaymentScreen",
  BILL_PAYMENT_HISTORY = "BillPaymentHistoryScreen",
  BILL_MOVEMENT = "BillMovementScreen",
  BILL_OBJECTION_FORM = "BillObjectionFormScreen",
}

interface TransactionCardItemProps {
  label: string;
  icon: string;
  onPress: (itemType: ItemType) => void;
  itemType: ItemType;
}

export default function TransactionCardItem({
  label,
  icon,
  onPress,
  itemType,
}: TransactionCardItemProps) {
  return (
    <Pressable
      onPress={() => onPress(itemType)}
      android_ripple={{
        color: "rgba(0,0,0,0.1)",
        borderless: true,
        foreground: true,
      }}
      style={{
        overflow: "hidden",
        borderRadius: 10
      }}
    >
      <View style={styles.cardContainer}>
        <Text style={styles.cardItemText}>{label}</Text>
        <Icon name={icon} size={20} color="black" />
      </View>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.background,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
  },
  cardItemText: {
    fontSize: 16,
    fontFamily: poppinsFontTitle,
    textAlign: "left",

   
  },
});
