import { StyleSheet } from 'react-native';
import colors from '../../css/colors';

export default StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    height: 100,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },
  viewTitle: {
    marginTop: 10,
    flexDirection: 'column',
  },
  viewTitle2: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  title2: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.emphasisText,
  },
});
