import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, Dimensions, StatusBar, ScrollView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import GuidItem from '../components/GuidItem';
import { GuidData } from '../components/GuidData';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');


const Home = () => {

    const renderItem = ({ item }: any) => {
        return (
            <GuidItem
                image={item.image}
                title={item.title}
                color={item.color}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>

                <StatusBar backgroundColor="grey" barStyle="light-content" />

                <View style={[styles.row, styles.center, { height: height * 0.05 }]}>

                    <View style={[styles.row, { width: '25%' }]}>
                    </View>
                    <View style={[styles.row, styles.center, { width: '50%' }]}>
                        <Text style={styles.h3}>FRIDAY</Text>
                    </View>
                    <View style={[styles.row, styles.center, { width: '25%' }]}>
                        <View style={styles.icons}>
                            <Icon name="search" size={25} color="grey" />
                        </View>
                        <View style={styles.icons}>
                            <Icon name="person" size={25} color="grey" />
                        </View>

                    </View>

                </View>

                <View style={[styles.row]}>
                    <Text style={styles.h1}>Good afternoon</Text>
                </View>

                <View style={[styles.column, styles.body]}>
                    <Text style={[styles.h2, { color: 'black' }]}>FRIDAY</Text>
                    <FlatList
                        data={GuidData}
                        horizontal={true}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.key.toString()}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        ListEmptyComponent={<View><Text>no items</Text></View>}
                    />
                    <View style={styles.imageBGContainer}>
                        <ImageBackground
                            style={styles.imageBG}
                            source={require('../../assets/images/bg.png')}
                            resizeMode="cover"
                            imageStyle={{ borderRadius: width * 0.035 }}
                        >

                            <View style={styles.txtContainer}>
                                <Text style={[styles.h2, { color: 'white' }]}>Edit with confidence</Text>
                                <Text style={[styles.h4, { color: 'white' }]}>Take our short survey to get a meal plan tailored to you</Text>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.h3}>FRIDAY</Text>

                                </TouchableOpacity>
                            </View>


                        </ImageBackground>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView >
    );

}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'grey',
    },
    scroll: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    column: {
        flexDirection: 'column',
        flex: 1
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        marginTop: height * 0.03,
        backgroundColor: 'white',
        borderTopLeftRadius: width * 0.1,
        padding: 20
    },
    icons: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4
    },
    button: {
        width: width * 0.4,
        height: height * 0.04,
        borderRadius: width * 0.25,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'transparent',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
    },
    imageBGContainer: {
        width: '95%',
        height: height * 0.4,
        justifyContent: 'center',
        margin: 4,
    },
    imageBG: {
        flex: 1,
        marginHorizontal: width * 0.025
    },
    txtContainer: {
        width: '46%',
        height: '37%',
        position: 'absolute',
        justifyContent: 'space-between',
        left: 20,
        top: 10
    },
    h1: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'PublicSans-Thin',
        alignSelf: 'flex-start'
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'PublicSans-Thin',
    },
    h3: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'normal',
        fontFamily: 'PublicSans-Thin',
    },
    h4: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'normal',
        fontFamily: 'PublicSans-Thin',
    },
});
