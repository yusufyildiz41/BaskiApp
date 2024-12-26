import {View, Text, StyleSheet} from "react-native"

export default function Applications() {
    return (
        <View style={styles.container}>
            <Text>Başvurularım</Text>
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
