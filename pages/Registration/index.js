import React, { Component } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import StyledButton from '../../components/StyledButton/index';

class GeneralRegistration extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        repassword: '',
        university: '',
        gender: '',
    }

    handleName = (text) => {
        this.setState({ name: text })
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    handleRePassword = (text) => {
        this.setState({ repassword: text })
    }
    
    handleUniversity = (text) => {
        this.setState({ university: text })
    }

    handleGender = (text) => {
        this.setState({ gender: text })
    }

    render() {
        return (
            <View style={styles.fpBackground} >
                <View style={styles.titles}>
                    <Text style={styles.topText}>Create Your Account</Text>
                    <Text style={styles.step}>Step 1. General Information</Text>
                </View>

                <View style={styles.inputGroup}>
                    <TextInput style={styles.input}
                        placeholder='Full Name'
                        placeholderTextColor='#262626'
                        onChangeText={this.handleName}
                    />
                    <TextInput style={styles.input}
                        placeholder='Email'
                        placeholderTextColor='#262626'
                        onChangeText={this.handleEmail}
                    />
                    <TextInput style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='#262626'
                        onChangeText={this.handlePassword}
                    />
                    <TextInput style={styles.input}
                        placeholder='Re-enter Password'
                        placeholderTextColor='#262626'
                        onChangeText={this.handleRePassword}
                    />
                    <TextInput style={styles.input}
                        placeholder='University'
                        placeholderTextColor='#262626'
                        onChangeText={this.handleUniversity}
                    />
                    <TextInput style={styles.input}
                        placeholder='Gender'
                        placeholderTextColor='#262626'
                        onChangeText={this.handleGender}
                    />
                </View>

                <View style={styles.buttonGroup}>
                    <StyledButton
                        content={'Go Back'}
                        color='#f4f6fa'
                        textColor='#171A20CC'
                    />
                    <StyledButton
                        content={'Next'}
                        color='#171A20CC'
                        textColor='#f4f6fa'
                    />
                </View>
            </View >
        )
    }

};

export default GeneralRegistration;