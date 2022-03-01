import axios from 'axios';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import nProgress from 'nprogress';
import * as React from 'react';
import { SWRConfig } from 'swr';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import 'react-tippy/dist/tippy.css';
import '@/styles/globals.css';
import '@/styles/mdx.css';
import '@/styles/dracula.css';
import '@/styles/nprogress.css';

import { bootstrap } from '@/lib/bootstrap';

import { UserContextProvider } from '@/comments/hooks/use-user';
import supabase from '@/comments/utils/supaPublic';
// import { blockDomainMeta } from '@/constants/env';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);
if (typeof window !== 'undefined') {
  bootstrap();
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        defer
        data-website-id='17af69d0-4668-439e-944a-2ed2be970114'
        src='https://umami.mustaqimarifin.xyz/umami.js'
      ></Script>
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
        <SWRConfig
          value={{
            fetcher: (url) => axios.get(url).then((res) => res.data),
          }}
        >
          <UserContextProvider supabaseClient={supabase}>
            <Component {...pageProps} />
          </UserContextProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
