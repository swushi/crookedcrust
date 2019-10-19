import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Colors from '../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    header: null,
  };

  render() {
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Create an Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
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
  button: {
    height: height * 0.07,
    width: width * 0.75,
    backgroundColor: Colors.primary,
    marginBottom: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.buttonTextColor,
    fontSize: 20,
  },
});

export default WelcomeScreen;
