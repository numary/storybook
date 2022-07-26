import { createTheme } from '@mui/material/styles';

interface ColorType {
  darker: string;
  normal: string;
  bright: string;
  light: string;
}

interface NeutralPalette {
  0: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    neutral: NeutralPalette;
    brown: ColorType;
    blue: ColorType;
    violet: ColorType;
    green: ColorType;
    red: ColorType;
    yellow: ColorType;
    default: ColorType;
  }

  interface PaletteOptions {
    neutral: NeutralPalette;
    brown: ColorType;
    blue: ColorType;
    violet: ColorType;
    green: ColorType;
    red: ColorType;
    yellow: ColorType;
    default: ColorType;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    large3x: React.CSSProperties;
    large2x: React.CSSProperties;
    large1x: React.CSSProperties;
    large: React.CSSProperties;
    small: React.CSSProperties;
    headline: React.CSSProperties;
    heading: React.CSSProperties;
    action: React.CSSProperties;
    footNote: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    large3x?: React.CSSProperties;
    large2x?: React.CSSProperties;
    large1x?: React.CSSProperties;
    large?: React.CSSProperties;
    small?: React.CSSProperties;
    headline?: React.CSSProperties;
    heading?: React.CSSProperties;
    action?: React.CSSProperties;
    footNote?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    large3x: true;
    large2x: true;
    large1x: true;
    large: true;
    small: true;
    headline: true;
    heading: true;
    action: true;
    footNote: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    square: true;
  }
}

export const fontFamily = 'Inter,sans-serif';

const palette = {
  neutral: {
    0: '#FFFFFF',
    50: '#F9F9F9',
    100: '#EEF1F5',
    200: '#E3E5EA',
    300: '#D4D7DE',
    400: '#A9AFB9',
    500: '#878C97',
    600: '#4A4E56',
    700: '#2E3138',
    800: '#232529',
    900: '#161719',
  },
  primary: {
    main: '#161719',
    light: '#878C97',
    dark: '#000000',
  },
  default: {
    darker: '#00543E',
    normal: '#008763',
    bright: '#00EDAE',
    light: '#E1FAF3',
  },
  secondary: {
    darker: '#4A4E56',
    main: '#EEF1F5',
    light: '#FFFFFF',
  },
  brown: {
    darker: '#665347',
    normal: '#CCA68E',
    bright: '#FFD0B1',
    light: '#FFF9F5',
  },
  blue: {
    darker: '#475766',
    normal: '#8EAECC',
    bright: '#B1DAFF',
    light: '#F5FAFF',
  },
  violet: {
    darker: '#554766',
    normal: '#A98ECC',
    bright: '#D2B1FF',
    light: '#F9F5FF',
  },
  green: {
    darker: '#3A4A41',
    normal: '#8BB09B',
    bright: '#B4E4C9',
    light: '#F5FFFA',
  },
  red: {
    darker: '#9E3131',
    normal: '#C75656',
    bright: '#DB9898',
    light: '#FBEFEF',
  },
  yellow: {
    darker: '#CCAD41',
    normal: '#F5D668',
    bright: '#FCE592',
    light: '#FCF8E8',
  },
};

const typography = {
  fontFamily,
  large3x: {
    fontSize: '64px',
    lineHeight: '72px',
    letterSpacing: '-1%',
    fontFamily,
  },
  large2x: {
    fontSize: '56px',
    lineHeight: '64px',
    letterSpacing: '-1%',
    fontFamily,
  },
  large1x: {
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: '-1%',
    fontFamily,
  },
  large: {
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-1%',
    fontFamily,
  },
  h1: {
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '-1%',
    fontFamily,
  },
  h2: {
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-1%',
    fontFamily,
  },
  small: {
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-1%',
    fontWeight: 500,
    fontFamily,
  },
  headline: {
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '-1%',
    fontFamily,
  },
  heading: {
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '8%',
    fontWeight: '500',
    fontFamily,
  },
  body2: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-1%',
    fontWeight: '400',
    fontFamily,
  },
  body1: {
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '-1%',
    fontFamily,
    fontWeight: 400,
  },
  action: {
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '-1%',
    fontFamily,
  },
  caption: {
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '-1%',
    fontWeight: 500,
    fontFamily,
  },
  footNote: {
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0%',
    fontFamily,
  },
};

export const theme = createTheme({
  spacing: 8,
  typography,
  palette,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'square' },
          style: {
            cursor: 'pointer',
            borderRadius: 0,
            padding: '2px 12px',
            backgroundColor: palette.neutral[50],
            ...typography.caption,
          },
        },
      ],
    },
  },
});
