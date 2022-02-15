import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        'from-primary-300/40 to-primary-400/40 via-primary-300/10 bg-clip-text bg-gradient-to-br',
        'dark:text-transparent dark:bg-clip-text dark:from-primary-300 dark:to-primary-400'
      )}
    >
      {children}
    </span>
  );
}
