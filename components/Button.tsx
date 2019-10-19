import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../constants/Colors';

const {height, width} = Dimensions.get('window');

interface ButtonProps {
  label: String;
  onPress: Function;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: height * 0.07,
    width: width * 0.75,
    backgroundColor: Colors.primary,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.buttonTextColor,
    fontSize: 20,
  },
});

export default Button;
