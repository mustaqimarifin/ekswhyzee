import React from 'react';

import { Collab, Documentation, Icon, Pattern } from '../icons/Icon';
//import UnstyledLink from '../links/UnstyledLink';

const DesignSystems = () => {
  return (
    <div className=''>
      <h2 className='serif mt-20 text-4xl leading-4'>
        I’m currently focused on{' '}
        <span className='text-coyGreen italic underline'>
          design&nbsp;systems
        </span>
        .
      </h2>

      {/* <div className="prose mt-20">
				<p>
					I believe that design systems can be powerful catalysts for change
					within a product organization, and provide a shared vocabulary that
					makes collaboration more efficient and inclusive. By focusing on
					systems, I hope to help ensure that the spaces where we are frequently
					spending more and more of our time online are built in ways that are
					accessible, intentional, and respectful of the web as a material.
				</p>
			</div> */}

      <div className='focus-areas min-w-[250px] smaller grid gap-8 mt-32'>
        <div>
          <Collab height={32} />
          <h3 className='dotted text-coyGreen mt-12 mb-2'>Community</h3>
          <p className='hyphens pr-12'>
            Scaling systems requires a community effort. Collaborating with
            stakeholders and earning trust is a huge part of the work.
          </p>
        </div>

        <div>
          <Documentation height={32} />
          <h3 className='dotted text-coyYellow mt-12 mb-2'>Communication</h3>
          <p className='hyphens pr-12'>
            Design systems are often about managing change over time, and the
            best way to do that is clear and frequent communication.
          </p>
        </div>

        <div>
          <Icon height={32} />
          <h3 className='dotted text-coyBlue mt-12 mb-2'>Tooling</h3>
          <p className='hyphens pr-12'>
            Empowering creatives with well-crafted component libraries and
            bespoke design tooling.
          </p>
        </div>

        <div>
          <Pattern height={32} />
          <h3 className='dotted text-coyRed mt-12 mb-2'>Patterns</h3>
          <p className='hyphens pr-12'>
            System practitioners are masters of abstraction, and serve as the
            stewards, scribes, and librarians of a product experience.
          </p>
        </div>
      </div>

      {/*       <UnstyledLink
        passHref='/notes/design-systems'
        className='flex hover-link mt-40 p-16 unstyled'
      >
        <Folder
          style={{
            width: '2rem',
            flex: '1 0 auto',
            color: 'var(--color-purple)',
          }}
        />

        <div className='ml-16'>
          <h2 className='mb-2'>Read my notes on design systems</h2>
          <p className='color-gray--400'>
            The notes section of this site contains useful links, quotes, and
            insights related to design systems and the work that goes into them.
          </p>
        </div>
      </UnstyledLink> */}
    </div>
  );
};

export default DesignSystems;
