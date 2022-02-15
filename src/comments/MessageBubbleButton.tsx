//import React from 'react';

import { useComments } from './hooks/use-comments';
import MessageBubble from './icons/MessageBubble';

const MessageBubbleButton = (): JSX.Element => {
  const { count } = useComments();
  return (
    <button className='focus-within-ring block' aria-label='View comments'>
      <a
        href='#comments'
        className='transition-color flex items-center p-1 text-sm text-gray-600 dark:hover:text-gray-50 dark:text-gray-200 hover:text-gray-500'
      >
        <MessageBubble className='w-6 h-6' />
        <span className='ml-1'>{count ? count : `-`}</span>
      </a>
    </button>
  );
};

export default MessageBubbleButton;
