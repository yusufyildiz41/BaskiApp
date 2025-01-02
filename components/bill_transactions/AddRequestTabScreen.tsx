import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { poppinsFontTitle, poppinsFontBody } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";
import { Divider, Input, Button } from "@rneui/themed";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Dropdown } from "react-native-element-dropdown";
import districtData from "@/assets/districts/Districts_Neighborhoods.json";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { RegisterButton } from "../register/RegisterButton";
import { RequestSentModal } from "./RequestSentModal";
import { useDispatch, useSelector } from "react-redux";
import {
  updateRequestState,
  resetRequestState,
} from "../../store/slices/addRequestInfoSlice";
import { RootState } from "../../store";
import { RequestInfoState } from "../../store/slices/addRequestInfoSlice";

interface District {
  label: string | undefined;
  value: string | undefined;
}

interface Neighborhood {
  label: string | undefined;
  value: string | undefined;
}

interface DistrictData {
  Balikesir: {
    Altıeylül: string[];
    Ayvalık: string[];
    Bandırma: string[];
    Burhaniye: string[];
    Dursunbey: string[];
    Edremit: string[];
    Erdek: string[];
    Gömeç: string[];
    Gönen: string[];
    Havran: string[];
    İvrindi: string[];
    Karesi: string[];
    Kepsut: string[];
    Manyas: string[];
    Marmara: string[];
    Savaştepe: string[];
    Sındırgı: string[];
    Susurluk: string[];
  };
}

