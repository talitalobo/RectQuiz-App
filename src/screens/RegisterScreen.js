import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Theme from '../themes/AppTheme.json';

//type Props = {};
export default class LoginScreen extends Component/*<Props>*/ {
    componentDidMount() {
      // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
        console.log(Theme.color);
    }

    _login = () => {
        this.props.navigation.replace('Home', {});
    }
  
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.header}>Rect Quiz</Text>
                <Text style={styles.label}></Text>
                <TextInput
                    style={styles.input}
                    //maxLength={maxLength}
                    underlineColorAndroid={Theme.textColor}
                    autoCapitalize='words'
                    placeholder="Email"
                    onChangeText={(email) => this.setState({email})}
                />
                <Text style={styles.label}></Text>
                <TextInput
                    style={styles.input}
                    //keyboardType='numeric'
                    //maxLength={15}
                    underlineColorAndroid={Theme.textColor}
                    placeholder="Senha"
                    onChangeText={(senha) => this.setState({senha})}
                    //value={this.state.phone}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this._login}>
                    <Text style={styles.buttonText}>CONTINUAR</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.backgroundColor,
    },
    center: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        //marginVertical: 20,
        paddingVertical: 25,
        //height: 100,
        //width: '100%',
        backgroundColor: Theme.backgroundColor,
        borderRadius: 3,
        elevation: 2
    },
    header: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20,
        color: Theme.textColor
    },
    label: {
        width: '80%',
    },
    input: {
        width: '80%',
        marginBottom: 15,
        padding: 5,
        color: Theme.textColor,
    },
    button: {
        width: '80%',
        marginTop: 25,
        padding: 10,
        backgroundColor: Theme.color,
        alignItems: 'center',
        borderRadius: 3,
        elevation: 2
    },
    buttonText: {
        fontWeight: 'bold',
        color: Theme.buttonTextColor
    },
  });
  