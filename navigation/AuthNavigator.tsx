import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

export default createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
});
