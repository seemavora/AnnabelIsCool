import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    fpBackground: {
        width: '100%',
        height: Dimensions.get('window').height,
        backgroundColor: '#bacff7',
    },
    buttonGroup: {
        marginTop: '13%',
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
        fontSize: 38,
        fontWeight: '300',
        color: '#f4f6fa',
        textAlign: 'center',
    },
    step: {
        fontSize: 23,
        fontWeight: '200',
        textAlign: 'center',
        marginTop: '5%',
    },
    friendButton: {
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#00001a',
        backgroundColor: '#ffe5e5',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 35,
    },
    studyButton: {
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#00001a',
        backgroundColor: '#fdefe8',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 35,
    },
    bothButton: {
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        backgroundColor: '#e5ecff',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 35,
    },
    text: {
        fontSize: 17,
        fontWeight: '300',
    },
    featureGroup: {
        marginTop: '8%',
    }
});

export default styles;