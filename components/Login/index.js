import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    render() {
        return (
            <View style={styles.fpBackground} >
                <View style={styles.titles}>
                    <Text style={styles.topText}>Welcome Back!</Text>
                </View>

                <View style={styles.inputGroup}>
                    <TextInput style={styles.input}
                        placeholder='Email'
                        onChangeText={this.handleEmail}
                    />
                    <TextInput style={styles.input}
                        placeholder='Password'
                        onChangeText={this.handlePassword}
                    />
                    <Text style={styles.text}>
                        Forgot Password? Click Here.
                    </Text>
                </View>

                <View style={styles.buttonGroup}>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            margin: 20,
                        }}
                    />
                    <StyledButton
                        content={'Login'}
                        color='#171A20CC'
                        textColor='#FFFFFF'
                    />
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        margin: 20,
                    }}
                />
            </View >
        )
    }

};

export default Login;