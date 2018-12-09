import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card, Button} from 'react-native-material-ui'
import Theme from '../themes/AppTheme.json'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const size = 180;

//type Props = {};
export default class TemaCard extends Component/*<Props>*/ {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
  }
    componentDidMount() {
      // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        console.log('user');
    }

    _renderOpen = () => {
      if(this.state.open)
        return(
          <View style={styles.open}>
            <TouchableHighlight
              style= {{
                  ...styles.button,
                  backgroundColor: '#ad3335'
              }}
            >
              <Text style= {styles.buttonText}>DIFÍCIL</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style= {{
                ...styles.button,
                  backgroundColor: '#c4b73f'
              }}
            >
              <Text style= {styles.buttonText}>MÉDIO</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style= {{
                ...styles.button,
                  backgroundColor: '#0b6e45'
              }}
            >
              <Text style= {styles.buttonText}>FÁCIL</Text>
            </TouchableHighlight>
          </View>
        );
    }

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.timer}>
              <Text style={styles.timerText}>
                {'01:30'}
              </Text>
            </View>
            <Text style={styles.perguntaText}>
              {`this.state.pergunta`}
            </Text>
            <View 
              style={styles.resposta}
              onPress={() => {}}
            >
                <Text style={styles.respostaText}>
                  {`resposta1`}
                </Text>
            </View>
            <View 
              style={styles.resposta}
              onPress={() => {}}
            >
                <Text style={styles.respostaText}>
                  {`resposta2`}
                </Text>
            </View>
            <View 
              style={styles.resposta}
              onPress={() => {}}
            >
                <Text style={styles.respostaText}>
                  {`resposta3`}
                </Text>
            </View>
            <View 
              style={styles.resposta}
              onPress={() => {}}
            >
                <Text style={styles.respostaText}>
                  {`resposta4`}
                </Text>
            </View>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText}>
                {'RESPONDER'}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.closeButton}>
              <View/>
            </TouchableHighlight>
            <Icon
                  style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                  }}
                  name='close'
                  color='#fff'
                  size={30}
            />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //width: '95%',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: Theme.backgroundColor,
    },
    timer: {
      width: '25%',
      marginTop: 20,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
    timerText: {
      color: '#000',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
    },
    perguntaText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '500',
      margin: 20,
    },
    resposta:{
      width: '90%',
      height: 50,
      marginTop: 10,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
    respostaText:{
      color: '#000',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
    },
    button: {
      width: '90%',
      //height: 50,
      marginTop: 30,
      padding: 10,
      backgroundColor: Theme.barColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '500',
    },
    closeButton: {
      height: 70,
      width: 100,
      position: 'absolute',
      top: -30,
      right: -40,
      backgroundColor: '#832f30',
      alignItems: 'center',
      justifyContent: 'center',
      transform: [{
        rotateZ: '45deg',
      }]
    }
  });
  