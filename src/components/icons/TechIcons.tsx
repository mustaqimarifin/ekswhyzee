import clsx from 'clsx';
import * as React from 'react';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiAbletonlive,
  SiAdobeaftereffects,
  SiAirtable,
  SiFirebase,
  SiGit,
  SiMagisk,
  SiNextdotjs,
  SiNotion,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import Tooltip from '@/components/Tooltip';

import JWT from '@/comments/icons/JWT';
import PlanetWaves from '@/comments/icons/planetWaves';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <ul className={clsx(className, 'flex gap-2')}>
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} content={<p>{current.name}</p>}>
            <li className='text-xl text-gray-700 dark:text-gray-200'>
              <current.icon />
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
}

const techList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },

  ableton: {
    icon: SiAbletonlive,
    name: 'Ableton Live',
  },
  ae: {
    icon: SiAdobeaftereffects,
    name: 'After Effects',
  },
  airtable: {
    icon: SiAirtable,
    name: 'Airtable',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },

  magisk: {
    icon: SiMagisk,
    name: 'Magisk',
  },
  supabase: {
    icon: SiSupabase,

    name: 'Supabase',
  },
  typescript: {
    icon: SiTypescript,
    name: 'TypeScript',
  },

  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },

  swr: {
    icon: IoLogoVercel,
    name: 'SWR',
  },
  jwt: {
    icon: JWT,
    name: 'JWT',
  },
  waves: {
    icon: PlanetWaves,
    name: 'Waves Plugins',
  },

  git: {
    icon: SiGit,
    name: 'Git',
  },
  notion: {
    icon: SiNotion,
    name: 'Notion API',
  },
};
