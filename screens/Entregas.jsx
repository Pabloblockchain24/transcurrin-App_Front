import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import moment from "moment";
import { useGetServicesQuery } from "../services/appServices"


export const Entregas = () => {
  const fechaActual = moment().format("DD-MM-YYYY");
  const fechaActualDD_MM = moment().format("DD-MM");
  const [entregasDia, setEntregasDia] = useState([]);
  const { data: contenedores, isLoading, error } = useGetServicesQuery();

  useEffect(() => {
    const ctrsEntregaHoy = contenedores.filter((contenedor) => {
      return contenedor.fecha_entrega === fechaActual;
    });
    setEntregasDia(ctrsEntregaHoy);
  }, [fechaActual]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Entregas día {fechaActualDD_MM}</Text>
      <View style={styles.tableContainer}>
        <View style={[styles.tableHeader, styles.row]}>
          <Text style={[styles.headerText, styles.cell]}>CTR</Text>
          <Text style={[styles.headerText, styles.cell]}>PRODUCTO</Text>
          <Text style={[styles.headerText, styles.cell]}>OPERADOR</Text>
          <Text style={[styles.headerText, styles.cell]}>HORA CARGUÍO</Text>
          <Text style={[styles.headerText, styles.cell]}>HORA ENTREGA</Text>
        </View>
        {entregasDia.length > 0 ? (
          entregasDia.map((contenedor,index) => (
            <View key={contenedor.code} style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
              <Text style={[styles.cell, styles.rowText]}>{contenedor.code}</Text>
              <Text style={[styles.cell, styles.rowText]}>{contenedor.producto}</Text>
              <Text style={[styles.cell, styles.rowText]}>{contenedor.chofer_entrega}</Text>
              <Text style={[styles.cell, styles.rowText]}>{contenedor.hora_carguio}</Text>
              <Text style={[styles.cell, styles.rowText]}>{contenedor.hora_descarga}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noEntregas}>No hay entregas para hoy.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    paddingVertical:20
  },
  tableContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 2,
    overflow: "hidden",
  },
  tableHeader: {
    backgroundColor: "orange",
    flexDirection: "row",
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
  rowEven: {
    backgroundColor: "#fff",
  },
  rowOdd: {
    backgroundColor: "#f9f9f9",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  rowText: {
    flex: 1,
    textAlign: "center",
    fontSize: 10,
  },
  cell: {
    borderRightWidth: 0,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    fontSize:10
  },
  noEntregas: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 20,
  },
});

