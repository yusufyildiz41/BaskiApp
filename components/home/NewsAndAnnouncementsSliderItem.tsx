import Carousel from "react-native-reanimated-carousel";
import Animated from "react-native-reanimated";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Card } from "@rneui/themed";

import {
  poppinsFontBody,
  poppinsFontSmall,
  poppinsFontTitle,
} from "@/constants/Fonts";
import { useSharedValue } from "react-native-reanimated";

interface Announcement {
  id: number;
  title: string;
  description: string;
  pageLink: string;
}

interface NewsAndAnnouncementsSliderItemProps {
  announcements?: Announcement[];
  onDetailPress: (link: string) => void;
}

const NewsDummyData: Announcement[] = [
  {
    id: 1,
    title: "Edremitin 20 yıllık su sorunu çözüldü!",
    description:
      "Edremit'e bağlı merkez mahallelerin içme suyu ihtiyacını karşılayan Koçero Deresi'nde yıllardır ihmal edilen kaptajı yenilendi. Yağışlar nedeniyle yaşanan tıkanmalar ve su kesintilerine neden olan sorunları çözerek bölge halkını sağlıklı suyla buluşturdu.",
    pageLink: "https://balsu.gov.tr/index.php?sid=10&hbr=1061",
  },
  {
    id: 2,
    title:
      'Altıeylül ilçesi Macarlar İlkokulundaki öğrencilerimize "Su Tasarrufunu" Anlattık',
    description:
      " Genel Müdürlüğümüz geleceği koruyacak bilinçli bireyler yetiştirmek amacıyla önemli bir projeye imza attı. Çocuklarımızda su tasarrufu bilincini erken yaşta kazandırmayı hedefleyen eğitim programımızı, Altıeylül ilçesindeki Macarlar İlkokulu'nda hayata geçirdik.",
    pageLink: "https://balsu.gov.tr/index.php?sid=10&hbr=1056",
  },
  {
    id: 3,
    title: "Suyunu İsraf Etme Geleceğine Sahip Çık",
    description:
      'Küresel kuraklık tehlikesinin giderek arttığı bu dönemde, suyun ne kadar değerli olduğu bir kez daha gözler önüne seriliyor. Bu bilinçle "Suyu tasarruflu kullanmak, hem doğaya hem de geleceğimize karşı sorumluluğumuzdur." sloganını benimseyerek suyunu tasarruflu kullanmaya başladık.',
    pageLink: "https://balsu.gov.tr/index.php?sid=10&hbr=1060",
  },
  {
    id: 4,
    title: "Ekiplerimiz yağışlara karşı hazır!",
    description:
      "Ekiplerimiz hafta sonu beklenen sağanak yağışlara karşı 20 ilçede tam kadro hazır. Olası risklere karşı tüm hazırlıkları tamamlayan ekipler, 7/24 görev başında vatandaşların taleplerine hızlı bir şekilde yanıt verecek.",
    pageLink: "https://balsu.gov.tr/index.php?sid=10&hbr=1059",
  },
];
function NewsAndAnnouncementsSliderItem({
  announcements = NewsDummyData,
  onDetailPress,
}: NewsAndAnnouncementsSliderItemProps) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <Carousel
      loop
      width={windowWidth}
      height={300}
      snapEnabled
      autoPlay
      mode="parallax"
      data={announcements}
      scrollAnimationDuration={1000}
      autoPlayInterval={5000}
      renderItem={({ item, index }) => (
        <View style={styles.announcementCardOuterContainer}>
          <Image
            source={require("@/assets/images/react-logo.png")}
            style={[styles.cardBackgroundImage, { borderRadius: 10 }]}
            resizeMode="center"
          />
          <View style={styles.cardContentContainer}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <TouchableOpacity onPress={() => onDetailPress(item.pageLink)}>
              <Text numberOfLines={2} style={styles.cardDescription}>
                {item.description}
              </Text>
              <Text style={styles.readMore}>devamı için tıklayınız</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

export default NewsAndAnnouncementsSliderItem;

const styles = StyleSheet.create({
  announcementCardOuterContainer: {
    height: 200,
    width: "100%",
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    marginTop: 10,
  },
  cardBackgroundImage: {
    position: "absolute", // means it will be on top of the card
    width: "100%",
    height: "100%",
  },
  cardContentContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.background,
    fontFamily: poppinsFontTitle,
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 10,
    color: Colors.background,
    marginRight: 10,
    fontFamily: poppinsFontBody,
  },
  readMore: {
    color: Colors.background,
    fontStyle: "italic",
    fontSize: 10,
    fontFamily: poppinsFontSmall,
    textDecorationLine: "underline",
  },
});
