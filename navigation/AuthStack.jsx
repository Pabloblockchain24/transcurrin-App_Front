import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()
import { Login } from "../screens/Login"
import { Register } from "../screens/Register"
import { MainStack } from "./MainStack"
export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="MainStack" component={MainStack} />
        </Stack.Navigator>
    )
}