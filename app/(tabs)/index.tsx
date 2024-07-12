import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux"
import { store } from "../../store"
import {MainNavigator} from "../../navigation/MainNavigator"
export default function HomeScreen() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor="orange" style="light" />
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  )
}
