/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from 'clsx';
import Image from 'next/image';

import Accent from '@/components/Accent';
import Button from '@/components/buttons/Button';
import Tag from '@/components/content/Tag';
import NextImage from '@/components/images/NextImage';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

import { Bookmark, InjectedMeta } from '@/types/frontmatters';

type BookmarkProps = {
  cover: string;
  link: string;
  title: string;
  tags: string[];
  checkTagged?: (tag: string) => boolean;
} & React.ComponentPropsWithoutRef<'li'> &
  InjectedMeta;

const BookmarkCard = ({ cover, title, link, tags }: Bookmark) => {
  return (
    <li
      className={clsx(
        'w-full bg-white rounded-md border shadow-md dark:bg-dark dark:border-gray-600',
        'transform-gpu scale-100 hover:scale-[1.02] active:scale-[0.97]',
        'transition duration-100',
        'animate-shadow'
      )}
    >
      <Tooltip content={<p>{title}</p>}>
        <UnstyledLink
          className='block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          href={link}
        >
          <div className='relative'>
            <Image
              alt={`Thumbnail of ${title}`}
              src={cover}
              width={640}
              height={360}
              className='aspect-video object-cover overflow-hidden w-full rounded-t-md pointer-events-none'
            />
            <div
              className={clsx(
                'absolute bottom-0 px-4 py-2 w-full',
                'flex flex-wrap gap-x-2 gap-y-2 justify-end pb-2 mt-2 text-sm text-gray-700 dark:text-gray-100'
              )}
            >
              <Tag tabIndex={-1} className='text-xs uppercase'>
                {tags.join(', ')}
              </Tag>
            </div>
          </div>
          <div className='p-4'>
            {' '}
            <p className='text-xs font-semibold text-gray-800 dark:text-gray-100'>
              {title}
            </p>
          </div>
        </UnstyledLink>
      </Tooltip>
    </li>
  );
};

export default BookmarkCard;

/* import clsx from 'clsx';
import link from 'next/link';
import { HiOutlineEye } from 'react-icons/hi';

import Accent from '@/components/Accent';
// import CloudinaryImg from '@/components/images/CloudinaryImg';
import NextImage from '@/components/images/NextImage';
import UnstyledLink from '@/components/links/UnstyledLink';
import LoadingSpinner from '@/components/LoadingSpinner';
import Tooltip from '@/components/Tooltip';

// import { Bookmark } from '@/types/bookmark';
import type { Bookmark } from '@/types/bookmark';
// import { BookmarkFrontmatter } from '@/types/frontmatters';
type Props = {
  bookmarks: Bookmark[];
  tags: string[];
};

const BookmarkCard = ({ bookmark, className }: Props): JSX.Element => {
  return (
    <Tooltip content={title} className='font-medium text-xs'>
      <li
        className={clsx(
          'project-card rounded-md md:w-full',
          'border dark:border-gray-600',
          'scale-100 transform-gpu hover:scale-[1.02] active:scale-[0.97]',
          'duration-100 transition',
          'animate-shadow',
          className
        )}
      >
        <UnstyledLink
          href={`/bookmarks`}
          className='flex flex-col h-full items-start p-4 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
        >
          <h4>{title}</h4>
          <span> {bookmark?.tags.join(', ')}</span>
          <p className='mb-auto text-gray-700 text-sm dark:text-gray-300'>
            {link}
          </p>

          <div className='flex font-medium gap-2 items-center justify-start mt-2 text-gray-600 text-sm dark:text-gray-300'>
            <div className='flex gap-1 items-center'>
              <HiOutlineEye className='inline-block text-base' />
              <Accent>{bookmark?.views ?? <LoadingSpinner />} views</Accent>
            </div>
          </div>

          <NextImage
            useSkeleton
            className='aspect-auto overflow-hidden pointer-events-none rounded-t-md'
            src={cover}
            alt={title}
            width={1200}
            height={(1200 * 2) / 5}
          />
        </UnstyledLink>
      </li>
    </Tooltip>
  );
};

export default BookmarkCard;
 */
