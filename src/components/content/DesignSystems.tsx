import React from 'react';

import { Collab, Documentation, Icon, Pattern } from '../icons/Icon';
//import UnstyledLink from '../links/UnstyledLink';

const DesignSystems = () => {
  return (
    <div className='border-slate-300 ring-coyBlue shadow-coyRed grid grid-cols-1 gap-4 justify-self-center items-center p-4 mt-20 align-top rounded-lg border ring-2 shadow-sm drop-shadow-sm md:grid-cols-2'>
      <div className='p-4 rounded-md'>
        <Collab width={35} className='mt-2' />
        <div className='flex items-center mt-2 mb-2'>
          <span className='text-coyGreen inline place-items-center text-xl font-extrabold'>
            •
          </span>

          <p className='flex relative items-center text-base font-bold duration-300 hover:text-coyGreen'>
            &nbsp; Community
          </p>
        </div>
        <p className='flex text-sm font-extralight text-gray-400'>
          Scaling systems requires a community effort. Collaborating with
          stakeholders and earning trust is a huge part of the work.
        </p>
      </div>
      <div className='p-4'>
        <Documentation width={35} className='text-coyYellow relative mt-2' />
        <div className='flex items-center'>
          <span className='text-coyYellow inline relative place-items-center mt-2 mb-2 text-xl font-extrabold'>
            •
          </span>

          <p className='flex relative items-center mt-2 mb-2 text-base font-bold duration-300 hover:text-coyYellow'>
            &nbsp; Communication
          </p>
        </div>
        <p className='flex text-sm font-extralight text-gray-400'>
          Design systems are often about managing change over time, and the best
          way to do that is clear and frequent communication.
        </p>
      </div>
      <div className='p-4'>
        <Icon width={50} className='text-coyYellow relative -mt-2' />
        <div className='flex items-center mt-2 mb-2'>
          <span className='text-coyBlue inline relative place-items-center text-xl font-extrabold'>
            •
          </span>

          <p className='flex relative items-center text-base font-bold duration-300 hover:text-coyBlue'>
            &nbsp; Tooling
          </p>
        </div>
        <p className='flex text-sm font-extralight text-gray-400'>
          Empowering creatives with well-crafted component libraries and bespoke
          design tooling.
        </p>
      </div>
      <div className='p-4'>
        <Pattern height={35} className='text-coyRed relative mt-2' />
        <div className='flex items-center mt-2 mb-2'>
          <span className='text-coyRed inline place-items-center text-xl font-extrabold'>
            •
          </span>

          <p className='flex items-center text-base font-bold duration-300 hover:text-coyRed'>
            &nbsp; Patterns
          </p>
        </div>
        <p className='flex text-sm font-extralight text-gray-400'>
          System practitioners are masters of abstraction, and serve as the
          stewards, scribes, and librarians of a product experience.
        </p>
      </div>
    </div>
  );
};

export default DesignSystems;
