import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        /*         'bg-clip-text bg-gradient-to-br from-primary-300/40 text-transparent to-primary-400/40 via-primary-300/10', */
        'from-slate-600 text-transparent bg-clip-text bg-gradient-to-tr via-purple-800 to-purple-600',
        'dark:text-transparent dark:bg-clip-text dark:from-pink-500 dark:to-rose-500'
      )}
    >
      {children}
    </span>
  );
}
