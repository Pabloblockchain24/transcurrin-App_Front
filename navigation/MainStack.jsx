import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Main as Home } from "../screens/Main"
import { StockDeposito } from "../screens/StockDeposito"
import { Entregas } from "../screens/Entregas"
import { DevVacio } from "../screens/DevVacio"
import { StockPuerto } from "../screens/StockPuerto"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const MainStack = () => {
    const Tabs = createBottomTabNavigator()

    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: "orange",
                tabBarActiveTintColor: "black",
                tabBarStyle: { backgroundColor: "white" }

            }}>

            <Tabs.Screen
                name="Main"
                component={Home}
                options={{ tabBarIcon: () => <FontAwesome5 name="home" size={18} color="black" /> }}
            />

            <Tabs.Screen
                name="Stock Puerto"
                component={StockPuerto}
                options={{ tabBarIcon: () => <FontAwesome5 name="ship" size={18} color="black" /> }}
            />

            <Tabs.Screen
                name="StockDeposito"
                component={StockDeposito}
                options={{ tabBarIcon: () => <FontAwesome5 name="warehouse" size={18} color="black" /> }}
            />

            <Tabs.Screen
                name="Entregas"
                component={Entregas}
                options={{
                    tabBarIcon: () => <FontAwesome5 name="truck" size={18} color="black" />,
                }}
            />

            <Tabs.Screen
                name="Dev Vacios"
                component={DevVacio}
                options={{ tabBarIcon: () => <FontAwesome5 name="box-open" size={18} color="black" /> }}
            />

        </Tabs.Navigator>
    )
}