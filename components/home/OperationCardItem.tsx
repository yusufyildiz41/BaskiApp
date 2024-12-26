import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { poppinsFontBody, poppinsFontSmall } from "@/constants/Fonts";

interface OperationCardItemProps {
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  type: 'error' | 'warning';
}

export default function OperationCardItem({
  title,
  subtitle,
  duration,
  icon,
  type
}: OperationCardItemProps) {
  return (
    <View style={styles.container}>
      <Icon 
        name={icon} 
        size={24} 
        color={type === 'error' ? Colors.error : Colors.warning} 
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 5,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: poppinsFontBody,
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: poppinsFontSmall,
    color: Colors.primary,
    marginTop: 2,
  },
  duration: {
    fontSize: 12,
    fontFamily: poppinsFontSmall,
    color: Colors.text,
    marginTop: 4,
  },
}); 