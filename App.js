import React, {Component} from 'react';
import AppNavigator from './navigation/AppNavigator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppNavigator />;
  }
}

export default App;
