import React, { Component } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import StyledButton from '../../components/StyledButton/index';

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
                    <StyledButton
                        content={'Go Back'}
                        color='#f4f6fa'
                        textColor='#171A20CC'
                    />
                    <StyledButton
                        content={'Login'}
                        color='#171A20CC'
                        textColor='#f4f6fa'
                    />
                </View>
            </View >
        )
    }

};

export default Login;