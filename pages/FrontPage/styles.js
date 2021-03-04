import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    fpBackground: {
        width: '100%',
        height: Dimensions.get('window').height,
        // backgroundColor: '#f1fefe',
        backgroundColor: '#bacff7',
    },
    buttonGroup: {
        marginTop: '50%',
        flexDirection: 'row',
        width: '75%',
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
        textAlign: 'center',
        fontSize: 38,
        fontWeight: '300',
        color: '#f4f6fa',
    },
    bottomText: {
        marginTop: '65%',
        width: '100%',
        textAlign: 'center',
        fontSize: 38,
        fontWeight: '600',
        color: '#f4f6fa',
    },

});

export default styles;