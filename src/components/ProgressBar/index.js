import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

function ProgressBar(props) {
  const { percentage, colorStart, colorEnd } = props;

  const width = {
    width: `${percentage}%`,
  };

  return (
    <>
      <LinearGradient
        style={[styles.rectangle, width]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colorStart, colorEnd]}
      />
      <View style={styles.default} />
    </>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  colorStart: PropTypes.string.isRequired,
  colorEnd: PropTypes.string.isRequired,
};

export default ProgressBar;
