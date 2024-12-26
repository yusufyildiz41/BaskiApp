import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { poppinsFontBody, poppinsFontTitle } from "@/constants/Fonts";
import { LineChart } from "react-native-chart-kit";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

interface DamDataset {
  data: number[];
  color: (opacity?: number) => string; // this returns a string and opacity is optional
}

interface ChartData {
  labels: string[];
  datasets: DamDataset[];
  legend: string[];
}

interface DamInfo {
  title: string;
  data: ChartData;
  currentLevel: number;
  lastUpdate: string;
}

interface SelectedPoint {
  value: number;
  label: string;
  index: number;
}

const YEARLY_DAM_DATA: Record<string, DamInfo> = {
  "1": {
    title: "İkizcetepeler Barajı",
    data: {
      labels: [
        "Ocak",
        "Şub.",
        "Mar.",
        "Nis.",
        "May.",
        "Haz.",
        "Tem.",
        "Ağus.",
        "Eyl.",
        "Eki.",
        "Kas.",
        "Ara.",
      ],
      datasets: [
        {
          data: [60, 65, 70, 80, 80, 75, 70, 65, 60, 55, 50, 45],
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        },
      ],
      legend: ["Yıllık Doluluk Oranı"],
    },
    currentLevel: 17,
    lastUpdate: "23 Aralık 2024",
  },
  "2": {
    title: "Gönen Barajı",
    data: {
      labels: [
        "Ocak",
        "Şub.",
        "Mar.",
        "Nis.",
        "May.",
        "Haz.",
        "Tem.",
        "Ağus.",
        "Eyl.",
        "Eki.",
        "Kas.",
        "Ara.",
      ],
      datasets: [
        {
          data: [20, 25, 30, 40, 40, 35, 30, 25, 20, 15, 10, 5],
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        },
      ],
      legend: ["Yıllık Doluluk Oranı"],
    },
    currentLevel: 23,
    lastUpdate: "23 Aralık 2023",
  },
};

const MONTHLY_DAM_DATA: Record<string, DamInfo> = {
  "1": {
    title: "İkizcetepeler Barajı",
    data: {
      labels: [
        "Ocak",
        "Şub.",
        "Mar.",
        "Nis.",
        "May.",
        "Haz.",
        "Tem.",
        "Ağus.",
        "Eyl.",
        "Eki.",
        "Kas.",
        "Ara.",
      ],
      datasets: [
        {
          data: [15, 20, 70, 80, 80, 75, 70, 65, 60, 55, 50, 45],
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        },
      ],
      legend: ["Aylık Doluluk Oranı"],
    },
    currentLevel: 17,
    lastUpdate: "23 Aralık 2024",
  },
  "2": {
    title: "Gönen Barajı",
    data: {
      labels: [
        "Ocak",
        "Şub.",
        "Mar.",
        "Nis.",
        "May.",
        "Haz.",
        "Tem.",
        "Ağus.",
        "Eyl.",
        "Eki.",
        "Kas.",
        "Ara.",
      ],
      datasets: [
        {
          data: [60, 65, 70, 80, 80, 75, 70, 65, 60, 55, 50, 45],
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        },
      ],
      legend: ["Aylık Doluluk Oranı"],
    },
    currentLevel: 23,
    lastUpdate: "23 Aralık 2023",
  },
};

export default function DamDetailNewScreen() {
  const { top } = useSafeAreaInsets();

  const { damInfo } = useLocalSearchParams<{damInfo: string}>();
  const yearlyDamData = YEARLY_DAM_DATA[damInfo];
  const monthlyDamData = MONTHLY_DAM_DATA[damInfo];

  const screenWidth = Dimensions.get("window").width;
  if (!yearlyDamData) return null;


  const [currentNumber, setCurrentNumber] = useState("");
  return (
    <View style={[styles.container, { paddingTop: top + 20 }]}>
      <Text style={styles.title}>{yearlyDamData.title}</Text>

      <LineChart
        data={yearlyDamData.data}
        width={screenWidth - 40}
        height={220}
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: Colors.primary,
          backgroundGradientTo: Colors.primary,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: 5,
            strokeWidth: "1",
            stroke: "#ffffff",
          },
          propsForHorizontalLabels: {
            fontSize: 12,
          },
          propsForVerticalLabels: {
            fontSize: 10,
          },
        }}
        bezier
        decorator={() => {
          return yearlyDamData.data.datasets[0].data.map((value, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setCurrentNumber("1");
              }}
              style={{
                position: "absolute",
                left:
                  index *
                    ((screenWidth - 40) / (yearlyDamData.data.labels.length - 1)) -
                  10,
                top: 220 - (value / 100) * 220 - 10,
                width: 20,
                backgroundColor: "transparent", // Test için 'red' yapabilirsiniz
                height: 20,
                zIndex: 1000, // Z-index ekleyelim
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
          ));
        }}
        style={{
          marginHorizontal: 20,
          borderRadius: 16,
        }}
      ></LineChart>

      <LineChart
        data={monthlyDamData.data}
        width={screenWidth - 40}
        height={220}
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: Colors.primary,
          backgroundGradientTo: Colors.primary,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: 5,
            strokeWidth: "1",
            stroke: "#ffffff",
          },
          propsForHorizontalLabels: {
            fontSize: 12,
          },
          propsForVerticalLabels: {
            fontSize: 10,
          },
        }}
        bezier
        decorator={() => {
          return monthlyDamData.data.datasets[0].data.map((value, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setCurrentNumber("1");
              }}
              style={{
                position: "absolute",
                left:
                  index *
                    ((screenWidth - 40) / (monthlyDamData.data.labels.length - 1)) -
                  10,
                top: 220 - (value / 100) * 220 - 10,
                width: 20,
                backgroundColor: "transparent", // Test için 'red' yapabilirsiniz
                height: 20,
                zIndex: 1000, // Z-index ekleyelim
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
          ));
        }}
        style={{
          marginTop: 20,
          marginHorizontal: 20,
          borderRadius: 16,
        }}
      ></LineChart>

      {currentNumber && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>{currentNumber}</Text>
        </View>
      )}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 20,
    fontFamily: poppinsFontTitle,
    color: Colors.primary,
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    width: "100%",
    elevation: 3,
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 16,
    fontFamily: poppinsFontTitle,
    color: Colors.primary,
    marginBottom: 10,
  },
  dateLabel: {
    textAlign: "center",
    fontFamily: poppinsFontBody,
    color: Colors.title,
    marginTop: 5,
  },
  detailsContainer: {
    backgroundColor: Colors.background,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: poppinsFontTitle,
    color: Colors.primary,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: poppinsFontBody,
    color: Colors.title,
    marginBottom: 10,
  },
});
