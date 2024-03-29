import * as React from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView} from 'react-native';

import MenuItem from '../components/MenuItem';

const {height, width} = Dimensions.get('window');

interface MenuListProps {
  category: string;
}

const MenuList = (props: MenuListProps) => {
  return (
    <View style={styles.subContent}>
      <Text style={styles.contentLabel}>{props.category}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <MenuItem name="Mean Green" />
        <MenuItem name="Test" />
        <MenuItem name= "test2" />
      </ScrollView>
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  content: {},
  subContent: {},
  contentLabel: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});
