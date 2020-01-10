import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import colors from '../../css/colors';

function Menu() {
  return (
    <View style={styles.container}>
      <Icon name="exclamation-circle" size={50} color={colors.emphasisText} />
      <Text> Tela Menu, em desenvolvimento...</Text>
    </View>
  );
}

export default Menu;
