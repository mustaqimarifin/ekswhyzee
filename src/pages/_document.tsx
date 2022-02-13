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
            data-website-id='27235d97-0cc7-4f8a-9720-8eef96ea63f1'
            src='https://ehkswhyz.up.railway.app/umami.js'
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
