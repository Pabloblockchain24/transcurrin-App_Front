import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import moment from 'moment';
import { useGetServicesQuery } from "../services/appServices";

export const StockPuerto = () => {
    const fechaActualDD_MM = moment().format("DD-MM");
    const { data: contenedores, isLoading, error } = useGetServicesQuery();
    const [contenedoresPuerto, setContenedoresPuerto] = useState([]);

    useEffect(() => {
        if (contenedores) {
            const filtrados = contenedores.filter((contenedor) => {
                const etaDate = moment(contenedor.ETA, "DD-MM-YYYY");
                return etaDate.isSameOrBefore(moment(), 'day') && contenedor.fecha_retiro === "";
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
            <Text style={styles.title}>Unidades en Puerto {fechaActualDD_MM}</Text>
            <View style={styles.tableContainer}>
                <View style={[styles.tableHeader, styles.row]}>
                    <Text style={[styles.headerText, styles.cell]}>Nave</Text>
                    <Text style={[styles.headerText, styles.cell]}>Code</Text>
                    <Text style={[styles.headerText, styles.cell]}>Carpeta</Text>
                    <Text style={[styles.headerText, styles.cell]}>Fecha Arribo</Text>
                    <Text style={[styles.headerText, styles.cell]}>Producto</Text>
                </View>
                {contenedoresPuerto.length > 0 ? (
                    contenedoresPuerto.map((contenedor, index) => (
                        <View key={contenedor.code} style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
                            <Text style={[styles.cell, styles.rowText]}>{contenedor.NAVE}</Text>
                            <Text style={[styles.cell, styles.rowText]}>{contenedor.code}</Text>
                            <Text style={[styles.cell, styles.rowText]}>{contenedor.carpeta}</Text>
                            <Text style={[styles.cell, styles.rowText]}>{contenedor.ETA}</Text>
                            <Text style={[styles.cell, styles.rowText]}>{contenedor.producto}</Text>
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
