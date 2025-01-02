import { View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { poppinsFontBody, poppinsFontTitle } from "@/constants/Fonts";
import { Text, Button, Divider } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import { router } from "expo-router";

interface BillMovement {
  id: string;
  title: string;
  date: string;
  amount: number;
  isPaid: boolean;
}

const DUMMY_DATA: BillMovement[] = [
  {
    id: "1",
    title: "Mart 2024 Su Faturası",
    date: "15.03.2024",
    amount: 245.5,
    isPaid: true,
  },
  {
    id: "2",
    title: "Şubat 2024 Su Faturası",
    date: "15.02.2024",
    amount: 180.75,
    isPaid: true,
  },
  {
    id: "3",
    title: "Ocak 2024 Su Faturası",
    date: "15.01.2024",
    amount: 195.25,
    isPaid: true,
  }
];

const FILTER_OPTIONS = [
  { id: "1", title: "Son 1 Ay", value: 1 },
  { id: "3", title: "Son 3 Ay", value: 3 },
  { id: "6", title: "Son 6 Ay", value: 6 },
  { id: "12", title: "Son 1 Yıl", value: 12 },
  { id: "24", title: "Son 2 Yıl", value: 24 },
];

export default function BillMovementScreen() {
  const { top } = useSafeAreaInsets();
  const [selectedFilter, setSelectedFilter] = useState("1"); // Varsayılan olarak 3 ay

  const renderBillItem = ({ item }: { item: BillMovement }) => (
    <View style={styles.billItem}>
      <View style={styles.billInfo}>
        <Text style={styles.billTitle}>{item.title}</Text>
        <Text style={styles.billDate}>{"Ödeme Tarihi: " + item.date}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text
          style={[
            styles.amount,
            { color: item.isPaid ? Colors.success : Colors.error },
          ]}
        >
          {item.isPaid ? "+" : "-"}
          {item.amount.toFixed(2)} ₺
        </Text>
        <Icon
          name={item.isPaid ? "check-circle" : "error"}
          size={20}
          color={item.isPaid ? Colors.success : Colors.error}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { paddingTop: top + 10 }]}>
      <View style = {styles.header}>
        <TouchableOpacity onPress= {() => router.back()} style = {styles.backButton}>
          <Icon name="arrow-back-ios" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Fatura Hareketleri</Text>
      </View>

      {/* Filtre Butonları */}
      <View style={styles.filterContainer}>
        <FlatList
          data={FILTER_OPTIONS}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Button
              title={item.title}
              type={selectedFilter === item.id ? "solid" : "outline"}
              buttonStyle={[
                styles.filterButton,
                selectedFilter === item.id && styles.filterButtonActive,
              ]}
              titleStyle={[
                styles.filterButtonText,
                selectedFilter === item.id && styles.filterButtonTextActive,
              ]}
              activeOpacity={1}
              onPress={() => setSelectedFilter(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.filterList}
        />
      </View>

      {/* Fatura Listesi */}
      <FlatList
        data={DUMMY_DATA}
        renderItem={renderBillItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 18,
    fontFamily: poppinsFontTitle,
    color: Colors.primary,
  },
  backButton: {
    marginRight: 10,
  },
  filterContainer: {
    marginTop: 20,
  },
  filterList: {
    gap: 5,
  },
  filterButton: {
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderWidth: 2,
    borderRadius: 20,
    overflow: "hidden",
    borderColor: Colors.border,
  },
  filterButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterButtonText: {
    fontFamily: poppinsFontBody,
    fontSize: 12,
    color: Colors.title,
  },
  filterButtonTextActive: {
    color: Colors.background,
  },
  listContainer: {
    backgroundColor: Colors.background,
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 3,
  },
  billItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  billInfo: {
    flex: 1,
  },
  billTitle: {
    fontFamily: poppinsFontTitle,
    fontSize: 14,
    color: Colors.title,
  },
  billDate: {
    fontFamily: poppinsFontBody,
    fontSize: 10,
    color: Colors.title,
    marginTop: 4,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontFamily: poppinsFontBody,
    fontSize: 14,
    marginRight: 5,
  },
  divider: {
    marginVertical: 5,
  },
});
