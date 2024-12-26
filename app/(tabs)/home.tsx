import { View, StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NewsAndAnnouncementsSliderItem from "@/components/home/NewsAndAnnouncementsSliderItem";
import TotalSubscriberValueItem from "@/components/home/TotalSubscriberValueItem";
import DamsCardItem from "@/components/home/DamsCardItem";
import { Colors } from "@/constants/Colors";
import { Divider } from "@rneui/base";
import { poppinsFontBody, poppinsFontTitle } from "@/constants/Fonts";
import OperationCardItem from "@/components/home/OperationCardItem";
import { Linking } from "react-native";
import { router } from "expo-router";

export default function Home() {
  const { top, bottom } = useSafeAreaInsets();


  const handleNewsDetailPress = async (itemLink: string) => {
    await Linking.openURL(itemLink);
  };

  const onDamDetailPress = (damInfo: string) => {
     router.push({
      pathname: "/(home)/DamDetailNewScreen",
      params: {damInfo}
     });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Haberler ve Duyurular Slider'ı */}
        <NewsAndAnnouncementsSliderItem onDetailPress={handleNewsDetailPress} />

        {/* Toplam Abone Sayısı */}

        <TotalSubscriberValueItem />

        {/* Baraj Doluluk Oranları */}
        <View style={styles.damsFillLevelCardOuterContainer}>
          <Text style={styles.sectionTitle}>Barajlar</Text>
          <DamsCardItem
            title="İkizcetepeler Barajı"
            value={5666234}
            onPress={() => {
              onDamDetailPress("1");
            }}
          />
          <Divider style={styles.divider} />
          <DamsCardItem
            title="Gönen Barajı"
            value={4556994}
            onPress={() => {
              onDamDetailPress("2");
            }}
          />
        </View>

        {/* Arıza ve Kesintiler */}
        <View style={styles.cardWrapper}>
          <OperationCardItem
            title="Karesi - Dumlupınar"
            subtitle="Ana hat arızası sebebiyle su kesintisi"
            duration="Tahmini Süre: 4 saat"
            icon="warning"
            type="error"
          />
          <Divider style={styles.divider} />
          <OperationCardItem
            title="Altıeylül - Hasan Basri"
            subtitle="Planlı bakım çalışması"
            duration="Tahmini Süre: 2 saat"
            icon="engineering"
            type="warning"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: Colors.background,
  },
  cardWrapper: {
    backgroundColor: Colors.background,
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 30,
    marginTop: 20,
    elevation: 3,
    padding: 15,
  },
  damsFillLevelCardOuterContainer: {
    backgroundColor: Colors.background,
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 20,
    elevation: 3,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: poppinsFontTitle,
    color: Colors.primary,
    marginBottom: 10,
  },
  divider: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
