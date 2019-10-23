import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthStack from './AuthNavigator';
import MainStack from './MainNavigator';

const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
  Main: MainStack,
});

const App = createAppContainer(AppNavigator);

export default App;
