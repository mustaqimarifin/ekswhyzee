/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

import Avatar from './Avatar';
// import { useComments } from './hooks/use-comments';
import { useModal } from './hooks/use-modal';
//import punctuationRegex from 'threads/utils/regex/punctuationRegex';
import { useUser } from './hooks/use-user';
import User from './icons/User';
import NewUserModal from './NewUserModal';
import SignInModal from './SignInModal';
import updateFieldHeight from './utils/autosize';
//import { useRouter } from 'next/router';
import fetcher from './utils/fetcher';
import supabase from './utils/supaPublic';

type Props = {
  parentId?: string | null;
  handleSubmit?: any;
  placeholder?: string | null;
  submitLabel?: string;
  autofocus: boolean;
  handleResetCallback?: () => void;
  hideEarlyCallback?: () => void;
};

/* export const slug = window.location.pathname.substring(
  window.location.pathname.lastIndexOf('/') + 1
); */

const CommentForm = ({
  parentId = null,
  placeholder = null,
  handleSubmit,
  submitLabel,
  autofocus = false,
  handleResetCallback,
  hideEarlyCallback,
}: Props): JSX.Element => {
  const [text, setText] = useState('');
  // const [slug, setSlug] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user, profile } = useUser();
  const { open, isOpen } = useModal({
    signInModal: SignInModal,
    newUserModal: NewUserModal,
  });
  /*   const { data } = useSWR(() => {
    const query = new URLSearchParams({ slug });
    return `/api/comment?${query.toString()}`;
  }, fetcher);
  useEffect(() => {
    const slug = window.location.pathname.substring(
      window.location.pathname.lastIndexOf('/') + 1
    );
    setSlug(slug);
  }, []); */
  const SignOut = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    if (user && profile && (!profile.full_name || !profile.username)) {
      open('newUserModal');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, profile]);
  useEffect(() => {
    if (!isOpen) {
      setIsLoading(false);
    }
  }, [isOpen]);
  useEffect(() => {
    if (autofocus) {
      if (textareaRef && textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  }, [autofocus]);
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setText(e.target.value);
    if (textareaRef?.current) {
      updateFieldHeight(textareaRef.current);
    }
  }
  function handleReset(): void {
    setText('');
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = 'initial';
    }
    setIsLoading(false);
  }
  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleSubmit(text);
    setIsLoading(true);
    hideEarlyCallback?.();
    if (!user) {
      return open('signInModal');
    }
    if (!profile) {
      return open('newUserModal');
    }
    handleReset();
    handleResetCallback?.();
  };
  /* const comment = {
        authorId: user?.id,
        text: text,
        parentId: parentId || null,
        slug
      };
  
  
      const { data, error } = await supabase.from('comments').insert([comment]);
      if (error) {
        console.log(error);
      } else {
        return data;
      } */
  return (
    <div className='min-h-10 flex flex-col flex-grow justify-between pt-4 space-y-4 w-full rounded'>
      <div className='flex items-center space-x-2'>
        {!user && (
          <button
            className='focus-ring'
            onClick={() => open('signInModal')}
            aria-label='Create new account'
          >
            <User className='w-7 h-7 text-gray-600' />
          </button>
        )}
        {user && <Avatar profile={profile} />}

        <label className='focus-within-ring min-h-10 flex flex-grow items-center cursor-text select-none'>
          <span className='sr-only'>Enter a comment</span>
          <textarea
            className='form-textarea min-h-5 block overflow-auto flex-1 flex-grow px-0 py-2 m-1 mt-1 max-h-36 text-sm font-semibold leading-loose placeholder-red-600 text-gray-700 bg-transparent rounded-lg border-none transition-opacity resize-none dark:placeholder-pink-200 dark:text-gray-50 focus:ring-0 focus:shadow-none focus:outline-none disabled:opacity-50'
            placeholder={
              user ? `Add a comment...` : 'Login with Google | Twitter | Github'
            }
            rows={1}
            value={text}
            onChange={handleChange}
            ref={textareaRef}
            disabled={!user}
          ></textarea>
        </label>
        {user && (
          <div className='justify-between h-full'>
            <button
              className={clsx(
                'focus-ring px-2 h-full max-h-10 text-xs font-semibold text-indigo-500 border border-transparent dark:text-indigo-400 hover:text-green-600',
                {
                  'cursor-not-allowed opacity-30': text.length < 1 || isLoading,
                }
              )}
              disabled={text.length < 1}
              aria-label='Submit new post'
              onClick={onSubmit}
            >
              {submitLabel}
            </button>
            <button
              className={clsx(
                'focus-ring h-full max-h-10 text-xs font-semibold text-pink-400 border border-transparent dark:text-pink-200 hover:text-yellow-500'
              )}
              aria-label='Sign Out'
              onClick={(e) => {
                e.preventDefault();
                SignOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )}
        {!user && (
          <button
            className='px-2 py-1 text-sm font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-700 disabled:opacity-40'
            onClick={() => open('signInModal')}
            aria-label='Create new account'
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};
export default CommentForm;

/*  mutateComments(async (pages) => {
          const optimisticReply = {
            ...comment,
            author: profile,
            highlight: true,
            createdAt: new Date().toISOString()
          };
          const newData = [optimisticReply, ...pages];
          return newData;
        }, false); */
/*     const { data, error } = await supabase.from('comments').insert([comment]);
        if (error) console.log('error', error);
        else setComments([comment, ...comments]);
        setActiveComment(null); */
/*     mutateComments(async (staleReplies) => {
          const newReply = {
            ...data?.[0],
            author: profile,
            replies: []
          };
          const filteredReplies = staleReplies.filter(
            (reply) => reply.slug !== newReply.slug
          );
          const newData = [[newReply], ...filteredReplies];
          return newData;


  /*   const onSubmit = (event) => {
          event.preventDefault();
          handleSubmit(text);
          setText('');
        }; */

/* <div className="flex items-center mt-4">
   {session?.user && (
     <div className="flex items-center space-x-6">
       <button className="py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700">
         Send
       </button>
       <button
         className="text-gray-500"
         onClick={() => supabase.auth.signOut()}
       >
         Log out
       </button>
     </div>
   )}
   {!session?.user && (
     <button
       type="button"
       className="py-2 px-4 rounded bg-indigo-500 text-white disabled:opacity-40 hover:bg-blue-700"
       onClick={() => open('signInModal')}
     >
       Log In
     </button>
   )}
 </div>; */

/* <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={!author}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form> */

/* const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const author = supabase.auth.user();

  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={!author}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm; */
