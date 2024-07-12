import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const Card = ({ card}) => {
  return (
    <View style={styles.card}>
      <FontAwesome name={card.icon} size={24} color="#ffa70f" style={styles.icon} />
      <Text style={styles.cardTitle}>{card.card}</Text>
      <Text style={styles.cardValue}>{card.valor}</Text>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'orange',
    color: 'white',
    padding: 10,
    borderRadius: 12,
    margin: 0,
    width: screenWidth * 0.75,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
  },
  cardValue: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
  },
  icon:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20
  }
});
