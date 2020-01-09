import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

function Badge(props) {
  const { number } = props;

  return (
    <Text style={styles.text}>{number}</Text>
  );
}

Badge.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Badge;
