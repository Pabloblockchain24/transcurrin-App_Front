import { SafeAreaView } from "react-native-safe-area-context";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRegisterMutation } from "../services/authServices";
import {registerSchema} from "../validations/registerSchema"
export const Register = () => {
  const navigation = useNavigation();

  const [triggerRegister, { isLoading, isSuccess, isError, error }] = useRegisterMutation();
  const [credentials, setCredentials] = useState({ name: '', company: '', email: '', password: '', role: '' });

  const handleInputChange = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const validation = registerSchema.validateSync({
        email: credentials.email,
        password:credentials.password,
      })
      await triggerRegister(credentials).unwrap();
    } catch (err) {
      console.log(err.message)
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Login');
    }
  }, [isSuccess, navigation]);

  const styles = createStyles(useWindowDimensions().height);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.Register}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputCustom}
            placeholder="Nombre"
            value={credentials.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
          <TextInput
            style={styles.inputCustom}
            placeholder="Empresa"
            value={credentials.company}
            onChangeText={(text) => handleInputChange('company', text)}
          />
          <TextInput
            style={styles.inputCustom}
            placeholder="Correo Electrónico"
            value={credentials.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <TextInput
            style={styles.inputCustom}
            placeholder="Rol"
            value={credentials.role}
            onChangeText={(text) => handleInputChange('role', text)}
          />
          <TextInput
            style={styles.inputCustom}
            placeholder="Contraseña"
            secureTextEntry
            value={credentials.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />

          <Pressable style={styles.boton} onPress={handleRegister} disabled={isLoading}>
            <Text style={styles.botonText}>{isLoading ? 'REGISTRANDO ...' : 'REGISTRARSE'}</Text>
          </Pressable>
          {isError && <Text style={styles.errorText}>Fallo al registrarse, intenta de nuevo.</Text>}
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
    Register: {
      flex: 1,
      height: deviceHeight - 130,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      padding: 16,
      gap: 32,
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
    errorText: {
      color: "red",
      marginTop: 8,
    }
  });
