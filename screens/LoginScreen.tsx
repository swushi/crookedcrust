import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../components/Logo';
import InputBox from '../components/InputBox';
import Button from '../components/Button';

const {height, width} = Dimensions.get('window');

const LoginScreen = (props: any) => {
  function _login() {
    const {navigate} = props.navigation;

    navigate('Main');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Icon name="chevron-left" size={40} color="#000" />
      </TouchableOpacity>
      <Logo />
      <View style={styles.inputContainers}>
        <InputBox placeholder={'Email'} />
        <InputBox placeholder={'Password'} secureTextEntry />
      </View>
      <View style={styles.linksContainer}>
        <Button label={'Log In'} onPress={() => _login()} />
        <TouchableOpacity onPress={() => null}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    alignItems: 'center',
  },
  backArrow: {
    left: 5,
    top: 5,
    alignSelf: 'flex-start',
  },
  inputContainers: {
    flex: 4,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  linksContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },
  forgotPassword: {},
});
