import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Theme from '../themes/AppTheme.json';

//type Props = {};
export default class LoginScreen extends Component/*<Props>*/ {
    constructor(props){
        super(props);

        this._openLogin();
    }
    componentDidMount() {
      // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
        console.log(Theme.color);
    }

    _openLogin = () => {
        this.props.navigation.replace('Login', {});
    }
    _openRegister = () => {
        this.props.navigation.navigate('Register', {});
    }
  
    render() {
      return (
        <ImageBackground 
            source={require('../assets/img/login.png')}
            style={styles.container}>
            <Text style={styles.header}>ALERTA Celular | AMAPÁ</Text>
            <View style={styles.center}>
                <Text style={styles.label}>Já possui cadastro ?</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this._openLogin}>
                    <Text style={styles.buttonText}>SIM, ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this._openRegister}>
                    <Text style={styles.buttonText}>NÃO, FAZER CADASTRO</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.backgroundColor,
    },
    center: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //flexWrap: 'wrap',
        marginVertical: 20,
        paddingVertical: 25,
        //height: 100,
        //width: '100%',
        backgroundColor: Theme.backgroundColor+'ee',
        borderRadius: 3,
        elevation: 4
    },
    header: {
        //alignItems: 'center',
        //justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 30,
        //marginHorizontal: 20,
        color: Theme.textColor,
        textShadowOffset: {width: 0, height: 1},
        textShadowColor: 'white',
        textShadowRadius: 10,
        textAlign: 'center'
    },
    label: {
        width: '80%',
        fontWeight: 'bold',
        fontSize: 16,
        color: Theme.textColor,
        marginBottom: 10,
        fontFamily: 'Roboto',
    },
    input: {
        width: '80%',
        marginBottom: 15,
        padding: 5,
        color: Theme.textColor,
    },
    button: {
        width: '80%',
        marginVertical: 20,
        padding: 10,
        backgroundColor: Theme.color,
        alignItems: 'center',
        borderRadius: 3,
        elevation: 2,
    },
    buttonText: {
        fontWeight: 'bold',
        color: Theme.buttonTextColor,
    },
  });
  