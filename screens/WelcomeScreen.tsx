import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Button from '../components/Button';
import Logo from '../components/Logo';

interface WelcomeScreenProps {
  navigation: any;
}

const WelcomeScreen = (props: WelcomeScreenProps) => {
  const {navigate} = props.navigation;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/MeanGreen.jpg')}
        style={styles.backgroundImg}>
        <Logo />
        <View style={styles.bottom}>
          <Button
            label={'Create an Account'}
            onPress={() => {
              navigate('Signup');
            }}
          />
          <Button
            label={'Log In'}
            onPress={() => {
              navigate('Login');
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
});

export default WelcomeScreen;
