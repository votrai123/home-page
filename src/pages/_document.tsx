// react
import React from 'react';
// third-party
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../lib/theme';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return { ...(await Document.getInitialProps(ctx)) };
  }

  render(): JSX.Element {
    // noinspection
    return (
      <Html lang="en" dir="ltr">
        <Head>
          {/* fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=EB+Garamond&display=optional"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
