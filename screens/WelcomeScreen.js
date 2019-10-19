import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Button from '../components/Button';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../assets/MeanGreen.jpg')}
          style={styles.backgroundImg}>
          <Image
            source={require('../assets/CC_logo.png')}
            resizeMode={'cover'}
            style={styles.logo}
          />
          <View style={styles.bottom}>
            <Button
              label={'Create an Account'}
              onPress={() => {
                navigate('Login');
              }}
            />
            <Button
              label={'Log In'}
              onPress={() => {
                navigate('Signup');
              }}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    width: '40%',
    height: '20%',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
});

export default WelcomeScreen;
