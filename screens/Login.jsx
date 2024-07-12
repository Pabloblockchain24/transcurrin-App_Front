import { SafeAreaView } from "react-native-safe-area-context";
import {
  Pressable,
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../features/authSlice";
import { useLoginMutation } from "../services/authServices";

export const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [login, { isLoading, isSuccess, isError, data, error }] = useLoginMutation();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleInputChange = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const user = await login(credentials).unwrap();
      dispatch(setUserAuth(user));
    } catch (err) {
      console.error('Failed to login: ', err);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Main');
    }
  }, [isSuccess]);

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const styles = createStyles(useWindowDimensions().height);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.Login}>
        <Image
          style={styles.imgLogo}
          source={require("../assets/images/logoSitio.png")}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputCustom}
            placeholder="usuario@empresa.cl"
            value={credentials.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <TextInput
            style={styles.inputCustom}
            placeholder="contraseña"
            secureTextEntry
            value={credentials.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
          <Pressable style={styles.boton} onPress={handleLogin} disabled={isLoading}>
            <Text style={styles.botonText}>{isLoading ? 'INGRESANDO ...' : 'INGRESAR'}</Text>
          </Pressable>

          <Pressable style={styles.registerButton} onPress={handleRegisterPress}>
            <Text style={styles.registerButtonText}>¿No estás registrado? Regístrate aquí</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const createStyles = deviceHeight =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'white'
    },
    Login: {
      flex: 1,
      height: deviceHeight - 130,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      padding: 16,
      gap: 32,
    },
    imgLogo: {
      width: "100%",
      height: 100,
      resizeMode: 'contain',
    },
    inputCustom: {
      width: "100%",
      height: 40,
      margin: 12,
      borderWidth: 1,
      paddingHorizontal: 16,
      borderColor: "orange",
      alignItems: "center",
    },
    boton: {
      backgroundColor: "orange",
      width: "100%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      marginTop: 16,
    },
    botonText: {
      fontWeight: "700",
      color: "white",
    },
    inputContainer: {
      width: "80%",
      padding: 16,
      alignItems: "center",
    },
    registerButton: {
      marginTop: 16,
      alignItems: "center",
    },
    registerButtonText: {
      color: "blue",
      textDecorationLine: "underline",
    }
  });
