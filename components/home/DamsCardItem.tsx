import { View, Text, StyleSheet, Pressable } from "react-native";
import { Icon } from "@rneui/themed";
import { Colors } from "@/constants/Colors";
import {
  poppinsFontSmall,
  poppinsFontBody,
  poppinsFontTitle,
} from "@/constants/Fonts";

interface DamsCardItemProps {
  title: string;
  value: number;
  onPress: () => void;
}

function DamsCardItem({ title, value, onPress }: DamsCardItemProps) {
  const formatNumber = (num: number) => {
    return num.toLocaleString("tr-TR");
  };
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{
        color: "rgba(0,0,0,0.1)",
        borderless: false,
        foreground: true,
      }}
      style={{
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={styles.damsItemContainer}>
          <Text style={styles.damsItemTitle}>{title}</Text>
          <Text style={styles.damsItemValue}>{formatNumber(value)} m²</Text>
        </View>

        <View style={styles.damsItemIconContainer}>
          <Icon name="bar-chart" size={36} color={Colors.primary} />
        </View>
      </View>
    </Pressable>
  );
}

export default DamsCardItem;

const styles = StyleSheet.create({
  damsItemContainer: {
    marginTop: 10,
    flex: 0.9,
    gap: 8,
    flexDirection: "column",
    marginStart: 15,
  },
  damsItemIconContainer: {
    flex: 0.1,
    marginEnd: 15,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  damsItemTitle: {
    fontSize: 14,
    fontFamily: poppinsFontBody,
    color: Colors.primary    
  },
  damsItemValue: {
    fontSize: 12,
    fontFamily: poppinsFontSmall,
    color: Colors.title,
  },
});
