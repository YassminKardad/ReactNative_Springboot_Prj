import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


const Welcome = props => {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <Text style={styles.text1}> WELCOME TO YOUR ACCOUNT  !! </Text>
                <View style={styles.pos}>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Login')}>
                        <Text style={styles.text3}>Log out</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',

    },
    text1: {

        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'hsl(300, 100%, 10%))',
    },
    pos: {
        width: '80%',
        display: 'flex',
        alignItems: 'flex-end',
        height: '40%',
        justifyContent: 'flex-end'

    },
    btn: {
        width: '50%',
        height: 50,
        backgroundColor: 'hsl(300, 100%, 10%)',
        borderRadius: 15,
        marginTop: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },
    text3: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',

    },


});


export default Welcome;