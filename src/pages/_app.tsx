import axios from 'axios';
import { AppProps } from 'next/app';
import Router from 'next/router';
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
import { blockDomainMeta } from '@/constants/env';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);
if (typeof window !== 'undefined') {
  bootstrap();
}
function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Don't increment views if not on main domain
    if (window.location.host !== 'ekswhyzee.vercel.app' && blockDomainMeta) {
      localStorage.setItem('incrementMetaFlag', 'false');
    }
  }, []);

  return (
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
  );
}

export default MyApp;
