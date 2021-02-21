import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    fpBackground: {
        width: '100%',
        height: Dimensions.get('window').height,
        backgroundColor: '#bacff7',
    },
    buttonGroup: {
        marginTop: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titles: {
        textAlign: 'center',
        marginTop: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topText: {
        width: '100%',
        fontSize: 34,
        fontWeight: '300',
        color: '#f4f6fa',
        textAlign: 'center',
    },
    text: {
        width: '100%',
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '200',
        // color: '#171A20CC',
    },
    input: {
        marginTop: 15,
        marginLeft: 55,
        marginRight: 55,
        borderRadius: 20,
        height: 40,
        borderColor: '#00001a',
        borderWidth: .5,
        paddingLeft: 20,
        fontSize: 15,
    },
    inputGroup: {
        paddingTop: '20%',
    },
});

export default styles;