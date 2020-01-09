import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../css/colors';
import styles from './styles';
import Badge from '../../components/Badge';

function Indicate() {
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
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ backgroundColor: 'red' }} />
      </ScrollView>
    </>
  );
}

export default Indicate;
