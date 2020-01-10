import { StyleSheet } from 'react-native';
import colors from '../../css/colors';

export default StyleSheet.create({
  container: {
    padding: 25,
    paddingBottom: 0,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textSecondary: {
    fontSize: 12,
    color: colors.secondaryText,
  },
  line: {
    marginTop: '6%',
    borderBottomColor: colors.background,
    borderBottomWidth: 2,
  },
});
