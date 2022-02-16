import * as React from 'react';

// import sayHello from '@/lib/sayHello';
import { bootstrap } from '@/lib/bootstrap';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { sayHelloFlag } from '@/constants/env';
import { PreloadProvider } from '@/context/PreloadContext';

let gimpOutfit = !sayHelloFlag;

export default function Layout({ children }: { children: React.ReactNode }) {
  if (!gimpOutfit) {
    bootstrap();
    gimpOutfit = true;
  }

  return (
    <>
      <Header />
      <PreloadProvider>
        <div id='skip-nav'>{children}</div>
      </PreloadProvider>
      <Footer />
    </>
  );
}
