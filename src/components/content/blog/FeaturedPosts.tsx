import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import type { FeatPost } from '@/types/frontmatters';

const FeaturedPosts = ({ posts }: FeatPost): JSX.Element => {
  return (
    <>
      <div className='text-coyRed mt-16 text-xs font-bold uppercase'>
        Featured writing
      </div>

      <p className='mt-4 font-serif text-xl font-light'>
        {posts.slice(0, 4).map(
          (
            post: {
              slug: string;
              title: string;
            },
            i
          ) => (
            <React.Fragment key={i}>
              {Boolean(i) && (
                <span className='mx-1 text-gray-300 dark:text-gray-500'>×</span>
              )}
              <UnstyledLink
                href={`/blog/${post.slug}`}
                className='duration-300 hover:text-coyRed'
              >
                {post.title}
              </UnstyledLink>
            </React.Fragment>
          )
        )}
      </p>
    </>
  );
};

export default FeaturedPosts;
