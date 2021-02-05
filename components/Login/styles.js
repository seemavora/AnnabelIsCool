import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    fpBackground: {
        width: '100%',
        height: Dimensions.get('window').height,
        backgroundColor: '#f1fefe',
    },
    buttonGroup: {
        marginTop: '45%'
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
    text: {
        width: '100%',
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '300',
        color: '#5c5e62'
    },
    input: {
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20,
        height: 40,
        borderColor: '#00001a',
        borderWidth: 1,
        paddingLeft: 20,
        fontSize: 18,
    },
    inputGroup: {
        paddingTop: '10%',
    },
});

export default styles;