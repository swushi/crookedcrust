import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../constants/Colors';

const {height, width} = Dimensions.get('window');

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.onPress()}>
        <Text style={styles.buttonText}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

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
