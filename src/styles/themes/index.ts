import {colors, darkColors} from '../colors';

export const theme = {
  light: true,
  colors: {
    primary: colors.PRIMARY,
    secondary: colors.SECONDARY,
    tertiary: colors.TERTIARY,
    background: colors.BACKGROUND,
    backgroundLight: colors.BACKGROUND2,
    backgroundInverted: colors.BACKGROUNDINVERT,
    defaultFont: colors.DEFAULTFONT,
    error: colors.ERROR,
    success: colors.SUCCESS
  }
}

export const darkTheme = {
  light: false,
  colors: {
    primary: darkColors.PRIMARY,
    secondary: darkColors.SECONDARY,
    tertiary: darkColors.TERTIARY,
    background: darkColors.BACKGROUND,
    backgroundLight: darkColors.BACKGROUND2,
    backgroundInverted: darkColors.BACKGROUNDINVERT,
    defaultFont: darkColors.DEFAULTFONT,
    error: darkColors.ERROR,
    success: darkColors.SUCCESS
  }
}
