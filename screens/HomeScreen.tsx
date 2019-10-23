import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from '../components/Logo';
import MenuItem from '../components/MenuItem';
import MenuList from '../components/MenuList';

const {height, width} = Dimensions.get('window');

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => null}>
          <Icon name="account" size={36} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <Icon name="cart" size={36} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Logo size={height * 0.15} />
        <View>
          <MenuList category="Pizzas" />
          <MenuList category="Hoagies" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
