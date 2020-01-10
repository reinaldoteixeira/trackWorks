import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ProgresBar from '../ProgressBar';
import colors from '../../css/colors';

function getStepName(name) {
  if (name === 'Piso') {
    return 'floor';
  }
  if (name === 'Revestimento') {
    return 'coating';
  }
  return 'painting';
}

function Steps(props) {
  const { name, dateStart, percentage } = props;

  const step = getStepName(name);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%' }}>
        <Text style={styles.textSecondary}>Início</Text>
        <Text style={styles.textSecondary}>Progresso</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.name}>{dateStart}</Text>
        <Text style={styles.name}>{percentage}%</Text>
      </View>
      <ProgresBar
        percentage={percentage}
        colorStart={colors[step].start}
        colorEnd={colors[step].end}
      />
      <View style={styles.line} />
    </View>
  );
}

Steps.propTypes = {
  name: PropTypes.string.isRequired,
  dateStart: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Steps;
