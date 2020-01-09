import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

function Indicate() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: 'red', flex: 1, width: 100 }} />
      </ScrollView>
    </View>
  );
}

export default Indicate;
