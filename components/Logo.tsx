import * as React from 'react';
import {Image, View, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

interface LogoProps {
  size?: string;
}

const Logo = (props: LogoProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
        height: height * 0.3,
      }}>
      <Image
        style={{flex: 1}}
        source={require('../assets/CC_logo.png')}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default Logo;
