import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import * as React from 'react';

import Accent from '@/components/Accent';
import UnstyledLink from '@/components/links/UnstyledLink';

import KitBW from '../icons/KitBW';

type HeaderProps = {
  large?: boolean;
};

export default function Header({ large = false }: HeaderProps) {
  const { theme, setTheme } = useTheme();

  //#region  //*=========== Route Functionality ===========
  const router = useRouter();
  /** Ex: /projects/petrolida-2021 -> ['', 'projects', 'petrolida-2021'] */
  const arrOfRoute = router.route.split('/');
  const baseRoute = '/' + arrOfRoute[1];
  //#endregion  //*======== Route Functionality ===========

  //#region  //*=========== Scroll Shadow ===========
  const [onTop, setOnTop] = React.useState<boolean>(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //#endregion  //*======== Scroll Shadow ===========

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-shadow',
        !onTop && 'shadow-sm'
      )}
    >
      {/* Skip Navigation */}
      <a
        href='#skip-nav'
        className={clsx(
          'p-2 rounded-sm transition',
          'font-medium text-black dark:text-white',
          'bg-white dark:bg-dark',
          'group dark:hover:text-primary-300',
          'focus:ring focus:ring-primary-300 focus:outline-none',
          'absolute top-4 left-4',
          '-translate-y-16 focus:translate-y-0'
        )}
      >
        <Accent>Skip to main content</Accent>
      </a>

      {/* Gradient List */}

      <div className='bg-white transition-colors dark:bg-dark dark:text-white'>
        <nav
          className={clsx(
            'layout flex justify-between items-center py-4',
            large && 'lg:max-w-[68rem]'
          )}
        >
          <ul className='flex justify-between items-center space-x-3 text-xs md:space-x-4 md:text-base'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className={clsx(
                    'py-2 rounded-sm transition-colors',
                    'font-medium text-black dark:text-white',
                    'group dark:hover:text-primary-300',
                    'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
                  )}
                >
                  <span
                    className={clsx(
                      'transition-colors',
                      'bg-primary-300/0 dark:group-hover:bg-primary-300/0 group-hover:bg-primary-300/20',
                      href === baseRoute &&
                        '!bg-primary-300/50 dark:text-transparent dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text'
                    )}
                  >
                    {label}
                  </span>
                </UnstyledLink>
              </li>
            ))}
          </ul>
          <button
            className={clsx(
              'p-1.5 rounded-md focus:outline-none',

              ' text-red-400 dark:hover:text-red-300',
              'dark:focus-visible:border-primary-300 dark:focus-visible:text-red-400 focus-visible:text-red-300 focus-visible:border-primary-300'
            )}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <KitBW className='w-20 dark:invert' />
          </button>
        </nav>
      </div>
    </header>
  );
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/library', label: 'Library' },
  { href: '/about', label: 'About' },
];
