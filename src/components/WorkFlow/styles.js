import { StyleSheet } from 'react-native';
import colors from '../../css/colors';

export default StyleSheet.create({
  container: {
    marginTop: '3%',
    marginBottom: '3%',
    backgroundColor: colors.white,
    width: 400,
    height: 480,
    borderRadius: 20,
    shadowColor: colors.mainText,
    elevation: 5,
    shadowOpacity: 0.50,
    shadowRadius: 20,
  },
});
