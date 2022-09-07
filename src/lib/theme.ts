import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#AA8968', '#434B4B')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode('#2d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: 'EB Garamond'
};

const colors = {
  grassTeal: '#88ccca'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
