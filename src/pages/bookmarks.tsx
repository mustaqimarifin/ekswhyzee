/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import { GetStaticProps } from 'next';
import { useState } from 'react';

import { fetchBookmarks } from '@/hooks/bookmarks';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import Button from '@/components/buttons/Button';
import BookmarkCard from '@/components/content/bookmark';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import type { BookmarkType } from '@/types/frontmatters';

const Bookmarks = ({ bookmarks, tags }: BookmarkType) => {
  const isLoaded = useLoaded();

  const [displayBookmarks, setDisplayBookmarks] = useState(bookmarks);
  const [, setSelectedTag] = useState<string>();
  const filterBookmarks = (tag?: string) => {
    if (tag) {
      setDisplayBookmarks(bookmarks.filter(({ tags }) => tags.includes(tag)));
    } else {
      setDisplayBookmarks(bookmarks);
    }
    setSelectedTag(tag);
  };

  return (
    <Layout>
      <Seo
        templateTitle='Bookmarks'
        description='Misc collection of content | links | posts from all across the
          internet.'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout py-12'>
            <h1 className='text-3xl md:text-5xl' data-fade='0'>
              <Accent>Bookmarks</Accent>
            </h1>
            <p data-fade='1' className='mt-2 text-gray-600 dark:text-gray-300'>
              Misc collection of content | links | posts from all across the
              internet
            </p>
            <section className='flex-wrap gap-2 space-x-3 space-y-3 w-full'>
              <Button
                className='text-xs uppercase'
                onClick={() => filterBookmarks()}
                variant='ghost'
              >
                All
              </Button>
              {tags.map((tag) => (
                <Button
                  className='text-xs text-white uppercase'
                  key={tag}
                  onClick={() => filterBookmarks(tag)}
                  variant='ghost'
                >
                  {tag}
                </Button>
              ))}
            </section>

            <ul
              data-fade='2'
              className='grid gap-4 mt-6 sm:grid-cols-2 xl:grid-cols-3'
            >
              {displayBookmarks.map(({ cover, link, title, tags }) => (
                <BookmarkCard
                  key={link}
                  title={title}
                  cover={cover}
                  link={link}
                  tags={tags}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BookmarkType> = async () => {
  const bookmarks = await fetchBookmarks();

  const tags = Array.from(new Set(bookmarks.flatMap(({ tags }) => tags)));

  const props: BookmarkType = {
    bookmarks,
    tags,
  };

  return {
    props,
    revalidate: 60 * 60,
  };
};

export default Bookmarks;
