import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, View } from 'react-native';
import styles from './styles';

function Banner(props) {
  const { dateEnd } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../images/banner.jpg')}
      />
      <View style={styles.dateEnd}>
        <Text style={styles.textInformation}>Previsão de conclusão</Text>
        <Text style={styles.textDate}>{dateEnd}</Text>
      </View>
    </View>
  );
}

Banner.propTypes = {
  dateEnd: PropTypes.string.isRequired,
};

export default Banner;
