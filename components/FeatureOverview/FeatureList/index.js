import React from 'react';
import { View, FlatList, Dimensions, ScrollView } from 'react-native';
import styles from './styles';
import features from './features.js';
import FeatureItem from "../FeatureItem/index";

const FeatureList = (props) => {

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                data={features}
                renderItem={({ item }) => <FeatureItem features={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
        </View>
    );
};

export default FeatureList;