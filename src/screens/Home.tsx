import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, Dimensions, StatusBar, ScrollView, FlatList } from 'react-native';
import GuidItem from '../components/GuidItem';

const { width, height } = Dimensions.get('window');


const Home = () => {

    interface GUIDITEM {
        image: string;
        title: string;
    }

    const GuidData = [
        {
            key: 1,
            image: 'https://previews.123rf.com/images/foodandmore/foodandmore1709/foodandmore170900124/85953443-gourmet-cooked-meats-and-vegetables-in-frying-pans-with-seasoning-and-garnishes-on-a-dark-background.jpg',
            title: 'asdadas'
        },
        {
            key: 2,
            image: 'https://saladswithanastasia.com/wp-content/uploads/2020/06/VEGAN-CELERY-PORT-01.jpg',
            title: 'asdadas'
        }
    ];

    const renderItem = ({ item }: any) => {
        return (
            <GuidItem
                image={item.item}
                title={item.title}
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
                        </View>
                        <View style={styles.icons}>
                        </View>

                    </View>

                </View>

                <View style={[styles.row]}>
                    <Text style={styles.h1}>Good afternoon</Text>
                </View>

                <View style={[styles.column, styles.body]}>
                    <Text style={styles.h2}>FRIDAY</Text>

                    <FlatList
                        data={GuidData}
                        horizontal={true}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.key.toString()}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        ListEmptyComponent={<View><Text>no items</Text></View>}
                    />



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
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        height: height * 0.75,
        width: width,
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
    h1: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'PublicSans-Thin',
        alignSelf: 'flex-start'
    },
    h2: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'PublicSans-Thin',
        letterSpacing: 3
    },
    h3: {
        color: 'white',
        //color: '#22A25E',
        fontSize: 15,
        fontWeight: 'normal',
        fontFamily: 'PublicSans-Thin',
        letterSpacing: 3
    },
});
