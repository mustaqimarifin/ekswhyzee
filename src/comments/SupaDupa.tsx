/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';

import Comments from './Comments';
import { CommentsContextProvider, useComments } from './hooks/use-comments';
import { ModalProvider } from './hooks/use-modal';
import SortCommentsSelect from './SortCommentsSelect';

const SupaDupa = ({ slug }: { slug: string }): JSX.Element => {
  const { cnId, commentId } = useComments();

  const [enableLoadComments, setEnabledLoadComments] = useState(false);

  const LoadComments = useCallback(() => {
    setEnabledLoadComments(false);
  }, []);

  // Reload on theme change
  useEffect(() => {
    LoadComments();
  }, [LoadComments]);
  return (
    <div className='w-full text-gray-700 dark:text-gray-300'>
      {enableLoadComments && (
        <button onClick={LoadComments}>Load Comments</button>
      )}
      <CommentsContextProvider commentId={commentId} cnId={cnId}>
        <ModalProvider>
          <SortCommentsSelect />
          <Comments slug={slug} />
        </ModalProvider>
      </CommentsContextProvider>
    </div>
  );
};

export default SupaDupa;
