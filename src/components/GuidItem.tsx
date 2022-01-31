import React from 'react';
import { Text, StyleSheet, Image, View, Dimensions } from 'react-native';
import { GUIDITEM } from './GuidData';

const { width, height } = Dimensions.get('window');

const GuidItem = ({ image, title, color }: GUIDITEM) => {


    return (
        <View style={[styles.item, { backgroundColor: color }]}>

            <View style={styles.imageContainer} >
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.label}>
                <Text style={styles.h1}>{title}</Text>
            </View>
        </View >
    );
}

export default GuidItem;

const styles = StyleSheet.create({
    item: {
        width: width / 1.8,
        height: height / 2.5,
        borderRadius: width * 0.05,
        margin: 8,
        flexDirection: 'column'
    },
    imageContainer: {
        width: '100%',
        height: '75%',
        maxHeight: '75%',
        maxWidth: '100%'
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: width * 0.05,
        borderTopRightRadius: width * 0.05,

    },
    label: {
        padding: 10,
        flex: 1,
        borderBottomLeftRadius: width * 0.05,
        borderBottomRightRadius: width * 0.05
    },
    h1: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'PublicSans-Thin',
        alignSelf: 'flex-start'
    }
});
