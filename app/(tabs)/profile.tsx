import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/slices/counterSlice";
import { RootState } from "../../store";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

/**
 * How to use redux in react native
 * 
 *   // const count = useSelector((state:RootState) => state.counter.value)
   // const dispatch = useDispatch()
   // const email = useSelector((state:RootState) => state.login.email)
    //const password = useSelector((state:RootState) => state.login.password)


    <Button title="Increment" onPress={() => dispatch(increment())}/>
        <Button title="Decrement" onPress={() => dispatch(decrement())}/>
        <Button title="Increment by 5" onPress={() => dispatch(incrementByAmount(5))}/>
        <Text>{count}</Text>
 */
