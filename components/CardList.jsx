import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Card } from "./Card";
import moment from 'moment';
import { useGetServicesQuery } from "../services/appServices";


export const CardsList = () => {
  const { data, isLoading, error } = useGetServicesQuery();

  const diasEnPuerto = (fechaISO) => {
    const fechaEta = new Date(fechaISO);
    const fechaHoy = new Date()
    const diferenciaMilisegundos = fechaHoy - fechaEta
    return (Math.ceil(diferenciaMilisegundos/(1000*60*60*24)))
}




  if (isLoading) {
    return <Text>Cargando</Text>;
  }

  const unidadesPuerto = data.filter((contenedor) => {
    return diasEnPuerto(contenedor.eta) > 0 && contenedor.retiroPuerto === null;
  });

const unidadesDeposito = data.filter((contenedor) => {
  return contenedor.retiroPuerto !== null && contenedor.entrega === null;
});

const entregasDia = data.filter((contenedor) => {
  return contenedor.progEntrega !== null && contenedor.entrega === null 
});

const vaciosPendientes = data.filter((contenedor) => {
  return contenedor.retiroPuerto !== null && diasEnPuerto(contenedor.eta) > 0 &&  contenedor.fechaVacio === null
});


  return (

    <View style={styles.cardsSection}>
      <Text style={styles.titleSection}> Resumen operaciones {moment().format("DD-MM")}</Text>
           <Card card={{"card": "STOCK PUERTO","valor": unidadesPuerto.length, "icon": "ship"}} />
           <Card card={{"card": "STOCK DEPOSITO","valor": unidadesDeposito.length, "icon": "industry"}} />
           <Card card={{"card": "ENTREGAS DEL DÍA","valor": entregasDia.length, "icon": "truck"}} />
           <Card card={{"card": "VACIOS PENDIENTES","valor": vaciosPendientes.length, "icon": "cube"}} />

    </View>


  );
};

const styles = StyleSheet.create({
  cardsSection: {
    width: "90%",
    alignItems: "center",
    padding: 16,
    marginTop: 20,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  titleSection:{
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    paddingVertical:10,
    color: "black"
  }
});
