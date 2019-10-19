import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthStack from './AuthNavigator';

const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
});

const App = createAppContainer(AppNavigator);

export default App;
