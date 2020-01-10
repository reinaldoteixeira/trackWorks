import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function Explore() {
  // eslint-disable-next-line no-console
  useEffect(() => console.log('Explorar'), []);

  return (
    <View style={styles.container}>
      <Text> Explorar ? </Text>
    </View>
  );
}

export default Explore;
