import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const Home = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.h1}>
                Welcome
            </Text>
        </SafeAreaView>
    );

}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        color: '#22A25E',
        fontSize: 25,
        fontWeight: 'normal',
        fontFamily: 'PublicSans-Thin'
    },
    h2: {
        color: '#22A25E',
        fontSize: 25,
        fontFamily: 'PublicSans-Thin'
    },
});
