import { Appbar } from "react-native-paper";
import { MD2Colors } from "react-native-paper";

export default function TopBar () {
    return (
        <Appbar.Header style={{
            backgroundColor: 'green',

        }}>
            {/* <Appbar.BackAction onPress={() => {}} /> */}

            <Appbar.Content title='AyurHeals' />
        </Appbar.Header>
    )
}