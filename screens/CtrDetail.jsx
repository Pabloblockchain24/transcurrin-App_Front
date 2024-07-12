import { VistaCtr } from "../components/VistaCtr"
import { Text, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCtrFiltered } from "../features/ctrSlice"
import { useGetServicesQuery } from "../services/appServices"
export const CtrDetail = () => {
    const dispatch = useDispatch();
    const ctrToSearch = useSelector((state) => state.ctrSearch.ctrSelected)
    const { data: contenedores, isLoading, error } = useGetServicesQuery();
    const [ctrFiltered, setCtrFilter] = useState("");

    useEffect(() => {
        const filtered = contenedores.filter((ctr) =>
            ctr.code.toLowerCase().startsWith(ctrToSearch.toLowerCase())
        );
        const filteredCtr = filtered.length > 0 ? filtered[0] : null;
        setCtrFilter(filteredCtr);
        dispatch(setCtrFiltered(filteredCtr));
    }, [ctrToSearch]);

    return (
        <View>
            {ctrFiltered ? (
                <VistaCtr />
            ) : (
                <Text style={styles.notFoundText}>Contenedor "{ctrToSearch}" no encontrado</Text>
            )}
        </View>
      
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 32,
        paddingHorizontal: 2,
    },
    notFoundText: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red'
    }
});
