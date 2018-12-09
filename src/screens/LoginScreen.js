import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../themes/AppTheme.json'

const  {height, width} = Dimensions.get('window');
//type Props = {};
const size = 30;
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
            <Image 
                source={require('../assets/img/rectquiz.png')}
                style={{
                    height: 120,
                    width: 120,
                    resizeMode: 'contain',
                    marginVertical: 15
                }}
            />
            <Image 
                source={require('../assets/img/login.png')}
                style={{
                    height: width*659/1464,
                    width: width,
                    resizeMode: 'contain',
                    position: 'absolute',
                    bottom: 18,
                    //marginVertical: 15
                }}
            />
            <View style={styles.center}>
                <View style={styles.item}>
                    <Icon
                        name='account'
                        color='#fff'
                        size={size}
                    />
                    <TextInput
                        style={styles.input}
                        //maxLength={maxLength}
                        underlineColorAndroid={Theme.barColor}
                        autoCapitalize='words'
                        placeholderTextColor= {Theme.disableColor}
                        placeholder="Usuário"
                        onChangeText={(email) => this.setState({email})}
                    />
                </View>
                <View style={styles.item}>
                    <Icon
                        name='lock'
                        color='#fff'
                        size={size}
                    />
                    <TextInput
                        style={styles.input}
                        //keyboardType='numeric'
                        //maxLength={15}
                        underlineColorAndroid={Theme.barColor}
                        placeholderTextColor= {Theme.disableColor}
                        placeholder="Senha"
                        onChangeText={(senha) => this.setState({senha})}
                        //value={this.state.phone}
                    />
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this._login}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    //style={styles.button}
                    onPress={this._login}>
                    <Text 
                        style={{
                            ...styles.buttonText,
                            marginTop: 20,
                            fontSize: 15,
                            textDecorationLine: 'underline'
                    }}>
                        CADASTRAR
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Theme.barColor,
    },
    center: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //flexWrap: 'wrap',
        //marginVertical: 20,
        //paddingVertical: 25,
        //height: 100,
        //width: '100%',
        //backgroundColor: Theme.backgroundColor+'99',
        //borderRadius: 3,
    },
    header: {
        //alignItems: 'center',
        //justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        //marginVertical: 40,
        color: Theme.textColor
    },
    item: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderBottomWidth: 2,
        paddingBottom: 2,
        marginBottom: 30
    },
    label: {
        width: '80%',
    },
    input: {
        width: '80%',
        //height: 50,
        marginLeft: 5,
        padding: 5,
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        //backgroundColor: Theme,
        borderRadius: 3,
        textAlignVertical: 'bottom'
    },
    button: {
        width: '45%',
        height: 50,
        marginTop: 10,
        padding: 10,
        backgroundColor: Theme.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        //elevation: 2
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20
    },
  });
  