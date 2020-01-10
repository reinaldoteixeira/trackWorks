import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function Menu() {
  // eslint-disable-next-line no-console
  useEffect(() => console.log('Menu'), []);

  return (
    <View style={styles.container}>
      <Text> Menu ? </Text>
    </View>
  );
}

export default Menu;
