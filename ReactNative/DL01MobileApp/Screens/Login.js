import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { showMessage } from "react-native-flash-message";
import axios from 'axios';

const Login = props => {
    const [email, setEmail] = useState('');
    const [psswd, setPassword] = useState('');

    const clear = () => {
        setEmail("");
        setPassword("");
    }

    const handleChangeEMAIL = event => {
        setEmail(event.target.value);
    }
    const handleChangePsswd = event => {
        setPassword(event.target.value);
    }

    const Move = () => {
        props.navigation.navigate('Welcome');
        clear();
    }

    const LOGIN = () => {

        let data = {
            "email": email,
            "password": psswd
        }
        if (data.email == "" || data.password == "") {
            console.log("EMPTYYY");
            showMessage({
                message: "please make sure to enter all the fields",
                type: "warning",
                animated: true,
                animationDuration: 1000,
                icon: "warning",
                style: {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                },
                backgroundColor: "gray",

            });

        }
        else {

            axios.post('http://localhost:8096/login', data)
                .then(function (response) {
                    console.log(response.data);
                    console.log("response", JSON.stringify(response.data))
                    if (response.data == "USER_ALREADY_EXISTS") {
                        console.log(response.data);

                        showMessage({
                            message: "You've logged in successfully , Congrats !",
                            type: "success",
                            animated: true,
                            icon: "success",
                            animationDuration: 1500,
                            style: {
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            },
                        });
                        setTimeout(Move, 2000);

                    }
                    else {
                        console.log("USER DOESN T EXIST");
                        showMessage({
                            message: "This user doesn't exist ! Verify your email and password or SignUp to create a new account  ",
                            type: "info",
                            animated: true,
                            animationDuration: 3500,
                            icon: "info",
                            style: {
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            },
                        });
                        clear();
                    }

                }).catch(function (error) {
                    console.log("error" + error);

                });

        }

    }
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.top}><Text style={styles.text1}> Welcome !  </Text>
                    <Text style={styles.text2}> Log in to your account </Text></View>
                <View style={styles.bottom}>
                    <View style={styles.FormV}>
                        <TextInput style={styles.inp} placeholder={"Email Address..."} placeholderTextColor={"#fff"} value={email} onChange={handleChangeEMAIL}></TextInput>
                        <TextInput style={styles.inp} placeholder={"Password..."} placeholderTextColor={"#fff"} secureTextEntry={true} value={psswd} onChange={handleChangePsswd}></TextInput>
                        <TouchableOpacity style={styles.btn} onPress={() => LOGIN()}>
                            <Text style={styles.text3} >Log In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.FormS}>
                        <Text style={styles.text4}> don't have an account ?</Text>
                        <Text style={styles.text5} onPress={() => props.navigation.navigate('SignUp')}>Sign Up </Text>

                    </View>
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
        minHeight: '100vh'
    },
    text1: {
        fontSize: 40,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'black',
    },
    text2: {
        FontSize: 30,
        color: 'black',
    },
    top: {
        width: '100%',
        height: '30%',
        backgroundColor: 'rgb(255, 255, 255)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom: {
        width: '100%',
        height: '70%',
        backgroundColor: 'hsl(300, 100%, 10%)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    FormV: {

        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inp: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        height: 52,
        borderRadius: 10,
        paddingLeft: 15,
        marginTop: 30,
        color: '#fff'
    },

    btn: {
        width: '90%',
        color: 'hsl(300, 100%, 10%)',
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },

    text3: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    FormS: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5
    },
    text4: {
        color: '#fff',


    },
    text5: {
        color: 'grey',
        marginLeft: 15

    }
});

export default Login;