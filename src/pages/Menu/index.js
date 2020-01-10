import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import colors from '../../css/colors';

function Menu() {
  // eslint-disable-next-line no-console
  useEffect(() => console.log('Menu'), []);

  return (
    <View style={styles.container}>
      <Icon name="exclamation-circle" size={50} color={colors.emphasisText} />
      <Text> Em desenvolvimento...</Text>
    </View>
  );
}

export default Menu;
