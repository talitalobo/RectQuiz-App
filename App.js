/*
 * Basic app create by Amon Santos Campos
 * using React-Native@0.57.1
 * with Splash-Screen, Material-Design and
 * React-Navigation intalled.
 * Vector-Icons: MaterialDesign e CommunityMaterialDesign
 */

import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import TabNavigator from './src/screens/TabNavigator';
import RegisterScreen from './src/screens/RegisterScreen'
import IntroScreen from './src/screens/IntroScreen'

export default createStackNavigator({
  Intro: {
    screen: IntroScreen,
    navigationOptions: {
      headerStyle: {
        height: 0,
      },
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerStyle: {
        height: 0,
      },
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerStyle: {
        height: 0,
      },
    },
  },
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      headerStyle: {
        height: 0,
      },
    },
  }
});
