import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    fpBackground: {
        width: '100%',
        height: Dimensions.get('window').height,
        backgroundColor: '#f1fefe',
    },
    buttonGroup: {
        marginTop: '10%'
    },
    titles: {
        textAlign: 'center',
        marginTop: '18%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topText: {
        width: '100%',
        alignItems: 'center',
        fontSize: 38,
        fontWeight: '300',
        color: '#5c5e62'
    },
    bottomText: {
        marginTop: '65%',
        width: '100%',
        fontSize: 38,
        fontWeight: '600',
        color: '#5c5e62'
    },

});

export default styles;