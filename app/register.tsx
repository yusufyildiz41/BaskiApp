import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  poppinsFontBody,
  poppinsFontSmall,
  poppinsFontTitle,
} from "@/constants/Fonts";
import { IDNumberInput } from "@/components/register/IDNumberInput";
import { BirthDateInput } from "@/components/register/BirthDateInput";
import { NameInput } from "@/components/register/NameInput";
import { LastNameInput } from "@/components/register/LastNameInput";
import { PasswordInput } from "@/components/login/PasswordInput";
import { PhoneNumberInput } from "@/components/register/PhoneNumberInput";
import { AgreementCheckInput } from "@/components/register/AgreementCheckInput";
import { RegisterButton } from "@/components/register/RegisterButton";
import { useState } from "react";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { EmailRegisterInput } from "@/components/register/EmailRegisterInput";
import { router } from "expo-router";

function Register() {
  const { top } = useSafeAreaInsets();
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<dayjs.Dayjs | null>(null); // Initialize as null
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isAgreementOpened, setIsAgreementOpened] = useState(false);
  const USER_AGREEMENT_TEXT = `BASKİ MOBİL UYGULAMA KULLANICI SÖZLEŞMESİ

İşbu Kullanıcı Sözleşmesi ("Sözleşme"), Balıkesir Su ve Kanalizasyon İdaresi ("BASKİ") ile BASKİ mobil uygulamasını ("Uygulama") kullanmak isteyen gerçek veya tüzel kişi ("Kullanıcı") arasında akdedilmiştir. Bu sözleşme, Kullanıcı'nın Uygulama'yı kullanımı sırasında uyması gereken kuralları ve tarafların hak ve yükümlülüklerini düzenlemektedir.

İşbu sözleşmede geçen "BASKİ" ifadesi Balıkesir Su ve Kanalizasyon İdaresi'ni, "Uygulama" ifadesi BASKİ tarafından sunulan mobil uygulamayı, "Kullanıcı" ifadesi uygulamayı kullanan gerçek veya tüzel kişiyi, "Hizmet" ifadesi uygulama üzerinden sunulan tüm hizmetleri, "Kişisel Veri" ifadesi ise kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi ifade eder.

Kullanıcı, Uygulama'yı kullanabilmek için 18 yaşını doldurmuş olmalı, BASKİ abonesi olmalı ve gerçek ve doğru bilgiler ile kayıt olmalıdır. Kullanıcı, hesap bilgilerinin gizliliğinden ve hesabından yapılan tüm işlemlerden sorumludur. Şüpheli bir durumda derhal BASKİ'yi bilgilendirmelidir.

Uygulama üzerinden fatura sorgulama ve ödeme, su kesintisi bildirimleri, arıza bildirimi, online başvurular ve abone işlemleri gibi hizmetler sunulmaktadır. BASKİ, sunulan hizmetlerde değişiklik yapma hakkını saklı tutar.

BASKİ, 6698 sayılı Kişisel Verilerin Korunması Kanunu'na uygun hareket eder ve kullanıcı verilerini güvenli şekilde saklar. Yasal zorunluluklar haricinde verileri üçüncü taraflarla paylaşmaz. Kullanıcı, verilerinin işlenmesine açık rıza verir ve veri işleme politikasını kabul eder.

Uygulama ve içeriğine ilişkin tüm haklar BASKİ'ye aittir. Kullanıcı, Uygulama'yı kopyalayamaz, değiştiremez ve dağıtamaz. Ödeme işlemleri güvenli ödeme altyapısı üzerinden gerçekleştirilir ve işlem ücretleri ile komisyonlar kullanıcıya aittir.

BASKİ, Uygulama'nın kesintisiz çalışacağını garanti etmez, teknik arızalardan ve mücbir sebeplerden kaynaklanan aksaklıklardan sorumlu değildir. BASKİ, kullanım şartlarına uymayan kullanıcıların hesaplarını askıya alabilir ve sözleşmeyi tek taraflı feshedebilir. Kullanıcı da dilediği zaman üyeliğini sonlandırabilir.

İşbu sözleşmeden doğan uyuşmazlıklarda Balıkesir Mahkemeleri ve İcra Daireleri yetkilidir. Sözleşme, Kullanıcı tarafından elektronik ortamda onaylanması ile yürürlüğe girer.

BASKİ ile iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz:
Adres: [BASKİ Merkez Adresi]
Telefon: [BASKİ İletişim Numarası]
E-posta: [BASKİ E-posta Adresi]
Web: www.baski.gov.tr

Son Güncelleme Tarihi: [Tarih]`;

  console.log(isAgreementChecked);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        contentContainerStyle={[styles.scrollViewContent, { paddingTop: top }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Text style={styles.appNameText}>Kayıt Ol</Text>

          <Text style={styles.pageIntroductionText}>
            Hizmetlerimizden yararlanmak için lütfen kayıt olun.
          </Text>

          <IDNumberInput
            value={idNumber}
            onChangeText={setIdNumber}
            placeHolder={"TC Kimlik Numaranızı Giriniz"}
          ></IDNumberInput>

          <BirthDateInput
            value={date ? date.format("YYYY-MM-DD") : null}
            onContainerClicked={() => setIsDatePickerVisible(true)}
            placeHolder={"Doğum Tarihinizi Seçiniz"}
          ></BirthDateInput>

          <EmailRegisterInput
            value={email}
            onChangeText={setEmail}
            placeholder={"E-Posta Adresinizi Giriniz"}
          ></EmailRegisterInput>

          <NameInput
            value={name}
            onChangeText={setName}
            placeholder={"Adınızı Giriniz"}
          ></NameInput>

          <LastNameInput
            value={lastName}
            onChangeText={setLastName}
            placeholder={"Soyadınızı Giriniz"}
          ></LastNameInput>

          <PasswordInput
            value={password}
            onChangeText={setPassword}
            placeHolder={"Şifrenizi Giriniz"}
          ></PasswordInput>

          <PasswordInput
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            placeHolder={"Şifrenizi Giriniz (Tekrar)"}
          ></PasswordInput>

          <PhoneNumberInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder={"Telefon Numaranızı Giriniz"}
          ></PhoneNumberInput>

          <View style={styles.agreementContainer}>
            <Pressable onPress={() => setIsAgreementOpened(true)}>
              <Text style={styles.agreementTitle}>SÖZLEŞME METNİ</Text>
            </Pressable>

            <AgreementCheckInput
              setIsAgreementChecked={setIsAgreementChecked}
              placeholder="Sözleşmeyi okudum ve onayladım."
            ></AgreementCheckInput>
          </View>

          <RegisterButton
            buttonText="Kayıt Ol"
            onPress={() => {}}
          ></RegisterButton>

          <View style={styles.alreadyHaveAccountContainer}>
            <Text style={styles.alreadyHaveAccountText}>
              Zaten hesabınız var mı?
            </Text>
            <Pressable onPress={() => router.navigate("/login")}>
              <Text style={styles.signInUnderline}>Giriş Yap</Text>
            </Pressable>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isDatePickerVisible}
            onRequestClose={() => setIsDatePickerVisible(false)}
          >
            <TouchableWithoutFeedback
              onPress={() => setIsDatePickerVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <TouchableWithoutFeedback>
                  <View style={styles.bottomSheet}>
                    <DateTimePicker
                      mode="single"
                      date={date}
                      onChange={(params) => {
                        setDate(params.date as dayjs.Dayjs);
                        setIsDatePickerVisible(false);
                      }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isAgreementOpened}
            onRequestClose={() => setIsAgreementOpened(false)}
          >
            <View style={styles.agreementModalContainer}>
              <View style={styles.agreementModalContent}>
                <View style={styles.agreementModalHeader}>
                  <Text style={styles.agreementModalHeaderText}>
                    Kullanıcı Sözleşmesi
                  </Text>
                  <Pressable
                    style={styles.agreementModalCloseButton}
                    onPress={() => setIsAgreementOpened(false)}
                  >
                    <Text style={styles.agreementModalCloseButtonText}>X</Text>
                  </Pressable>
                </View>

                <ScrollView style={styles.agreementModalBody}>
                  <Text style={styles.agreementModalBodyText}>
                    {USER_AGREEMENT_TEXT}
                  </Text>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollViewContent: {
    flexGrow: 1, // This allows the content to grow and fill the available space
    backgroundColor: Colors.background,
  },
  appNameText: {
    fontFamily: poppinsFontTitle,
    fontSize: 32,
    color: Colors.primary,
    marginTop: 20,
    textAlign: "center",
  },
  pageIntroductionText: {
    fontFamily: poppinsFontTitle,
    fontSize: 14,
    textAlign: "left",
    marginHorizontal: 20,
    color: Colors.title,
  },
  inputContainer: {},
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  agreementContainer: {
    marginTop: 10,
    width: "90%",
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 10,
    paddingVertical: 10,
  },
  agreementTitle: {
    fontFamily: poppinsFontTitle,
    fontSize: 16,
    textAlign: "center",
    color: Colors.title,
    textDecorationLine: "underline",
  },
  alreadyHaveAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  alreadyHaveAccountText: {
    fontFamily: poppinsFontBody,
    fontSize: 12,
    color: Colors.title,
  },
  signInUnderline: {
    textDecorationLine: "underline",
    fontFamily: poppinsFontBody,
    fontSize: 12,
    marginLeft: 5,
    color: Colors.primary,
  },
  agreementModalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    padding: 20,
  },
  agreementModalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    maxHeight: "80%",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  agreementModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  agreementModalHeaderText: {
    fontFamily: poppinsFontTitle,
    fontSize: 18,
    color: Colors.title,
  },
  agreementModalCloseButton: {
    padding: 8,
  },
  agreementModalCloseButtonText: {
    fontSize: 20,
    color: "#EF4444",
    fontWeight: "bold",
  },
  agreementModalBody: {
    marginBottom: 20,
  },
  agreementModalBodyText: {
    fontFamily: poppinsFontBody,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.title,
  },
});
