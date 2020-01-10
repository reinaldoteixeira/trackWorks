import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import Banner from '../../components/Banner';
import WorkFlow from '../../components/WorkFlow';

function Indicate() {
  return (
    <View style={styles.container}>
      <Banner dateEnd="Outubro 2020" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <WorkFlow />
      </ScrollView>
    </View>
  );
}

export default Indicate;
