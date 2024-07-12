import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Card } from "./Card";

import moment from 'moment';
import { useGetServicesQuery } from "../services/appServices";


export const CardsList = () => {

  const { data: contenedores, isLoading, error } = useGetServicesQuery();

  if (isLoading) {
    return <Text>Cargando</Text>;
  }

  const unidadesPuerto = contenedores.filter((contenedor) => {
    const etaDate = moment(contenedor.ETA, "DD-MM-YYYY");
    return etaDate.isSameOrBefore(moment(), 'day') && contenedor.fecha_retiro === "";
});

const unidadesDeposito = contenedores.filter((contenedor) => {
  return contenedor.fecha_entrega === "" && contenedor.fecha_retiro !== ""
});

const entregasDia = contenedores.filter((contenedor) => {
  return contenedor.fecha_entrega === moment().format("DD-MM-YYYY");
});

const vaciosPendientes = contenedores.filter((contenedor) => {
  return contenedor.fecha_retiro !== "" && contenedor.fecha_devolucion === "";
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
