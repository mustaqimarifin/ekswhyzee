import React, { useCallback, useEffect, useState } from 'react';

import Comments from './Comments';
import { CommentsContextProvider, useComments } from './hooks/use-comments';
import { ModalProvider } from './hooks/use-modal';

type Supa = {
  slug: string;
};

const SupaDupa = ({ slug }: Supa) => {
  const { commentId } = useComments();

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
      <CommentsContextProvider commentId={commentId}>
        <ModalProvider>
          <Comments slug={slug} />
        </ModalProvider>
      </CommentsContextProvider>
    </div>
  );
};

export default SupaDupa;
