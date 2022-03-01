/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
// import Image from 'next/image';
import * as React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { InView } from 'react-intersection-observer';

import { trackEvent } from '@/lib/analytics';
import { getAllFilesFrontmatter, getFeatured } from '@/lib/mdx';
import { generateRss } from '@/lib/rss';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
// import Akhyla from '@/components/Akhyla';
import BlogCard from '@/components/content/blog/BlogCard';
import FeaturedPosts from '@/components/content/blog/FeaturedPosts';
import DesignSystems from '@/components/content/DesignSystems';
import LibraryCard from '@/components/content/library/LibraryCard';
import ProjectCard from '@/components/content/projects/ProjectCard';
import { Globe, Muse, Music } from '@/components/icons/Icon';
import Kit from '@/components/icons/Kit';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Marker from '@/components/Marker';
import Seo from '@/components/Seo';
import Tooltip from '@/components/Tooltip';

// import ghost from 'public/images/ghost.jpeg';
import ContactMe from '../components/content/Contact';

export default function IndexPage({
  featuredPosts,
  featuredProjects,
  featuredLibrary,
  introPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const populatedPosts = useInjectContentMeta('blog', featuredPosts);
  const populatedIntro = useInjectContentMeta('blog', introPosts);
  const populatedProjects = useInjectContentMeta('projects', featuredProjects);
  const populatedLibrary = useInjectContentMeta('library', featuredLibrary);

  const isLoaded = useLoaded();

  return (
    <>
      <Layout>
        <main>
          <Seo />
          <section
            className={clsx(
              'mt-15 flex flex-col justify-center mb-10 md:min-h-main  ',
              isLoaded && 'fade-in-start'
            )}
          >
            <article className='layout p-4 w-full max-w-3xl'>
              <h2 className='serif pt-4 mb-6 text-2xl leading-relaxed drop-shadow-sm md:text-4xl'>
                Mustaqim Arifin is a{' '}
                <span className='text-coyGreen'>product manager&nbsp;✐</span>,{' '}
                <span className='text-coyBlue'>
                  audio engineer&nbsp;
                  <Music className='fill-coyBlue inline -mt-1 w-7' />
                  {/*                   <span className='align-middle leading-4 text-6xl'>
                    ⌨&nbsp;
                  </span> */}
                </span>
                , and{' '}
                <span className='text-coyRed'>
                  web developer (in-the-making)&nbsp;
                  <Globe className='inline -mt-2' />
                </span>{' '}
                working on{' '}
                <span className='text-coyYellow items-center'>
                  content & business systems&nbsp;❏
                </span>{' '}
                at&nbsp;
                <span>
                  <UnstyledLink href='https://stripe.com'>
                    <Muse width={60} className='inline items-center mb-1' />
                  </UnstyledLink>
                </span>
              </h2>
              <div className='w-[120px] float-right m-4 rounded-full filter sm:w-[190px]'>
                <Image
                  alt='Lee Robinson'
                  height={150}
                  width={150}
                  src='/images/avatar_sq1_purple.png'
                  className='shadow-blue-500/70 rounded-full shadow-inner'
                />
              </div>
              <div className='drop-shadow-sm'>
                <p className='prose py-4 max-w-none leading-relaxed md:prose-lg dark:prose-invert'>
                  Growing up online is where I developed a love for visual and
                  interface design, and I earned a degree in Computer Science so
                  I could make those designs real. I got my start doing iOS
                  design and development, but I spend most of my time these days
                  thinking about the web—how it works, how it’s changing, and
                  how we can make it a better place.
                </p>

                <p className='prose py-4 leading-loose md:prose-lg dark:prose-invert'>
                  This website is my home on the web, and in{' '}
                  <a
                    className='decoration-coyYellow serif italic underline duration-300 hover:text-coyYellow'
                    href='https://thecreativeindependent.com/essays/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be'
                  >
                    the words of Laurel Schwulst
                  </a>{' '}
                  it is truly “a shifting house next to a river of knowledge.” I
                  use this site to share my thoughts, keep a record of my work,
                  and catalog the things I discover online.
                </p>
                <Kit className='w-24 stroke-2' />
                <FeaturedPosts posts={featuredPosts} />
                <h2 className='serif mt-20 text-2xl lg:text-4xl'>
                  I’m currently focused on{' '}
                  <span className='decoration-coyGreen italic underline'>
                    design&nbsp;systems
                  </span>
                  .
                </h2>
                <div className='mt-20'>
                  <p className='leading-loose'>
                    I believe that design systems can be powerful catalysts for
                    change within a product organization, and provide a shared
                    vocabulary that makes collaboration more efficient and
                    inclusive. By focusing on systems, I hope to help ensure
                    that the spaces where we are frequently spending more and
                    more of our time online are built in ways that are
                    accessible, intentional, and respectful of the web as a
                    material.
                  </p>
                </div>
                <DesignSystems />
                <ContactMe />
              </div>
              <Marker
                className='flex mt-40'
                style={{ '--color-accent': 'var(--color-red)' }}
              >
                Now
                <hr className='flex place-self-center align-middle border-dashed'></hr>
              </Marker>
            </article>
            <article>
              {/* <h2 className='text-2xl md:text-4xl 2xl:text-5xl' data-fade='1'>
                Hi!
              </h2>
              <h1
                className='font-ivar mt-1 text-3xl md:text-5xl 2xl:text-6xl'
                data-fade='2'
              >
                You can call me <Accent>Mus</Accent>
              </h1>
              <p
                className={clsx(
                  ' max-w-4xl mt-4 text-gray-700 md:mt-6 dark:text-gray-200',
                  'md:text-lg 2xl:text-xl'
                )}
                data-fade='3'
              >
                I work with React Ecosystem, and write to teach people how to
                rebuild and redefine fundamental concepts through mental models.
              </p>
              <p
                className='leading-relaxed max-w-4xl mt-3 text-gray-700 md:mt-4 md:text-lg 2xl:text-xl dark:text-gray-200'
                data-fade='4'
              >
                Don't forget to sign my{' '}
                <CustomLink href='/guestbook'>guestbook</CustomLink>!
              </p> */}
              <div
                data-fade='5'
                className='flex flex-wrap gap-4 mt-8 md:!text-lg'
              >
                <div className='group relative'>
                  <div
                    className={clsx(
                      'animate-tilt absolute -inset-0.5 rounded blur',
                      'bg-gradient-to-r from-primary-300 to-primary-400',
                      'dark:from-primary-200 dark:via-primary-300',
                      'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                    )}
                  />
                  <ButtonLink href='#intro'>Read the blog</ButtonLink>
                </div>
                <ButtonLink href='/about'>Learn more about me</ButtonLink>
              </div>
              <div
                data-fade='6'
                className='flex flex-wrap gap-y-2 gap-4 mt-4 md:mt-8'
              >
                <UnstyledLink
                  href='https://clarence.link/cv'
                  className={clsx(
                    'inline-flex gap-1 items-center text-sm font-medium md:text-base',
                    'text-gray-600 dark:hover:text-white dark:text-gray-400 hover:text-black',
                    'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                    'transition-colors'
                  )}
                  onClick={() => {
                    trackEvent('Social Link: Resume', 'link');
                  }}
                >
                  <IoNewspaperSharp className='shrink-0' />
                  <span>Resume</span>
                </UnstyledLink>
                <UnstyledLink
                  href='https://twitter.com/vmprmyth'
                  className={clsx(
                    'inline-flex gap-1 items-center text-sm font-medium md:text-base',
                    'group text-gray-600 dark:hover:text-white dark:text-gray-400 hover:text-black',
                    'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                    'transition-colors'
                  )}
                  onClick={() => {
                    trackEvent('Social Link: Twitter', 'link');
                  }}
                >
                  <SiTwitter className='shrink-0 transition-colors group-hover:text-[#1da1f2]' />
                  <span>@vmprmyth</span>
                </UnstyledLink>
                <UnstyledLink
                  href='https://github.com/mustaqimarifin'
                  className={clsx(
                    'inline-flex gap-1 items-center text-sm font-medium md:text-base',
                    'text-gray-600 dark:hover:text-white dark:text-gray-400 hover:text-black',
                    'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                    'transition-colors'
                  )}
                  onClick={() => {
                    trackEvent('Social Link: Github', 'link');
                  }}
                >
                  <SiGithub className='shrink-0' />
                  <span>mustaqimarifin</span>
                </UnstyledLink>
              </div>
            </article>
            <UnstyledLink
              href='#intro'
              className={clsx(
                'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
                'rounded-md transition-colors cursor-pointer',
                'hover:text-primary-300 focus-visible:text-primary-300'
              )}
            >
              <IoArrowDownOutline className='w-8 h-8 animate-bounce md:w-10 md:h-10' />
            </UnstyledLink>
            {/*             <Parallax>
              <Moon
                className={clsx(
                  'absolute bottom-0 right-6',
                  'transform-gpu translate-y-[37%]',
                  'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
                  ' opacity-40 z-[-2] dark:invert dark:opacity-30'
                )}
              />
            </Parallax> */}
          </section>
          <InView triggerOnce rootMargin='-40% 0px'>
            {({ ref, inView }) => (
              <section
                ref={ref}
                id='intro'
                className={clsx('py-20', inView && 'fade-in-start')}
              >
                <article
                  className={clsx(
                    'layout flex flex-col-reverse items-center md:flex-row md:justify-start',
                    'md:gap-4'
                  )}
                  data-fade='0'
                >
                  <div className='mt-8 w-full h-full md:mt-0'>
                    <h2 className='text-4xl md:text-6xl'>
                      <Accent className='decoration-clone inline leading-snug dark:leading-none'>
                        Rebuild your mental model
                      </Accent>
                    </h2>
                    <p className='mt-4 text-base text-gray-600 md:text-lg dark:text-gray-300'>
                      <Tooltip
                        withUnderline
                        content={
                          <>
                            A mental model is an explanation of someone's{' '}
                            <strong>thought process</strong> about how something
                            works. You can use it as your own guide that you can
                            test through some cases.
                          </>
                        }
                      >
                        Mental model
                      </Tooltip>{' '}
                      will make front-end development more{' '}
                      <strong className='text-gray-700 dark:text-gray-200'>
                        predictable
                      </strong>{' '}
                      by seeing how they work{' '}
                      <strong className='text-gray-700 dark:text-gray-200'>
                        fundamentally
                      </strong>
                      . In my blog, I'm sharing how I approach something and how
                      my mental model affect my learning about a certain topic.
                    </p>
                  </div>
                  <div className='w-full h-full'>
                    <ul className='relative h-full'>
                      <BlogCard
                        className={clsx(
                          'max-w-[350px] absolute transform-gpu',
                          'translate-y-[-55%] top-1/2 md:translate-y-[-50%] lg:translate-y-[-60%]',
                          'left-1/2 -translate-x-1/2 md:translate-x-[-50%] lg:translate-x-[-30%]',
                          'rotate-3 md:rotate-6 lg:rotate-12',
                          'pointer-events-none md:pointer-events-auto'
                        )}
                        post={populatedIntro[1]}
                      />
                      <BlogCard
                        className='max-w-[350px] mx-auto'
                        post={populatedIntro[0]}
                      />
                    </ul>
                  </div>
                </article>
              </section>
            )}
          </InView>
          <InView triggerOnce rootMargin='-40% 0px'>
            {({ ref, inView }) => (
              <section
                ref={ref}
                className={clsx('py-20', inView && 'fade-in-start')}
              >
                <article className='layout' data-fade='0'>
                  <h2 className='text-2xl md:text-4xl' id='blog'>
                    <Accent>Featured Posts</Accent>
                  </h2>

                  <ul className='grid gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3'>
                    {populatedPosts.map((post, i) => (
                      <BlogCard
                        key={post.slug}
                        post={post}
                        className={clsx(i > 2 && 'hidden sm:block')}
                      />
                    ))}
                  </ul>
                  <ButtonLink
                    className='mt-4'
                    href='/blog'
                    onClick={() =>
                      trackEvent('Home: See more post', 'navigate')
                    }
                  >
                    See more post
                  </ButtonLink>
                </article>
              </section>
            )}
          </InView>
          <InView triggerOnce rootMargin='-40% 0px'>
            {({ ref, inView }) => (
              <section
                ref={ref}
                className={clsx('py-20', inView && 'fade-in-start')}
              >
                <article className='layout' data-fade='0'>
                  <h2 className='text-2xl md:text-4xl' id='projects'>
                    <Accent>Featured Projects</Accent>
                  </h2>
                  <p className='mt-2 text-gray-600 dark:text-gray-300'>
                    Some projects that I'm proud of
                  </p>
                  <ul className='grid gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3'>
                    {populatedProjects.map((project, i) => (
                      <ProjectCard
                        key={project.slug}
                        project={project}
                        className={clsx(i > 2 && 'hidden sm:block')}
                      />
                    ))}
                  </ul>
                  <ButtonLink
                    className='mt-4'
                    href='/projects'
                    onClick={() =>
                      trackEvent('Home: See more project', 'navigate')
                    }
                  >
                    See more project
                  </ButtonLink>
                </article>
              </section>
            )}
          </InView>
          <InView triggerOnce rootMargin='-40% 0px'>
            {({ ref, inView }) => (
              <section
                ref={ref}
                className={clsx('py-20', inView && 'fade-in-start')}
              >
                <article className='layout' data-fade='0'>
                  <h2 className='text-2xl md:text-4xl' id='library'>
                    <Accent>Library of Code Snippets</Accent>
                  </h2>
                  <p className='mt-2 text-gray-600 dark:text-gray-300'>
                    List of code snippets that I store for easy access.
                  </p>
                  <ul className='grid gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3'>
                    {populatedLibrary.map((snippet, i) => (
                      <LibraryCard
                        key={snippet.slug}
                        snippet={snippet}
                        className={clsx(i > 2 && 'hidden sm:block')}
                      />
                    ))}
                  </ul>
                  <ButtonLink
                    className='mt-4'
                    href='/library'
                    onClick={() =>
                      trackEvent('Home: See more snippets', 'navigate')
                    }
                  >
                    See more snippets
                  </ButtonLink>
                </article>
              </section>
            )}
          </InView>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  generateRss();

  const blogs = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('projects');
  const library = await getAllFilesFrontmatter('library');

  const featuredPosts = getFeatured(blogs, [
    'one-stop-starter',
    '2021-retrospective',
    'nextjs-storybook-tailwind',
    'react-core-concept-rendering-state',
    'nextjs-fetch-method',
    'youtube-list',
  ]);
  const featuredProjects = getFeatured(projects, [
    'seasforus',
    'ppdbsumsel',
    'side-projects',
  ]);
  const featuredLibrary = getFeatured(library, [
    'absolute-import',
    'auth-context',
    'conventional-commit-readme',
    'husky-commitlint-prettier',
    'toast',
    'tailwindcss-basestyle',
  ]);

  const introPosts = getFeatured(blogs, [
    'btb-flex-mental-model',
    'nextjs-fetch-method',
  ]);

  return {
    props: { featuredPosts, featuredProjects, featuredLibrary, introPosts },
  };
}
