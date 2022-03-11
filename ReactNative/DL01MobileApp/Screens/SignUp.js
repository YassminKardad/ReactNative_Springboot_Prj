import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, ScrollView, componentDidUpdate, TouchableOpacity } from 'react-native';
import { showMessage } from "react-native-flash-message";
import axios from 'axios';


const SignUp = props => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [psswd, setPassword] = useState('');
    const [psswd2, setPassword2] = useState('');

    const Move = () => {
        props.navigation.navigate('Welcome');
        clear();
    }

    const clear = () => {
        setName("");
        setEmail("");
        setPassword("");
    }
    const handleChangeName = event => {
        setName(event.target.value);

    }
    const handleChangeEmail = event => {
        setEmail(event.target.value);
    }
    const handleChangePsswd = event => {
        setPassword(event.target.value);
    }
    const handleChangePsswd2 = event => {
        setPassword2(event.target.value);
    }
    const validate = (email) => {
        const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return expression.test(String(email).toLowerCase());
    }

    const postUser = () => {

        let data = {
            "name": name,
            "email": email,
            "password": psswd,
            "password2": psswd2
        }
        let data1 = {
            "name": name,
            "email": email,
            "password": psswd,

        }
        console.log(data.password);
        console.log(data.password2);
        if (data.name == "" || data.email == "" || data.password == "" || data.password2 == "") {
            console.log("EMPTY FIELDS");
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
        else if (!validate(data.email)) {
            console.log("EMAIL NOT VALID");
            showMessage({
                message: "this email is not valid ! ",
                type: "danger",
                animated: true,
                animationDuration: 2000,
                icon: "danger",
                style: {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                },


            });
            setEmail("");
        }
        else if (!(data.password2 == data.password)) {
            showMessage({
                message: "please Confirm the same password you've already entered",
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

            axios.post('http://localhost:8096/register', data)
                .then(function (response) {

                    console.log(response.data);
                    console.log("response", JSON.stringify(response.data))
                    if (response.data == "USER_ALREADY_EXISTS") {
                        console.log("USER EXISTS");
                        showMessage({
                            message: "This user already exists ! Try to LogIn to an existing account ",
                            type: "info",
                            animated: true,
                            animationDuration: 3500,
                            icon: "info",
                            style: {
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            },
                        });
                    }
                    else {
                        showMessage({
                            message: "you've signed Up successfully , Congrats !!  ",
                            type: "success",
                            animated: true,
                            animationDuration: 1000,
                            icon: "success",
                            style: {
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            },
                        });
                        setTimeout(Move, 2000);

                    }
                    clear();

                }).catch(function (error) {
                    console.log("error" + error);

                });
        }
    }


    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.top}><Text style={styles.text1}> Let's get started </Text>
                    <Text style={styles.text2}>  Create an account to get all features </Text></View>
                <View style={styles.bottom}>
                    <View style={styles.FormV}>
                        <TextInput style={styles.inp} placeholder={"Full Name..."} name="name" placeholderTextColor={"#fff"} value={name} onChange={handleChangeName}></TextInput>
                        <TextInput style={styles.inp} placeholder={"Email address.."} name="address" placeholderTextColor={"#fff"} value={email} onChange={handleChangeEmail}></TextInput>
                        <TextInput style={styles.inp} placeholder={"Password..."} secureTextEntry={true} placeholderTextColor={"#fff"} value={psswd} onChange={handleChangePsswd}></TextInput>
                        <TextInput style={styles.inp} placeholder={"Confirm Password..."} secureTextEntry={true} placeholderTextColor={"#fff"} value={psswd2} onChange={handleChangePsswd2}></TextInput>
                        <TouchableOpacity style={styles.btn} onPress={() => postUser()}>
                            <Text style={styles.text3} >Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.FormS}>
                        <Text style={styles.text4}> You already have an account ?</Text>
                        <Text style={styles.text5} onPress={() => props.navigation.navigate('Login')}>Login </Text>

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
        height: '20%',
        backgroundColor: 'rgb(255, 255, 255)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom: {
        width: '100%',
        height: '80%',
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
export default SignUp;