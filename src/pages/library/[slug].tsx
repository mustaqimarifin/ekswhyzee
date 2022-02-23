/* eslint-disable @typescript-eslint/no-unused-vars */
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { HiOutlineEye } from 'react-icons/hi';

import { getFileBySlug, getFiles } from '@/lib/mdx';
import useContentMeta from '@/hooks/useContentMeta';
import usePostLikes from '@/hooks/useLikes';
import useScrollSpy from '@/hooks/useScrollspy';
import usePostViews from '@/hooks/useViews';

import Accent from '@/components/Accent';
import LikeButton from '@/components/buttons/like-button';
import Confeteez from '@/components/buttons/like-button';
import MDXComponents from '@/components/content/MDXComponents';
import TableOfContents, {
  HeadingScrollSpy,
} from '@/components/content/TableOfContents';
import TechIcons, { TechListType } from '@/components/icons/TechIcons';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

import SupaDupa from '@/comments/SupaDupa';

import { LibraryType } from '@/types/frontmatters';

export default function SingleLibraryPage({ code, frontmatter }: LibraryType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  //#region  //*=========== Content Meta ===========
  const contentSlug = `l_${frontmatter.slug}`;
  const { isLoading, likesByUser, addLike, contentLikes } = useContentMeta(
    contentSlug,
    { runIncrement: true }
  );
  const meta = useContentMeta(contentSlug);
  //#endregion  //*======== Content Meta ===========

  //#region  //*=========== Scrollspy ===========
  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState<HeadingScrollSpy>();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [frontmatter.slug]);
  //#endregion  //*======== Scrollspy ===========
  /*   const { query } = useRouter();
  const slug = query.slug as string;

  const { views, onView } = usePostViews(slug);
  const { isLoading, userLikes, onLike, likes } = usePostLikes(slug); */

  /*   React.useEffect(() => {
    if (slug) {
      onView();
    }
  }, [slug, onView]); */
  return (
    <Layout>
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
      />

      <main>
        <section className=''>
          <div className='layout'>
            <div className='border-b-thin pb-4 dark:border-gray-600'>
              <h1 className='mt-4'>{frontmatter.title}</h1>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
                {frontmatter.description}
              </p>
              <div className='flex gap-3 justify-start items-center mt-2 text-sm font-medium text-gray-600 dark:text-gray-300'>
                <div className='flex gap-1 items-center'>
                  <HiOutlineEye className='inline-block text-base' />
                  <Accent>{meta?.views ?? '_'} views</Accent>
                </div>
                <span>•</span>
                <TechIcons
                  techs={frontmatter.tags.split(',') as Array<TechListType>}
                />
              </div>
            </div>

            <hr className='dark:border-gray-600' />

            <section className='lg:grid-cols-[auto,250px] lg:grid lg:gap-8'>
              <article className='mdx prose mx-auto mt-4 w-full transition-colors dark:prose-invert'>
                <Component
                  components={
                    {
                      ...MDXComponents,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                />
              </article>

              <aside className='py-4'>
                <div className='sticky top-36'>
                  <TableOfContents
                    toc={toc}
                    minLevel={minLevel}
                    activeSection={activeSection}
                  />
                  <div className='flex justify-center items-center py-8'>
                    <Confeteez slug={contentSlug} />

                    {/*                     {!isLoading && (
                      <Confeteez
                        addLike={addLike}
                        contentLikes={contentLikes}
                        likesByUser={likesByUser}
                      />
                    )} */}
                  </div>
                </div>
              </aside>
            </section>

            <figure className='mt-12 w-full'>
              <SupaDupa slug={frontmatter.slug} />
            </figure>

            <div className='flex flex-col gap-4 items-start mt-8 md:flex-row-reverse md:justify-between'>
              <CustomLink
                href={`https://github.com/mustaqimarifin/ekswhyzee.vercel.app/blob/main/src/contents/library/${frontmatter.slug}.mdx`}
              >
                Edit this on GitHub
              </CustomLink>
              <CustomLink href='/library'>← Back to library</CustomLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('library');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getFileBySlug('library', params?.slug as string);

  return {
    props: { ...post },
  };
};
