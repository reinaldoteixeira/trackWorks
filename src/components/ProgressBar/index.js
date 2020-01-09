import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';

function ProgressBar(props) {
  const { percentage, colorStart, colorEnd } = props;

  return (
    <View style={styles.rectangle}>
      <View style={{ backgroundColor: colorStart, flex: 1 }} />
      <LinearGradient
        colors={[colorEnd, 'transparent']}
        style={[styles.gradient, { height: percentage }]}
      />
    </View>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  colorStart: PropTypes.string.isRequired,
  colorEnd: PropTypes.string.isRequired,
};

export default ProgressBar;
