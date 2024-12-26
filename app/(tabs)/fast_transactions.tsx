import {View, Text, StyleSheet} from "react-native"

export default function FastTransactions() {
    return (
        <View style={styles.container}>
            <Text>Hızlı İşlemler</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
