import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import moment from 'moment';
import { useGetServicesQuery } from "../services/appServices";

export const DevVacio = () => {
    const fechaActualDD_MM = moment().format("DD-MM");
    const { data: contenedores, isLoading, error } = useGetServicesQuery();
    const [contenedoresPuerto, setContenedoresPuerto] = useState([]);

    useEffect(() => {
        if (contenedores) {
            const filtrados = contenedores.filter((contenedor) => {
                return contenedor.fecha_retiro !== "" && contenedor.fecha_devolucion === "";
            });
            setContenedoresPuerto(filtrados);
        }
    }, [contenedores, fechaActualDD_MM]);

    if (isLoading) {
        return <Text>Cargando</Text>;
    }

    if (error) {
        return <Text>Error</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Vacios pendientes {fechaActualDD_MM}</Text>
            <View style={styles.tableContainer}>
                <View style={[styles.tableHeader, styles.row]}>
                    <Text style={[styles.headerText, styles.cell]}>Carpeta</Text>
                    <Text style={[styles.headerText, styles.cell]}>Code</Text>
                    <Text style={[styles.headerText, styles.cell]}>Deposito Devolución</Text>
                    <Text style={[styles.headerText, styles.cell]}>Fecha Entrega</Text>
                    <Text style={[styles.headerText, styles.cell]}>Demurrage</Text>

                </View>
                {contenedoresPuerto.length > 0 ? (
                    contenedoresPuerto.map((contenedor, index) => (
                        <View key={contenedor.code} style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
                            <Text style={[styles.cell, styles.rowText]}>{contenedor.carpeta}</Text>
                            <Text style={[styles.cell, styles.rowText]}>{contenedor.code}</Text>
                            <Text style={[styles.cell, styles.rowText]}>{contenedor.dep_DEV}</Text>
                            <Text style={[styles.cell, styles.rowText]}>{contenedor.fecha_entrega}</Text>
                            <Text style={[styles.cell, styles.rowText]}>{contenedor.DEMURRAGE}</Text>

                        </View>
                    ))
                ) : (
                    <Text style={styles.noUnidades}>No hay unidades en puerto.</Text>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        paddingVertical: 20,
    },
    tableContainer: {
        backgroundColor: '#f2f2f2',
        borderRadius: 2,
        overflow: 'hidden',
    },
    tableHeader: {
        backgroundColor: 'orange',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
    },
    rowEven: {
        backgroundColor: '#fff',
    },
    rowOdd: {
        backgroundColor: '#f9f9f9',
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    rowText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 10,
    },
    cell: {
        borderRightWidth: 0,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        fontSize: 10,
    },
    noUnidades: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 20,
    },
});
