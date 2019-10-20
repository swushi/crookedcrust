import * as React from 'react';
import {Dimensions, View, StyleSheet, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const {height, width} = Dimensions.get('window');

interface InputBoxProps {
  placeholder: string;
}

const InputBox = (props: InputBoxProps) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={props.placeholder} style={styles.input} />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 5,
    alignSelf: 'stretch',
    marginHorizontal: 50,
    paddingLeft: 10,
  },
  input: {
    fontSize: 20,
    color: '#000',
  },
});
