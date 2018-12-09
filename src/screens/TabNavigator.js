import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from 'react-navigation';
import Theme from '../themes/AppTheme.json';
//screens
import UserScreen from './UserScreen';
import DenunciaScreen from './DenunciaScreen';
import RankingScreen from './RankingScreen';
import QuizScreen from './QuizScreen';
import SatisfacaoScreen from './SatisfacaoScreen';


export default createBottomTabNavigator(
  {
    Ranking: { 
        screen: RankingScreen,
    },
    Perfil: { 
        screen: UserScreen,
    },
    Quiz: { 
        screen: QuizScreen,
    },
    Avalie: { 
        screen: SatisfacaoScreen,
    },
    Denuncie: { 
        screen: DenunciaScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let size = 30;
        switch(routeName){
            case 'Ranking':
                iconName = `medal`;
                break;
            case 'Perfil':
                iconName = `account${focused ? '' : '-outline'}`;
                break;
            case 'Quiz':
                iconName = `home${focused ? '' : '-outline'}`;
                break;
            case 'Avalie':
                iconName = `message-text${focused ? '' : '-outline'}`;
                break;
            case 'Denuncie':
                iconName = `alert-circle${focused ? '' : '-outline'}`;
                break;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon 
            name={iconName} 
            size={size} 
            color={tintColor}
            style={{paddingVertical: 20}}
        />;
      },
    }),
    tabBarOptions: {
        activeTintColor: Theme.iconActiveColor,
        inactiveTintColor: Theme.iconDisableColor,
        labelStyle: {fontSize: 10, fontWeight: '500'},
        headerStyle: {
            height: 0,
          },
        style: {
            height: 70, 
            paddingVertical: 6,
            elevation: 4,
            backgroundColor: Theme.barColor
            //shadowOffset: 
        }
    },
  }
);