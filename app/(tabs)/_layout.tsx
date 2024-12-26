import { router, Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { poppinsFontBody } from "@/constants/Fonts";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { StatusBar } from "expo-status-bar";

import { View, StyleSheet, Pressable, Text } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabel: ({ focused }) => {
          let label = "";

          // Define labels for each route
          switch (route.name) {
            case "home":
              label = "Anasayfa";
              break;
            case "bill_transactions":
              label = "İşlemler";
              break;
            case "applications":
              label = "Başvurular";
              break;
            case "profile":
              label = "Profil";
              break;
            default:
              label = "";
          }

          // Only return the label if tab is focused
          return focused ? (
            <Text style={styles.tabBarLabelStyle}>{label}</Text>
          ) : null;
        },
        
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="bill_transactions"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="receipt-long" color={color} size={24} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="fast_transactions"
        options={{
          title: "Hızlı İşlemler",
          headerShown: false,
          tabBarButton: () => (
            <Pressable
              style={styles.centerButton}
              android_ripple={{
                color: Colors.backgroundSecondary,
                radius: 30,
                foreground: true,
                borderless: true,
              }}
              onPress={() => {
                // Handle center button press
                router.push("/fast_transactions");
              }}
            >
              <View style={styles.centerButtonInner}>
                <Icon name="sync-alt" size={32} color="white" />
              </View>
            </Pressable>
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="applications"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="hourglass-bottom" color={color} size={24} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={24} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

const TabLayoutNav = () => {
  return (
    <ActionSheetProvider>
      <>
        <StatusBar style="light" backgroundColor={Colors.primary}></StatusBar>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <TabLayout />
        </GestureHandlerRootView>
      </>
    </ActionSheetProvider>
  );
};

export default TabLayoutNav;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    backgroundColor: Colors.background,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopWidth: 1,
    borderTopColor: Colors.primary,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabBarLabelStyle: {
    fontSize: 10,
    fontFamily: poppinsFontBody,
    color: Colors.primary,
    marginTop: 5,
  },
  centerButton: {
    top: -40, // Adjust this to make the button overlap the tab bar
    justifyContent: "center",
    alignItems: "center",
  },
  centerButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    // Add shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
