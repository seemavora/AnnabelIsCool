import React, { Component } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import StyledButton from '../../components/StyledButton/index';

class SelectRegistration extends Component {
    state = {
        feature: '',
    }

    render() {
        return (
            <View style={styles.fpBackground}>
                <View style={styles.titles}>
                    <Text style={styles.topText}>Create Your Account</Text>
                    <Text style={styles.step}>Step 2. Select The Feature You Want</Text>
                </View>

                <View style={styles.featureGroup}>
                    <Pressable style={styles.friendButton}>
                        <Text style={styles.text}>Find Friends</Text>
                    </Pressable>
                    <Pressable style={styles.studyButton}>
                        <Text style={styles.text}>Find Study Group</Text>
                    </Pressable>
                    <Pressable style={styles.bothButton}>
                        <Text style={styles.text}>Both</Text>
                    </Pressable>
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

export default SelectRegistration;