import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import StyledButton from '../../components/StyledButton/index';
import FeatureList from '../../components/FeatureOverview/FeatureList/index'

const FP = (props) => {
    return (
        <View style={styles.fpBackground}>
            <View style={styles.titles}>
                <Text style={styles.topText}>Welcome To</Text>
                <Text style={styles.bottomText}>WADDLE</Text>
            </View>
            <View style={styles.buttonGroup}>
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
            {/* <View>
                <FeatureList></FeatureList>
            </View> */}
            {/* <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    margin: 20,
                }}
            /> */}
        </View >
    )
};

export default FP;