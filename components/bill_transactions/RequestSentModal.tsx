import { Modal, View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { Colors } from "@/constants/Colors";
import { poppinsFontBody } from "@/constants/Fonts";

interface RequestSentModalProps {
  visible: boolean;
  onClose: () => void;
  message: string;
}

export const RequestSentModal = ({
  visible,
  onClose,
  message,
}: RequestSentModalProps) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        tension: 50,
        friction: 7,
      }).start();
    }
  }, [visible]);

  
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          <LottieView
            source={require("@/assets/animations/success.json")}
            autoPlay
            loop={false}
            style={styles.animation}
            onAnimationFinish={() => {
              setTimeout(onClose, 500);
            }}
          />
          <Text style={styles.message}>{message}</Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
    alignItems: "center",
  },
  animation: {
    width: 150,
    height: 150,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: poppinsFontBody,
    color: Colors.title,
    textAlign: "center",
  },
});
