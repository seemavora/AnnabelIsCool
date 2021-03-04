import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../../StyledButton/index';

const FeatureItem = (props) => {

    const { name, tagline, image } = props.features;
    return (
        <View style={styles.carContainer}>
            <Text style={styles.waddle}>WADDLE</Text>
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}{" "}
                </Text>
            </View>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.buttonsContainer}>
                <StyledButton
                    content={'Register Here'}
                    color='#f4f6fa'
                    textColor='#171A20CC'
                />
                <StyledButton
                    content={'Login'}
                    color='#171A20CC'
                    textColor='#f4f6fa'
                />
            </View>

        </View>
    );
};

export default FeatureItem;