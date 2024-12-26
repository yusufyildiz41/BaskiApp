import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { poppinsFontBody, poppinsFontTitle } from "../../constants/Fonts";

function TotalSubscriberValueItem() {
  return (
    <View style={styles.totalSubscriberOuterCardContainer}>
      <View style={styles.totalSubscriberCardContainer}>
        <Text style={styles.totalSubscriberCardTitle}>Toplam Abone Sayısı</Text>
        <Text style={styles.totalSubscriberValueContent}>1.194.471</Text>
      </View>
      <View style={styles.totalSubscriberIconContainer}>
        <Icon name="person" size={32} color={Colors.primary} />
      </View>
    </View>
  );
}

export default TotalSubscriberValueItem;

const styles = StyleSheet.create({
  totalSubscriberOuterCardContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.background,
    borderRadius: 15,
    paddingVertical: 16,
    marginHorizontal: 15,
    elevation: 3,
  },
  totalSubscriberCardContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.background,
    borderRadius: 15,
    marginHorizontal: 20,
    gap: 10,
  },
  totalSubscriberIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  totalSubscriberCardTitle: {
    fontSize: 18,
    color: Colors.primary,
    fontFamily: poppinsFontTitle,
    textAlign: "left",
  },
  totalSubscriberValueContent: {
    fontSize: 14,
    fontFamily: poppinsFontBody,
    color: Colors.title,
    textAlign: "left",
  },
});
