import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react';
import theme from '../lib/theme';

export default function Chakra({ cookies, children }: any) {
  const color: any =
    typeof cookies == 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={color}>
      {children}
    </ChakraProvider>
  );
}

export async function getServerSideProps({ req }: any) {
  return {
    props: {
      cookies: req.header.cookies ?? ''
    }
  };
}
