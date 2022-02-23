import React from 'react';

import { Camera, Email, GitHub, Spotify, Twitter } from '../icons/Icon';
import UnstyledLink from '../links/UnstyledLink';

const ContactMe = () => {
  return (
    <div className='contact'>
      <h3 className='subheader mt-24'>Get in touch</h3>

      <ul className='bold mt-8 mb-12'>
        <li>
          <UnstyledLink
            href='https://chs.is/tweeting'
            className='text-coyBlue unstyled'
          >
            <Twitter className='inline' />
            &nbsp;<span>Twitter</span>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href='mailto:hi@chasem.co'
            className='text-coyYellow unstyled'
          >
            <Email className='inline' />
            &nbsp;<span>Email</span>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink href='https://chs.is/coding' className='unstyled'>
            <GitHub className='inline' />
            &nbsp;<span>GitHub</span>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href='https://chs.is/ig'
            className='text-coyRed unstyled'
          >
            <Camera className='inline' />
            &nbsp;<span>Instagram</span>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href='https://chs.is/listening'
            className='text-coyGreen unstyled'
          >
            <Spotify className='inline' />
            &nbsp;<span>Spotify</span>
          </UnstyledLink>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
