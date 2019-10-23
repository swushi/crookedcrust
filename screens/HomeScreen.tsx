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

const {height, width} = Dimensions.get('window');

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => null}>
            <Icon name="account" size={36} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => null}>
            <Icon name="cart" size={36} />
          </TouchableOpacity>
        </View>
        <Logo size={height * 0.15} />
        <View style={styles.content}>
          <View style={styles.subContent}>
            <Text style={styles.contentText}>Pizzas</Text>
            <ScrollView horizontal>
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => null}>
                <View style={StyleSheet.item} />
                <Text style={styles.itemText}>Mean Green</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  content: {},
  subContent: {
    flex: 1,
  },
});

export default HomeScreen;
