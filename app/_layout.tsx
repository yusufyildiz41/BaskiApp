import { Stack } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/Colors";
import { Provider } from "react-redux";
import { store } from "../store";

/**
 * ActionSheetProvider is a provider for the action sheet. It is used to provide the action sheet context to the app.
 * GestureHandlerRootView is a view that handles gestures. It is used to handle gestures in the app.
 * StatusBar is a component that displays the status bar. It is used to display the status bar in the app.
 * <> </> is a fragment. It is used to wrap the components in the app.
 * Stack means that the screen is a stack screen. It is used to navigate to the screen.
 * Stack.Screen is a screen in the stack. It is used to navigate to the screen.
 */

const InitialLayout = () => {
  // This is the initial layout of the app when the app is opened
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(home)/DamDetailNewScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(bill_transaction)/BillEnquiryScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(bill_transaction)/BillMovementScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(bill_transaction)/BillPaymentHistoryScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(bill_transaction)/BillObjectionFormScreen"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

const RootLayoutNav = () => {
  return (
    <Provider store={store}>
      <StatusBar style="light" backgroundColor={Colors.primary}></StatusBar>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <InitialLayout />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default RootLayoutNav;
