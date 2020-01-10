import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Steps from '../Steps';

function WorkFlow() {
  return (
    <View style={styles.container}>
      <Steps
        name="Piso"
        dateStart="01/01/20"
        percentage={87}
      />
      <Steps
        name="Revestimento"
        dateStart="01/02/20"
        percentage={47}
      />
      <Steps
        name="Pintura"
        dateStart="01/03/20"
        percentage={28}
      />
    </View>
  );
}

export default WorkFlow;
