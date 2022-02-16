import clsx from 'clsx';
// import { post } from 'cypress/types/jquery';
import * as React from 'react';
import { HiOutlineEye } from 'react-icons/hi';

import { usePostViews } from '@/hooks/usePostMeta';

import Accent from '@/components/Accent';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import UnstyledLink from '@/components/links/UnstyledLink';
import TechIcons, { TechListType } from '@/components/TechIcons';

import { ProjectFrontmatter } from '@/types/frontmatters';

type ProjectCardProps = {
  project: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const { views } = usePostViews(project.slug);

  return (
    <li
      className={clsx(
        'project-card rounded-md md:w-full',
        'border dark:border-gray-600',
        'transform-gpu scale-100 hover:scale-[1.02] active:scale-[0.97]',
        'transition duration-100',
        'animate-shadow',
        className
      )}
    >
      <UnstyledLink
        href={`/projects/${project.slug}`}
        className='flex flex-col items-start p-4 h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
      >
        <h4>{project.title}</h4>
        <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
          {project.description}
        </p>
        <div className='mt-2'>
          <TechIcons techs={project.techs.split(',') as Array<TechListType>} />
        </div>
        <div className='flex gap-2 justify-start items-center mt-2 text-sm font-medium text-gray-600 dark:text-gray-300'>
          <div className='flex gap-1 items-center'>
            <HiOutlineEye className='inline-block text-base' />
            <Accent>{views ?? '–––'} views</Accent>
          </div>
        </div>
        <CloudinaryImg
          className='mt-3 w-full pointer-events-none'
          publicId={`theodorusclarence/${project.banner}`}
          alt={project.title}
          width={1440}
          height={792}
          preview={false}
        />

        <p className='animated-underline inline-block mt-2 font-medium'>
          See more →
        </p>
      </UnstyledLink>
    </li>
  );
}
