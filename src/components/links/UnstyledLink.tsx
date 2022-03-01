import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

export type UnstyledLinkProps = {
  to?: string;
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

export default function UnstyledLink({
  to,
  children,
  href,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith('/') && !href.startsWith('#');
  if (to) {
    openNewTab = to.startsWith('http');
  }

  if (!isNewTab) {
    return (
      <Link href={href || to}>
        <a {...rest} className={className}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href || to}
      {...rest}
      className={clsx(className, 'cursor-newtab')}
    >
      {children}
    </a>
  );
}
