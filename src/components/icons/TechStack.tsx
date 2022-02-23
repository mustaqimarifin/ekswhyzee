import clsx from 'clsx';
import * as React from 'react';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import CustomLink from '@/components/links/CustomLink';
import Tooltip from '@/components/Tooltip';

export default function Toolbox() {
  return (
    <div className='flex space-x-2 md:space-x-4'>
      {stacks.map((tech) => (
        <Tooltip key={tech.id} content={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'w-8 h-8 md:w-10 md:h-10',
              'text-gray-600 dark:hover:text-primary-300 dark:text-gray-200 hover:text-primary-300',
              'transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'nextjs',
    icon: SiNextdotjs,
    tooltip: (
      <>
        <CustomLink href='https://nextjs.org'>Next.js</CustomLink>, currently my
        go-to framework because of the static generation, dynamic paths, and
        built-in api.
      </>
    ),
  },

  {
    id: 'typescript',
    icon: SiTypescript,
    tooltip: (
      <>
        <CustomLink href='https://www.typescriptlang.org/'>
          TypeScript
        </CustomLink>
        is an absolutel pain... and then you get stockholm syndrome and wonder
        how you got by without it.
      </>
    ),
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
    tooltip: (
      <>
        <CustomLink href='https://tailwindcss.com/'>Tailwind CSS</CustomLink>{' '}
        hits that sweet spot of visualisation and execution. Real CSS can be a
        real pain 💆🏽‍♂️
        <CustomLink href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'>
          extension
        </CustomLink>
        .
      </>
    ),
  },
  {
    id: 'vercel',
    icon: IoLogoVercel,
    tooltip: (
      <>
        <CustomLink href='https://swr.vercel.app/'>SWR by Vercel</CustomLink>,
        great react hooks for data fetching and caching, the{' '}
        <CustomLink href='https://swr.vercel.app/docs/revalidation#revalidate-on-focus'>
          revalidate on focus
        </CustomLink>{' '}
        is unreal. react-query is also a great alternative to this.
      </>
    ),
  },
  {
    id: 'supabase',
    icon: SiSupabase,
    tooltip: (
      <>
        <CustomLink href='https://supabase.com/'>Supabase</CustomLink>, if it
        weren't for these guys I think I'd likely still have problems
        understanding the ins and outs of databases.
      </>
    ),
  },
];
