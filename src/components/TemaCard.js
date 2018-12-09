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
        <View style={{elevation: 4, marginVertical: 10}}>
          <Card
            onPress={() => this.setState({open: !this.state.open})}
          >
            <ImageBackground
              source={require('../assets/img/corrupcao.jpg')}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%', 
                height: size,
                opacity: 1
              }}
            />
            <View style={styles.container}>
                <Text style={{...styles.label, paddingTop: size*.5}}>{this.props.label}</Text>
                <View style={styles.info}>
                  <View style={styles.progress}>
                      <Text
                        style={{
                          color: '#000',//Theme.tintColor,
                          fontWeight: '500',
                          textAlign: 'center',
                          fontSize: 20,
                      }}>
                          {this.props.progress}</Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 10,
                          //color: Theme.iconDisableColor
                      }}>
                          Progresso
                      </Text>
                  </View>
                  <Icon color='#fff' name='information' size={40}/>
                </View>
            </View>
            {this._renderOpen()}
          </Card>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      height: size,
      //width: '95%',
      flexDirection: 'row',
      elevation: 4,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundColor: '#0003',
    },
    label: {
      color: '#fff',
      textAlign: 'left',
      fontSize: 24,
      fontWeight: '500',
    },
    info: {
      height: '100%',
      width: '20%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      paddingBottom: 20
    },
    progress: {
      width: '100%',
      //marginVertical: 20,
      padding: 5,
      paddingVertical: 10,
      elevation: 4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginBottom: 5,
      borderBottomEndRadius: 5,
      borderBottomStartRadius: 5,
    },
    open: {
      width: '100%',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      borderRadius: 0,
      elevation: 5
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
    }
  });
  