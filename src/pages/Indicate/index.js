import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import Banner from '../../components/Banner';

function Indicate() {
  return (
    <View style={styles.container}>
      <Banner dateEnd="Outubro 2020" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={{ backgroundColor: 'red', width: 400, height: 400 }} />
      </ScrollView>
    </View>
  );
}

export default Indicate;
