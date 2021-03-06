import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    fpBackground: {
        width: '100%',
        height: Dimensions.get('window').height,
        backgroundColor: '#bacff7',
    },
    buttonGroup: {
        marginTop: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titles: {
        textAlign: 'center',
        marginTop: '15%',
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
    input: {
        marginTop: 26,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 20,
        height: 40,
        borderColor: '#ffffff',
        borderWidth: .5,
        paddingLeft: 20,
        fontSize: 15,
        fontWeight: '200',
        backgroundColor:'#e5ecff',
    },
    inputGroup: {
        paddingTop: '7%',
    },
});

export default styles;