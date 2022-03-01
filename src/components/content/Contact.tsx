import React from 'react';
import { RiSoundcloudLine } from 'react-icons/ri';

import { Camera, Email, GitHub, Spotify, Twitter } from '../icons/Icon';
import UnstyledLink from '../links/UnstyledLink';

const ContactMe = () => {
  return (
    <div className='contact'>
      <div className='text-slate-300 mt-24 text-xs font-bold uppercase'>
        Get in touch
      </div>

      <ul className='font-primary grid-col-1 grid gap-4 mt-8 mb-12 text-lg font-bold md:grid-cols-3'>
        <li>
          <UnstyledLink
            href='https://chs.is/tweeting'
            className='text-coyBlue flex items-center'
          >
            <Twitter className='inline' />
            &nbsp;<span>Twitter</span>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href='mailto:hi@chasem.co'
            className='text-coyYellow flex items-center'
          >
            <Email className='inline' />
            &nbsp;<span>Email</span>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href='https://chs.is/ig'
            className='text-coyRed flex items-center'
          >
            <Camera />
            &nbsp;<span>Instagram</span>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href='https://chs.is/coding'
            className='flex items-center'
          >
            <GitHub className='inline' />
            &nbsp;<span>GitHub</span>
          </UnstyledLink>
        </li>

        <li>
          <UnstyledLink
            href='https://chs.is/listening'
            className='text-coyGreen flex items-center'
          >
            <Spotify className='text-coyGreen inline' />
            &nbsp;<span>Spotify</span>
          </UnstyledLink>
        </li>

        <li>
          <UnstyledLink
            href='https://chs.is/listening'
            className='flex items-center text-orange-400'
          >
            <RiSoundcloudLine size={21} className='inline text-orange-400' />
            &nbsp;<span>SoundCloud</span>
          </UnstyledLink>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
