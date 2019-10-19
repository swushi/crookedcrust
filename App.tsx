import React, {Component} from 'react';
import AppNavigator from './navigation/AppNavigator';

class App extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppNavigator />;
  }
}

export default App;
