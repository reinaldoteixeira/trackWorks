import { StyleSheet } from 'react-native';
import colors from '../../css/colors';

export default StyleSheet.create({
  rectangle: {
    marginTop: '3%',
    height: 25,
    borderRadius: 10,
    zIndex: 1,
  },
  default: {
    height: 25,
    borderRadius: 10,
    width: '100%',
    backgroundColor: colors.background,
    marginTop: '-7%',
  },
});
