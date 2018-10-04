/*
 * Basic app create by Amon Santos Campos
 * using React-Native@0.57.1
 * with Splash-Screen, Material-Design and
 * React-Navigation intalled.
 * Vector-Icons: MaterialDesign e CommunityMaterialDesign
 */

import HomeScreen from './src/screens/HomeScreen'
import { createStackNavigator } from 'react-navigation';


export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});
