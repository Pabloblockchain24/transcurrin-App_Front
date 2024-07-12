import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { Login } from "../screens/Login"
import {CtrDetail} from "../screens/CtrDetail"
import {Register} from "../screens/Register"
import {MainStack} from "./MainStack"

export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainStack}/>
            <Stack.Screen name="CtrDetail" component={CtrDetail} />
        </Stack.Navigator>

    )
}