import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground,
  TouchableOpacity,
  ScrollView
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
      numeroPergunta: 0,
      resposta: null,
      respondido: false,
      acertou: null,
    }
  }
    componentDidMount() {
      // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        console.log('user');
    }

    _responder = () => {
      let resposta = this.props.data.quiz[this.state.numeroPergunta][this.state.resposta];
      let respostaCerta = this.props.data.quiz[this.state.numeroPergunta].resposta;
      console.log(resposta===respostaCerta);
      this.setState(
        {
          respondido: true,
          acertou: (resposta===respostaCerta)
        }
      );
    }

    _continuar = () => {
      if(this.state.numeroPergunta==this.props.data.quiz.length){
        this.props.callback()
      }
      this.setState({
        numeroPergunta: this.state.numeroPergunta + 1,
        resposta: null,
        respondido: false,
        acertou: null,
      })
    }

    _renderFeedback = () => {
      if(this.state.respondido){
          return(
            <View style={{
              ...styles.feedback,
              backgroundColor: this.state.acertou ? Theme.barColor+'99' : '#ad333599'
            }}>
              <View style={{
                ...styles.feedbackBox,
                backgroundColor: this.state.acertou ? Theme.barColor : '#ad3335'
              }}>
                  <Text style={styles.buttonText}>
                    {`RESPOSTA ${this.state.acertou ? 'CERTA' : 'ERRADA'}`}
                  </Text>
                  <TouchableOpacity 
                    style={{
                      ...styles.button,
                      backgroundColor: this.state.acertou ? Theme.backgroundColor : '#e73338'
                    }}
                    onPress={this._continuar}
                  >
                    <Text style={styles.buttonText}>
                      CONTINUAR
                    </Text>
                  </TouchableOpacity>
              </View>
            </View>
          );
      }
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
              {this.props.data.quiz[this.state.numeroPergunta].pergunta}
            </Text>
            <TouchableOpacity 
              style={{
                ...styles.resposta,
                backgroundColor: this.state.resposta==='a'? '#38b554' : '#fff'
              }}
              onPress={ () => this.setState({resposta: 'a'}) }
            >
                <Text style={{
                  ...styles.respostaText,
                  color: this.state.resposta==='a' ? '#fff' : '#000'
                }}>
                  {this.props.data.quiz[this.state.numeroPergunta].a}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                ...styles.resposta,
                backgroundColor: this.state.resposta==='b'? '#38b554' : '#fff'
              }}
              onPress={ () => this.setState({resposta: 'b'}) }
            >
                <Text style={{
                  ...styles.respostaText,
                  color: this.state.resposta==='b' ? '#fff' : '#000'
                }}>
                  {this.props.data.quiz[this.state.numeroPergunta].b}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                ...styles.resposta,
                backgroundColor: this.state.resposta==='c'? '#38b554' : '#fff'
              }}
              onPress={ () => this.setState({resposta: 'c'}) }
            >
                <Text style={{
                  ...styles.respostaText,
                  color: this.state.resposta==='c' ? '#fff' : '#000'
                }}>
                  {this.props.data.quiz[this.state.numeroPergunta].c}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                ...styles.resposta,
                backgroundColor: this.state.resposta==='d'? '#38b554' : '#fff'
              }}
              onPress={ () => this.setState({resposta: 'd'}) }
            >
                <Text style={{
                  ...styles.respostaText,
                  color: this.state.resposta==='d' ? '#fff' : '#000'
                }}>
                  {this.props.data.quiz[this.state.numeroPergunta].d}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                ...styles.button,
                backgroundColor: this.state.resposta ? Theme.barColor: Theme.iconDisableColor
              }}
              disabled={!this.state.resposta}
              onPress={this._responder}
            >
              <Text style={{
                ...styles.buttonText,
                color: this.state.resposta ? '#fff' : '#999'
              }}>
                {'RESPONDER'}
              </Text>
            </TouchableOpacity>
            <View style={styles.closeButton}/>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: '#832f3000',
                justifyContent: 'center',
                alignItems: 'center'

              }}
              onPress={this.props.callback}
            >
              <Icon
                  style={{
                    //position: 'absolute',
                    //top: 4,
                    //right: 4,
                  }}
                  name='close'
                  color='#fff'
                  size={30}
              />
            </TouchableOpacity>
            {this._renderFeedback()}
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
      //paddingBottom: 20,
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
      //height: 50,
      marginTop: 10,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
    respostaText: {
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
    },
    feedback: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    feedbackBox: {
      height: 150,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  