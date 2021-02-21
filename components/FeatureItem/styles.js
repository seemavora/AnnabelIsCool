import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        minWidth: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#bacff7',
    },
    titles: {
        marginTop: '14%',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        color: '#f4f6fa',
        textAlign: 'center',
    },
    waddle: {
        marginTop: '20%',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 42,
        fontWeight: '400',
        color: '#f4f6fa',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62',
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: '7%',
    },
    buttonsContainer: {
        marginTop: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default styles;