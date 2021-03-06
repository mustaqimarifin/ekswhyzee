import { FeedbackFish } from '@feedback-fish/react';
import * as React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import { Tooltip as TooltipTippy } from 'react-tippy';

import { trackEvent } from '@/lib/analytics';

import Accent from '@/components/Accent';
import Spotify from '@/components/layout/Spotify';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

import { spotifyFlag } from '@/constants/env';

export default function Footer() {
  return (
    <footer className='pb-2 mt-4'>
      <main className='layout flex flex-col items-center pt-6 border-t dark:border-gray-600'>
        <FooterLinks />

        {spotifyFlag && <Spotify className='mt-8' />}

        <p className='mt-12 font-medium text-gray-600 dark:text-gray-300'>
          Reach me out
        </p>
        <SocialLinks />

        <p className='mt-8 text-sm text-gray-600 dark:text-gray-300'>
          © Mustaqim Arifin {new Date().getFullYear()} •{' '}
          <FeedbackFish projectId='59a0c0e0d549a7'>
            <button className='rounded-sm dark:hover:text-gray-100 hover:text-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-primary-300'>
              Got any feedback?
            </button>
          </FeedbackFish>
        </p>
      </main>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className='flex flex-wrap gap-y-4 gap-x-8 justify-center'>
      {footerLinks.map(({ href, text, tooltip }) => (
        <Tooltip interactive={false} key={href} content={tooltip}>
          <UnstyledLink
            className='animated-underline text-sm font-medium rounded-sm dark:text-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
            href={href}
            onClick={() => {
              trackEvent(`Footer Link: ${text}`, 'link');
            }}
          >
            {text}
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState(
    'Click the mail logo to copy'
  );

  return (
    <div className='flex mt-2 space-x-4'>
      <div className='flex justify-center items-center'>
        <TooltipTippy
          trigger='mouseenter'
          hideOnClick={false}
          interactive
          html={
            <div className='inline-block p-2 text-gray-600 bg-white rounded-md border shadow-md dark:bg-dark dark:text-gray-200 dark:border-gray-600'>
              {copyStatus}
              <Accent className='inline-block font-medium'>
                me@ekswhyzee.vercel.app
              </Accent>
            </div>
          }
        >
          <CopyToClipboard
            text='me@ekswhyzee.vercel.app'
            onCopy={() => {
              setCopyStatus('Copied to clipboard 🥳');
              setTimeout(
                () => setCopyStatus('Click the mail logo to copy'),
                1500
              );
            }}
          >
            <button className='align-middle rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'>
              <FiMail className='w-7 h-7 text-gray-600 align-middle dark:hover:text-primary-300 dark:text-gray-300 hover:text-primary-300' />
            </button>
          </CopyToClipboard>
        </TooltipTippy>
      </div>
      {socials.map((social) => (
        <Tooltip interactive={false} key={social.href} content={social.text}>
          <UnstyledLink
            className='inline-flex justify-center items-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
            href={social.href}
            onClick={() => {
              trackEvent(`Footer Link: ${social.id}`, 'link');
            }}
          >
            <social.icon className='my-auto w-6 h-6 text-gray-600 align-middle transition-colors dark:hover:text-primary-300 dark:text-gray-300 hover:text-primary-300' />
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

const footerLinks = [
  {
    href: 'https://github.com/mustaqimarifin/ekswhyzee',
    text: 'Source Code',
    tooltip: (
      <>
        This website is <strong>open source</strong>!
      </>
    ),
  },

  {
    href: 'https://umami.mustaqimarifin.xyz/share/lK2xpnDs/ekswhyz',
    text: 'Analytics',
    tooltip: 'Moar analytics. Powered by Umami',
  },

  {
    href: '/subscribe',
    text: 'Subscribe',
    tooltip: 'Get an email whenever I post, no spam',
  },
  {
    href: 'https://ekswhyzee.vercel.app/rss.xml',
    text: 'RSS',
    tooltip: 'Add ekswhyzee.vercel.app blog to your feeds',
  },
];

const socials = [
  {
    href: 'https://github.com/mustaqimarifin',
    icon: SiGithub,
    id: 'Github',
    text: (
      <>
        See my projects on <Accent className='font-medium'>Github</Accent>
      </>
    ),
  },
  {
    href: 'https://clarence.link/linkedin',
    icon: SiLinkedin,
    id: 'Linkedin',
    text: (
      <>
        Find me on <Accent className='font-medium'>Linkedin</Accent>
      </>
    ),
  },
  {
    href: 'https://twitter.com/vmprmyth',
    icon: SiTwitter,
    id: 'Twitter',
    text: (
      <>
        I don't spend too much time there, but you're welcome to follow me!{' '}
        <Accent className='font-medium'>Twitter</Accent>!
      </>
    ),
  },
];
