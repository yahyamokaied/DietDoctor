import React from 'react';
import { Text, StyleSheet, Image, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface GUIDITEM {
    image: string;
    title: string;
}

const GuidItem = ({ image, title }: GUIDITEM) => {


    const localImage = { uri: image };

    return (
        <View style={styles.item}>

            <View style={styles.imageContainer} >
                <Image
                    source={localImage}
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
        backgroundColor: 'pink',
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
