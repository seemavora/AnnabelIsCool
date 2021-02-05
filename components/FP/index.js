import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const FP = (props) => {
    return (
        <View style={styles.fpBackground}>
            <View style={styles.titles}>
                <Text style={styles.topText}>Welcome To</Text>
                <Text style={styles.bottomText}>PEGGU+</Text>
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
                    content={'Register Here'}
                    color='#171A20CC'
                    textColor='#FFFFFF'
                />
                <StyledButton
                    content={'Login'}
                    color='#FFFFFFA6'
                    textColor='#171A20'
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
};

export default FP;