import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export const User = () => {
  const nameUser = useSelector(state => state.auth.user.name);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/user.jpg')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Bienvenido</Text>
        <Text style={styles.nameText}>{nameUser}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center', 
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  imageContainer: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 50,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: 'orange',
  },
  textContainer: {
    width: '45%',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 14,
    color: 'gray',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default User;
