import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

interface MenuItemProps {
  name: string;
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => null}>
      <View style={styles.item} />
      <Text style={styles.itemLabel}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  item: {
    backgroundColor: '#000',
    height: height * 0.15,
    width: width / 2 - 40,
  },
  itemLabel: {},
});
