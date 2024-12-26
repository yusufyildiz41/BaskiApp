import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";
import { poppinsFontBody } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";

interface IDNumberInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeHolder: string;
}

export const IDNumberInput = ({
    value,
    onChangeText,
    placeHolder
}: IDNumberInputProps) => {
    return (
        <Input
        inputMode="numeric"
        value={value}
        maxLength={11}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        inputContainerStyle= {{
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 20,
            marginBottom: -10,
            marginHorizontal: 10,
            paddingVertical: 5,
        }}
        inputStyle= {
            {
                fontFamily: poppinsFontBody,
                fontSize: 14,
                textAlign: "left"
            }   
        }
        leftIcon={
            <Icon
            name="badge"
            size={24}
            color={Colors.primary}
            style={{
                marginLeft: 10,
            }}
            ></Icon>
        }
        leftIconContainerStyle={{
            justifyContent: "center"
        }}
        >
        </Input>
    );
};