export default function AddRequestTabScreen() {
  const [districts, setDistricts] = useState<District[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<
    string | null
  >(null);

  const [requestSentModalVisible, setRequestSentModalVisible] = useState(false);

  const dispatch = useDispatch();
  const requestState = useSelector((state: RootState) => state.addRequestState);

  const updateFormState = (fieldName: keyof RequestInfoState, value: any) => {
    dispatch(updateRequestState({ ...requestState, [fieldName]: value }));
  };

  const handleSubmit = async () => {
    try {
      setRequestSentModalVisible(true);
      dispatch(resetRequestState());

      setTimeout(() => {
        setRequestSentModalVisible(false);
      }, 3000);
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Resimlere erişim için lütfen izin veriniz.");
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images", "videos"],
        allowsMultipleSelection: true,
        allowsEditing: false,
        quality: 1,
        aspect: [16, 9],
      });

      if (!result.canceled) {
        updateFormState("images", [...requestState.images, ...result.assets]);
      }
    } catch (error) {
      alert(
        "Resim seçilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."
      );
    }
  };

  const removeImage = (index: number) => {
    updateFormState(
      "images",
      requestState.images.filter((_, i) => i !== index)
    );
  };

  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: true,
      multiple: true,
    });
    try {
      result.assets?.map((asset) => {
        updateFormState("documents", [...requestState.documents, asset]); // spread operator is used to add the new asset to the existing documents array
      });
    } catch (error) {
      alert(
        "Dosya seçilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."
      );
    }
  };

  const removeFile = (index: number) => {
    updateFormState(
      "documents",
      requestState.documents.filter((_, i) => i !== index)
    );
  };

  useEffect(() => {
    try {
      const data = districtData as DistrictData;
      const districtList = Object.keys(data.Balikesir).map(
        (district, index) => ({
          label: district,
          value: (index + 1).toString(),
        })
      );
      setDistricts(districtList);
    } catch (error) {
      console.error("İlçe verisi yükleme hatası:", error);
    }
  }, []);

  useEffect(() => {
    if (requestState.district && districts.length > 0) {
      const districtName = districts.find(
        (d) => d.value === requestState.district
      )?.label;

      if (districtName) {
        const selectedDistrictNeighborhoods =
          districtData.Balikesir[
            districtName as keyof typeof districtData.Balikesir
          ];
        const neighborhoodList = selectedDistrictNeighborhoods.map(
          (name, index) => ({
            label: name,
            value: (index + 1).toString(),
          })
        );
        setNeighborhoods(neighborhoodList);
      }
    } else {
      setNeighborhoods([]);
      setSelectedNeighborhood(null);
    }
  }, [requestState.district, districts]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={[styles.contentContainer, { gap: 10, marginTop: 10 }]}>
            <Text
              style={[styles.title, { marginHorizontal: 15, marginTop: 10 }]}
            >
              Talep Adres Bilgileri
            </Text>
            <Divider style={{ marginHorizontal: 15 }} />

            <View>
              <Text
                style={[styles.label, { marginHorizontal: 15, marginTop: 10 }]}
              >
                İlçe Seçiniz
              </Text>
              <Dropdown
                style={[
                  styles.dropdown,
                  { marginHorizontal: 15, marginTop: 5 },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                itemTextStyle={styles.itemTextStyle}
                data={districts}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="İlçe seçiniz"
                value={requestState.district}
                onChange={(item) => updateFormState("district", item.value)}
                renderLeftIcon={() => (
                  <Icon
                    name="location-on"
                    size={16}
                    color={Colors.primary}
                    style={styles.icon}
                  />
                )}
              />
            </View>

            {requestState.district && (
              <View>
                <Text
                  style={[
                    styles.label,
                    { marginHorizontal: 15, marginTop: 10 },
                  ]}
                >
                  Mahalle Seçiniz
                </Text>
                <Dropdown
                  style={[
                    styles.dropdown,
                    { marginHorizontal: 15, marginTop: 5 },
                  ]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  itemTextStyle={styles.itemTextStyle}
                  data={neighborhoods}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Mahalle seçiniz"
                  value={requestState.neighborhood}
                  onChange={(item) =>
                    updateFormState("neighborhood", item.value ?? null)
                  }
                  renderLeftIcon={() => (
                    <Icon
                      name="location-on"
                      size={16}
                      color={Colors.primary}
                      style={styles.icon}
                    />
                  )}
                />
              </View>
            )}

            <View>
              <Text
                style={[styles.label, { marginHorizontal: 15, marginTop: 10 }]}
              >
                Cadde/Sokak
              </Text>
              <Input
                placeholder="Cadde veya sokak adını giriniz"
                value={requestState.street}
                onChangeText={(text) => updateFormState("street", text)}
                inputContainerStyle={[
                  styles.inputContainer,
                  { marginHorizontal: 5, marginTop: 5 },
                ]}
                inputStyle={styles.inputStyle}
                leftIcon={
                  <Icon name="location-on" size={16} color={Colors.primary} />
                }
              />

              <View
                style={{
                  flexDirection: "row",
                  marginTop: -10,
                }}
              >
                <View style={[styles.doorNumberInput]}>
                  <Text style={[styles.label, { marginStart: 15 }]}>
                    Dış Kapı No
                  </Text>
                  <Input
                    placeholder="Dış kapı no"
                    value={requestState.outDoorNumber.toString()}
                    onChangeText={(text) =>
                      updateFormState("outDoorNumber", text)
                    }
                    keyboardType="numeric"
                    inputContainerStyle={[
                      styles.inputContainer,
                      { marginTop: 5, marginStart: 5 },
                    ]}
                    inputStyle={styles.inputStyle}
                    leftIcon={
                      <Icon
                        name="meeting-room"
                        size={16}
                        color={Colors.primary}
                      />
                    }
                  />
                </View>

                <View style={[styles.doorNumberInput]}>
                  <Text style={[styles.label, { marginStart: 15 }]}>
                    İç Kapı No
                  </Text>
                  <Input
                    placeholder="İç kapı no"
                    value={requestState.inDoorNumber.toString()}
                    onChangeText={(text) =>
                      updateFormState("inDoorNumber", text)
                    }
                    keyboardType="numeric"
                    inputContainerStyle={[
                      styles.inputContainer,
                      { marginTop: 5, marginStart: 5, marginEnd: 5 },
                    ]}
                    inputStyle={styles.inputStyle}
                    leftIcon={
                      <Icon
                        name="meeting-room"
                        size={16}
                        color={Colors.primary}
                      />
                    }
                  />
                </View>
              </View>

              <Text style={[styles.label, { marginHorizontal: 15 }]}>
                Ek Adres Bilgileri
              </Text>
              <Input
                placeholder="Adres detayı"
                value={requestState.additionalAddress}
                onChangeText={(text) =>
                  updateFormState("additionalAddress", text)
                }
                inputContainerStyle={[
                  styles.inputContainer,
                  { marginHorizontal: 5, marginTop: 5 },
                ]}
                leftIcon={
                  <Icon name="location-on" size={16} color={Colors.primary} />
                }
                inputStyle={styles.inputStyle}
              />
            </View>

            <Text
              style={[styles.title, { marginHorizontal: 15, marginTop: 10 }]}
            >
              İçerik Bilgileri
            </Text>
            <Divider style={{ marginHorizontal: 15 }} />

            <View>
              <Text
                style={[styles.label, { marginHorizontal: 15, marginTop: 10 }]}
              >
                Açıklama
              </Text>

              <Input
                placeholder="Açıklama giriniz"
                maxLength={200}
                value={requestState.explanationOfRequest}
                onChangeText={(text) =>
                  updateFormState("explanationOfRequest", text)
                }
                inputContainerStyle={[
                  styles.inputContainer,
                  { marginHorizontal: 5, marginTop: 5 },
                ]}
                inputStyle={[styles.inputStyle, { textAlignVertical: "top" }]}
                multiline={true}
                numberOfLines={4}
              />

              <Text style={[styles.label, { marginHorizontal: 15 }]}>
                Fotoğraf Yükle
              </Text>

              <Button
                title="Fotoğraf Yükle"
                icon={{
                  name: "photo",
                  type: "font-awesome",
                  size: 15,
                  color: "white",
                }}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: "700", fontSize: 12 }}
                buttonStyle={{
                  backgroundColor: Colors.title,
                  borderColor: "transparent",
                  borderRadius: 10,
                }}
                containerStyle={{
                  width: 200,
                  alignSelf: "flex-start",
                  marginStart: 10,
                  marginVertical: 10,
                }}
                onPress={pickImage}
              />

              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginHorizontal: 10,
                }}
              >
                {requestState.images.map((image, index) => (
                  <View key={index} style={styles.imageWrapper}>
                    <Image source={{ uri: image.uri }} style={styles.image} />
                    <TouchableOpacity
                      style={styles.removeIcon}
                      onPress={() => {
                        removeImage(index);
                      }}
                    >
                      <Icon name="close" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              <Text style={[styles.label, { marginHorizontal: 15 }]}>
                Dosya Yükle
              </Text>

              <Button
                title="Dosya Yükle"
                icon={{
                  name: "file",
                  type: "font-awesome",
                  size: 15,
                  color: "white",
                }}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: "700", fontSize: 12 }}
                buttonStyle={{
                  backgroundColor: Colors.title,
                  borderColor: "transparent",
                  borderRadius: 10,
                }}
                containerStyle={{
                  width: 200,
                  alignSelf: "flex-start",
                  marginStart: 10,
                  marginVertical: 10,
                }}
                onPress={pickFile}
              />
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginHorizontal: 20,
                }}
              >
                {requestState.documents.map((file, index) => (
                  <View key={index} style={styles.fileWrapper}>
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: poppinsFontBody,
                        color: Colors.title,
                      }}
                    >
                      {file.name}
                    </Text>
                    <TouchableOpacity onPress={() => removeFile(index)}>
                      <Icon name="close" size={20} color="gray" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              <Button
                title={"Talep Oluştur"}
                onPress={handleSubmit}
                containerStyle={styles.submitButtonContainer}
                buttonStyle={styles.submitButton}
                titleStyle={styles.submitButtonTitle}
                disabled={
                  requestState.district === "" ||
                  requestState.neighborhood === "" ||
                  requestState.street === "" ||
                  requestState.outDoorNumber === "" ||
                  requestState.inDoorNumber === "" ||
                  requestState.additionalAddress === "" ||
                  requestState.explanationOfRequest === "" ||   
                  requestState.documents.length === 0
                }
                disabledStyle={styles.submitButtonDisabled}
                disabledTitleStyle={styles.submitButtonDisabledTitle}
              ></Button>

              <RequestSentModal
                visible={requestSentModalVisible}
                onClose={() => setRequestSentModalVisible(false)}
                message="Talebiniz gönderilmiştir!"
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: poppinsFontTitle,
    color: Colors.primary,
  },
  label: {
    fontSize: 12,
    fontFamily: poppinsFontBody,
    color: Colors.title,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: Colors.primary,
  },
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.primary,
    paddingHorizontal: 10,
  },
  inputStyle: {
    fontSize: 12,
    fontFamily: poppinsFontBody,
    color: Colors.title,
  },
  placeholderStyle: {
    fontSize: 12,
    fontFamily: poppinsFontBody,
    color: Colors.title,
  },
  selectedTextStyle: {
    fontSize: 12,
    fontFamily: poppinsFontBody,
    color: Colors.title,
  },
  itemTextStyle: {
    fontSize: 12,
    fontFamily: poppinsFontBody,
    color: Colors.title,
  },
  doorNumberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  doorNumberInput: {
    flex: 1,
  },
  charCountText: {
    textAlign: "right",
    marginHorizontal: 10,
    color: Colors.title,
    fontSize: 12,
    fontFamily: poppinsFontBody,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
  imageWrapper: {
    position: "relative",
    margin: 5,
  },
  fileWrapper: {
    margin: 5,
    gap: 5,
    elevation: 1,
    backgroundColor: Colors.divider,
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  removeIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    padding: 2,
  },
  submitButtonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 8,
    marginTop: 10,
    width: "80%",
  },
  submitButtonTitle: {
    fontFamily: poppinsFontBody,
    fontSize: 16,
    color: Colors.background,
    textAlign: "center",
  },
  submitButtonDisabled: {
    backgroundColor: '#A5A5A5', 
    borderRadius: 30,
    paddingVertical: 8,
    opacity: 0.6,
    marginTop: 10,
    width: "80%",
  },
  submitButtonDisabledTitle: {
    fontFamily: poppinsFontBody,
    fontSize: 16,
    color: Colors.background,
    textAlign: "center",
    opacity: 0.6,
  },
});
