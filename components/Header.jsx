import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.tituloHeader}> TRANSCURRIN.CL</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tituloHeader: {
    backgroundColor: 'orange',
    padding: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
