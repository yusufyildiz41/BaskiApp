import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { poppinsFontBody, poppinsFontSmall } from "@/constants/Fonts";

interface BillEnquiryTextInputItemProps {
    value: string;
    onChangeText: (text: string) => void;
    placeHolder: string;
}

export const BillEnquiryTextInputItem = ({
    value,
    onChangeText,
    placeHolder
}: BillEnquiryTextInputItemProps) => {
    return (
        <Input
         inputMode="numeric"
         value = {value}
         placeholder={placeHolder}
         onChangeText={onChangeText}
         inputContainerStyle={{
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            marginHorizontal: 10,
            marginTop: 20,
            paddingVertical: 5,
         }}
         inputStyle={{
            fontFamily: poppinsFontBody,
            fontSize: 14,
            textAlign: "left"
         }}
         leftIcon= {
            <Icon
            name="search"
            size={24}
            color={Colors.primary}
            style={{
                marginLeft: 10
            }}
            ></Icon>
         }>
        
        </Input>
    )
}   
