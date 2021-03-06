import clsx from 'clsx';
import { format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
// import { useRouter } from 'next/router';
import * as React from 'react';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import { MdHistory } from 'react-icons/md';

import { trackEvent } from '@/lib/analytics';
import { cleanBlogPrefix } from '@/lib/helper';
import { getFileBySlug, getFiles, getRecommendations } from '@/lib/mdx';
import useContentMeta from '@/hooks/useContentMeta';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';
// import usePostLikes from '@/hooks/useLikes';
import useScrollSpy from '@/hooks/useScrollspy';

// import usePostViews from '@/hooks/useViews';
import Accent from '@/components/Accent';
// import LikeButton from '@/components/buttons/like-button';
import Confeteez from '@/components/buttons/like-button';
import BlogCard from '@/components/content/blog/BlogCard';
import SubscribeCard from '@/components/content/blog/SubscribeCard';
import MDXComponents from '@/components/content/MDXComponents';
import ReloadDevtool from '@/components/content/ReloadDevtool';
import TableOfContents, {
  HeadingScrollSpy,
} from '@/components/content/TableOfContents';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import ShareTweetButton from '@/components/links/ShareTweetButton';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

// import Tooltip from '@/components/Tooltip';
import SupaDupa from '@/comments/SupaDupa';

import { BlogFrontmatter, BlogType } from '@/types/frontmatters';

type SingleBlogPageProps = {
  recommendations: BlogFrontmatter[];
} & BlogType;

export default function SingleBlogPage({
  code,
  frontmatter,
  recommendations,
}: SingleBlogPageProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const populatedRecommendations = useInjectContentMeta(
    'blog',
    recommendations
  );

  //#region  //*=========== Link Constants ===========
  const COMMIT_HISTORY_LINK = `https://github.com/mustaqimarifin/ekswhyzee.vercel.app/commits/main/src/contents/blog/${frontmatter.slug}.mdx`;
  const GITHUB_EDIT_LINK = `https://github.com/mustaqimarifin/ekswhyzee.vercel.app/blob/main/src/contents/blog/${frontmatter.slug}.mdx`;
  const OG_BANNER_LINK = `https://res.cloudinary.com/mstqmarfn/image/upload/f_auto,c_fill,ar_4:5,w_1200/mstqmarfn/banner/${frontmatter.banner}`;
  //#endregion  //*======== Link Constants ===========

  //#region  //*=========== Blog Language ===========
  const cleanSlug = cleanBlogPrefix(frontmatter.slug);
  const isEnglish = cleanSlug === frontmatter.slug;
  //#endregion  //*======== Blog Language ===========

  //#region  //*=========== Content Meta ===========
  const contentSlug = `b_${cleanSlug}`;
  /*   const { isLoading, likesByUser, addLike, contentLikes } = useContentMeta(
    contentSlug,
    { runIncrement: true }
  ); */
  const meta = useContentMeta(contentSlug, { runIncrement: true });
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
  const slug = query.slug as string; */

  //const { onView } = usePostViews(slug);

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
        isBlog
        banner={OG_BANNER_LINK}
        date={new Date(
          frontmatter.lastUpdated ?? frontmatter.publishedAt
        ).toISOString()}
      />
      <main>
        <ReloadDevtool />
        <section className=''>
          <div className='layout'>
            <div className='pb-4 dark:border-gray-600'>
              <CloudinaryImg
                publicId={`theodorusclarence/banner/${frontmatter.banner}`}
                alt={`Photo from unsplash: ${frontmatter.banner}`}
                width={1200}
                height={(1200 * 2) / 5}
                aspect={{ height: 2, width: 5 }}
              />

              <h1 className='serif mt-4 font-bold'>{frontmatter.title}</h1>

              <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
                Written on{' '}
                {format(new Date(frontmatter.publishedAt), 'MMMM dd, yyyy')} by
                Mustaqim Arifin.
              </p>
              {frontmatter.lastUpdated && (
                <div className='flex flex-wrap gap-2 mt-2 text-sm text-gray-700 dark:text-gray-200'>
                  <p>
                    Last updated{' '}
                    {format(new Date(frontmatter.lastUpdated), 'MMMM dd, yyyy')}
                    .
                  </p>
                  <UnstyledLink
                    href={COMMIT_HISTORY_LINK}
                    className={clsx(
                      'inline-flex gap-1 items-center font-medium rounded-sm',
                      'text-gray-600 dark:hover:text-primary-300 dark:text-gray-300 hover:text-gray-900',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
                    )}
                  >
                    <MdHistory className='text-lg' />
                    <span>See changes</span>
                  </UnstyledLink>
                </div>
              )}
              <div className='flex gap-2 justify-center items-center mt-6 text-sm font-medium text-center text-gray-600 dark:text-gray-300'>
                <div className='flex gap-1 items-center'>
                  <HiOutlineClock className='inline-block text-base' />
                  <Accent>{frontmatter.readingTime.text}</Accent>
                </div>

                <div className='flex gap-1 items-center'>
                  <HiOutlineEye className='inline-block text-base' />
                  <Accent>{meta?.views ?? '-'} views</Accent>
                </div>
              </div>
              {!frontmatter?.englishOnly && (
                <CustomLink
                  href={`/blog/${isEnglish ? 'id-' : ''}${cleanSlug}`}
                  className='mt-4'
                >
                  Read in {isEnglish ? 'Bahasa ' : 'English'}
                </CustomLink>
              )}
            </div>

            <hr className='dark:border-gray-600' />

            <section className='lg:grid-cols-[auto,300px] lg:grid lg:gap-8'>
              <article className='mdx prose prose-slate mx-auto mt-4 w-full leading-relaxed transition-colors lg:prose-lg dark:prose-invert'>
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
                <div className='sticky top-36 lg:top-32'>
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

            <ShareTweetButton
              className='mt-12'
              url={`https://ekswhyzee.vercel.app/blog/${frontmatter.slug}`}
              title={frontmatter.title}
            />

            <figure className='mt-12 w-full'>
              <SupaDupa slug={frontmatter.slug} />
            </figure>

            {populatedRecommendations.length > 0 && (
              <div className='mt-20'>
                <h2>
                  <Accent>Other posts that you might like</Accent>
                </h2>
                <ul className='grid gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedRecommendations.map((post, i) => (
                    <BlogCard
                      onClick={() => {
                        trackEvent(post.slug, 'recommend');
                      }}
                      className={clsx({ 'hidden xl:block': i === 2 })}
                      key={post.slug}
                      post={post}
                    />
                  ))}
                </ul>
              </div>
            )}

            <SubscribeCard className='mt-12' title='Enjoying this post?' />

            <div className='flex flex-col gap-4 items-start mt-8 md:flex-row-reverse md:justify-between'>
              <CustomLink href={GITHUB_EDIT_LINK}>
                Edit this on GitHub
              </CustomLink>
              <CustomLink href='/blog'>??? Back to blog</CustomLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('blog');

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
  const post = await getFileBySlug('blog', params?.slug as string);

  const recommendations = await getRecommendations(params?.slug as string);

  return {
    props: { ...post, recommendations },
  };
};
