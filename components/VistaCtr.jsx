import {View, Text, StyleSheet} from 'react-native'
import Octicons from '@expo/vector-icons/Octicons';
import { useSelector } from "react-redux";

export const VistaCtr = () => {
    const ctrFiltered = useSelector((state) => state.ctrSearch.ctrFiltered)
    
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Octicons name="container" size={24} color="#fff" />
                <Text style={styles.headerText}>{ctrFiltered.container}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.row}>
                    <Text style={styles.label}>Código:</Text>
                    <Text style={styles.value}>{ctrFiltered.container}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Producto:</Text>
                    <Text style={styles.value}>{ctrFiltered.tipo}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Fecha Retiro Puerto:</Text>
                    <Text style={styles.value}>{ctrFiltered.retiroPuerto}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Chofer Entrega Planta: </Text>
                    <Text style={styles.value}>{ctrFiltered.choferEntrega}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Fecha Entrega Planta:</Text>
                    <Text style={styles.value}>{ctrFiltered.entrega}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Fecha Devolución Vacio:</Text>
                    <Text style={styles.value}>{ctrFiltered.fechaVacio}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Deposito Devolución:</Text>
                    <Text style={styles.value}>{ctrFiltered.depotDevolucion}</Text>
                </View>
   

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        marginVertical: 50,
        marginHorizontal: 40,
        overflow: 'hidden',
    },
    header: {
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    body: {
        paddingTop: 20 ,
        paddingBottom:40,
        paddingHorizontal:20
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        marginRight: 10
    },
    value: {
        color: '#555',
        flex: 2,
        marginLeft: 10
    },
});