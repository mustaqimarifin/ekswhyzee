import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/IBMPlexSans.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/JetBrainsMono.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <script
            async
            defer
            data-website-id='17af69d0-4668-439e-944a-2ed2be970114'
            src='https://umami.mustaqimarifin.xyz/umami.js'
          ></script>
        </Head>
        <body className='bg-white transition-colors dark:bg-dark dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
