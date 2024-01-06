import {StyleSheet} from 'react-native';
import {COLORS, FONT, SIZES} from '../../constants';

export const loginStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: COLORS.lightWhite,
  },
  text: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  wrapper: {
    rowGap: SIZES.small,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    fontFamily: FONT.regular,
    width: '100%',
    height: 50,
    paddingHorizontal: SIZES.medium,
    color: COLORS.primary,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: SIZES.xSmall,
  },
  btn: {
    color: COLORS.primary,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.medium,
  },
  btnText: {
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONT.medium,
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  passwordIcon: {
    position: 'absolute',
    right: SIZES.small,
  },
  questionWrapper: {},
  questionSelf: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  questionLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
