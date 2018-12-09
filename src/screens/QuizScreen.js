import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  FlatList
} from 'react-native';
import TemaCard from '../components/TemaCard';
import Quiz from '../components/Quiz'
import Theme from '../themes/AppTheme.json';
import db from '../assets/json/bd.json';


//type Props = {};
export default class QuizScreen extends Component/*<Props>*/ {
    constructor(props) {
      super(props);

      this.state = {
        quizOpen: false,
        numeroPergunta: 0,
      }
    }
    componentDidMount() {
      // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        console.log('user');
    }

    _openCloseQuiz = (data) => {
      console.log('openClose');
      if(this.state.quizOpen){
        this.setState({quizOpen: false});
        console.log('Close');
      }
      else{
        this.setState({quizData: data, quizOpen: true});}
    }
  
    render() {
      if(this.state.quizOpen)
      return(
        <ScrollView style={{flex: 1, backgroundColor: Theme.backgroundColor}}>
          <Quiz
            callback={this.state._openCloseQuiz}
            data={this.state.quizData}
          />
        </ScrollView>
      )
      else
      return (
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <FlatList
              data={db.temas}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({item}) => 
                <TemaCard
                  style={styles.temaCard}
                  label={item.titulo}
                  data={item}
                  callback={this._openCloseQuiz}
                  progress={`${item.porcentagem}%`}
                />
              }
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
  