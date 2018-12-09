import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import TemaCard from '../components/TemaCard';
import Theme from '../themes/AppTheme.json'


//type Props = {};
export default class QuizScreen extends Component/*<Props>*/ {
    componentDidMount() {
      // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        console.log('user');
    }

  
    render() {
      return (
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <TemaCard
              style={styles.temaCard}
              label={'Pequena Corrupçao'}
              progress={'100%'}
            />
            <TemaCard
              style={styles.temaCard}
              label={'Corrupçao'}
              progress={'43%'}
            />
            <TemaCard
              style={styles.temaCard}
              label={'Grande Corrupçao'}
              progress={'0%'}
            />
            </View>
        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: Theme.backgroundColor,
    },
    temaCard: {
      //height: 450,
      //width: '90%'
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
  