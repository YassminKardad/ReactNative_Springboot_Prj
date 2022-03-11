import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const Home = props => {
    return (
        <View style={styles.container} >
            <Text style={styles.text1}>Hey There !  </Text>
            <Text style={styles.text2}> Are you ready ?? :) </Text>
            <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Login')} >
                <Text style={styles.text3}> Let's Get Started </Text>
            </TouchableOpacity>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff'
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'black',

    },
    text2: {

        FontSize: 30,
        color: 'black',
    },
    contBtn: {
        marginTop: 20,
    },

    btn: {
        width: '50%',
        height: 52,
        backgroundColor: 'hsl(300, 100%, 10%)',
        borderRadius: 20,
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },
    text3: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }

});

export default Home;