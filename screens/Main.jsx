import React, { useState } from "react";

import {
    SafeAreaView,
    Text,
    StyleSheet,
    ScrollView,
    useWindowDimensions,
    View
} from "react-native";
import { User } from "../components/User";
import { SearchCtr } from "../components/SearchCtr";
import { CardsList } from "../components/CardList";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setCtrSelected } from "../features/ctrSlice";

export const Main = () => {

    const { navigate } = useNavigation();
    const dispatch = useDispatch();
    const [ctrToSearch, setCtrToSearch] = useState("");

    const navigateToCtrDetail = () => {
        dispatch(setCtrSelected(ctrToSearch));
        navigate("CtrDetail");
        setCtrToSearch("");
    };

    const styles = createStyles(useWindowDimensions().height);


    return (

        <ScrollView>
            <SafeAreaView style={styles.safeArea} >

                    <User />
                    <SearchCtr onChangeText={setCtrToSearch} value={ctrToSearch} onSearch={() => navigateToCtrDetail()} />
                    <CardsList />

            </SafeAreaView>
        </ScrollView>

    );
};

const createStyles = deviceHeight =>
    StyleSheet.create({
        safeArea: {
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 32,
            paddingHorizontal: 2,
            backgroundColor: "#ffa70f",
            height: deviceHeight,
        },
        linearGradient: {
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5
          }

    })


export default Main;
