import React from 'react';
import { Text, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import colors from '../../css/colors';
import Badge from '../Badge';

function Header() {
  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Cidade de Lucca</Text>
          <Text style={styles.title2}>Trocar</Text>
        </View>
        <View style={styles.viewTitle2}>
          <Icon name="trophy" size={35} color={colors.mainText} />
          <Badge number={2500} />
        </View>
      </View>
    </>
  );
}

export default Header;
