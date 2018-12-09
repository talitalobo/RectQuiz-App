import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ListItem} from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../themes/AppTheme.json'

const listStyle = {
  container: {
    backgroundColor: Theme.barColor,
    borderBottomColor: Theme.backgroundColor,
    borderBottomWidth: 1
  },
  primaryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  }
}

//type Props = {};
export default class UserScreen extends Component/*<Props>*/ {
    componentDidMount() {
      // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        console.log('user');
    }

  
    render() {
      return (
        <View style={styles.container}>
        
          <View style={styles.top} >
            <View style={styles.circle}>
              <Icon color='#fff' name="account" size={70}/>
            </View>
            <Text style={styles.userName}>
              Argério Queiroz
            </Text>
          </View>
          <View style={styles.infoBox} >
            <Text style={{...styles.info, borderRightWidth: 1}}>
              {`6\nACERTOS`}
            </Text>
            <Text style={styles.info}>
              {`13\nRESPONDIDAS`}
            </Text>
            <Text style={{...styles.info, borderLeftWidth: 1}}>
              {`7\nERROS`}
            </Text>
          </View>
          <ListItem
              style={listStyle}
              leftElement={
                <Icon color='#fff' name="account" size={30}/>
              }
              centerElement={{
                primaryText: 'Argério Queiroz',
              }}
              onPress={() => {}}
          />
          <ListItem
              style={listStyle}
              leftElement={
                <Icon color='#fff' name="account-box" size={30}/>
              }
              centerElement={{
                primaryText: 'nickname',
              }}
              onPress={() => {}}
          />
          <ListItem
              style={listStyle}
              leftElement={
                <Icon color='#fff' name="email" size={30}/>
              }
              centerElement={{
                primaryText: 'user@gmail.com',
              }}
              onPress={() => {}}
          />
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: Theme.barColor
    },
    top: {
      //height: 150,
      padding: 20,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Theme.backgroundColor
    },
    circle: {
      height: 100,
      width: 100,
      borderRadius: 50,
      backgroundColor: Theme.barColor,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    userName: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '500',
    },
    infoBox: {
      //height: ,
      //width: 100,
      flexDirection: 'row',
      backgroundColor: Theme.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    info: {
      flex: 1,
      textAlign: 'center',
      padding: 5,
      fontWeight: '500',
      color: '#fff',
      borderColor: Theme.barColor,
      borderTopWidth: 1
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  