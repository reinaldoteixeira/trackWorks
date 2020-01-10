import { StyleSheet } from 'react-native';
import colors from '../../css/colors';

export default StyleSheet.create({
  container: {
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '95%',
  },
  dateEnd: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    position: 'absolute',
    width: '50%',
    height: '25%',
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  textDate: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textInformation: {
    fontSize: 12,
    color: colors.secondaryText,
  },
});
