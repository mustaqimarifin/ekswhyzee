/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

import { useModal } from '@/comments/hooks/use-modal';

import Github from './icons/Github';
import Google from './icons/Google';
import Twitter from './icons/Twitter';
import validateEmail from './regex/validateEmailRegex';
import supabase from './utils/supaPublic';

type Views = 'magic_link' | 'awaiting_confirmation';

// TODO: improve types
interface MagicLinkViewProps {
  email: string;
  setEmail: (...args: any[]) => any;
  setAuthView: any;
}

interface Error {
  message: string;
}
function MagicLinkView({
  email,
  setEmail,
  setAuthView,
}: MagicLinkViewProps): JSX.Element {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(
    e: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    setLoading(true);

    if (!validateEmail(email)) {
      setLoading(false);
      return setError({ message: 'Please enter a valid email address.' });
    }

    const { error } = await supabase.auth.signIn({
      email,
    });

    if (error) {
      console.log(error);
      setLoading(false);
      return setError({ message: 'Something went wrong. Please try again.' });
    }

    setError(null);
    setLoading(false);
    setAuthView('awaiting_confirmation');
  }

  return (
    <>
      <h1
        className='text-2xl font-semibold leading-6 dark:text-white'
        id='modal-headline'
      >
        Sign in
      </h1>
      <p className='my-2 text-sm text-gray-600 dark:text-gray-200'>
        Don&apos;t worry, we&apos;ll save your comment.
      </p>
      <div>
        <div>
          <button
            className='focus-ring flex justify-center items-center px-4 py-2 w-full text-gray-800 rounded border border-gray-300 shadow-sm'
            onClick={() => supabase.auth.signIn({ provider: 'github' })}
            aria-label='Sign in with GitHub'
          >
            <Github className='w-5 h-5 dark:text-white' />
            <span className='ml-2 text-sm leading-none dark:text-gray-200'>
              Sign in with GitHub
            </span>
          </button>
          <button
            className='focus-ring flex justify-center items-center px-4 py-2 w-full text-gray-800 rounded border border-gray-300 shadow-sm'
            onClick={() => supabase.auth.signIn({ provider: 'google' })}
            aria-label='Sign in with Google'
          >
            <Google className='w-5 h-5 dark:text-white' />
            <span className='ml-2 text-sm leading-none dark:text-gray-200'>
              Sign in with Google
            </span>
          </button>
          <button
            className='focus-ring flex justify-center items-center px-4 py-2 w-full text-gray-800 rounded border border-gray-300 shadow-sm'
            onClick={() => supabase.auth.signIn({ provider: 'twitter' })}
            aria-label='Sign in with Twitter'
          >
            <Twitter className='w-5 h-5 dark:text-white' />
            <span className='ml-2 text-sm leading-none dark:text-gray-200'>
              Sign in with Twitter
            </span>
          </button>
        </div>
        <div className='flex items-center my-3'>
          <div className='w-full h-px bg-gray-300'></div>
          <div className='flex-shrink-0 px-2 text-sm text-gray-600 dark:text-gray-200'>
            Or, use my email address
          </div>
          <div className='w-full h-px bg-gray-300'></div>
        </div>
        <form onSubmit={handleSubmit}>
          <label className='block mb-2'>
            <div className='mb-1 text-sm'>Email:</div>
            <input
              type='text'
              onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
              value={email}
              autoComplete='email'
              className='block p-2 mt-1 w-full rounded-md border border-gray-300 shadow-sm transition duration-75 sm:text-sm dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none'
              placeholder='jane@example.com'
              disabled={loading}
            />
          </label>
          {error && <div className='text-sm text-red-600'>{error.message}</div>}
          <button
            type='submit'
            className='focus-ring inline-flex justify-center px-4 py-2 mt-2 w-full text-base font-medium text-white bg-indigo-500 rounded-md border border-transparent shadow-sm sm:w-auto sm:text-sm hover:bg-indigo-600 disabled:opacity-50'
            disabled={loading}
            aria-label='Send email link'
          >
            Send email link
          </button>
        </form>
      </div>
    </>
  );
}

// TODO: improve types
interface AwaitingConfirmationViewProps {
  email: string;
  setAuthView: any;
}
function AwaitingConfirmationView({
  email,
  setAuthView,
}: AwaitingConfirmationViewProps): JSX.Element {
  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     console.log(event);
  //   });
  // }, []);

  return (
    <div className='flex flex-col items-center'>
      <h1
        className='text-2xl font-semibold leading-6 text-gray-900 dark:text-white'
        id='modal-headline'
      >
        Confirm your email
      </h1>
      <div className='my-4 leading-loose text-center'>
        <p>We emailed a sign-in link to</p>
        <div className='font-bold'>
          {email}{' '}
          <button
            className='text-indigo-700 dark:text-indigo-400 hover:underline focus:outline-none'
            onClick={() => setAuthView('magic_link')}
            aria-label='Edit email'
          >
            (edit)
          </button>
          .
        </div>
        <p>Click the link to sign in or sign up.</p>
      </div>
    </div>
  );
}

const SignInModal = () => {
  const [authView, setAuthView] = useState<Views>('magic_link');
  const [email, setEmail] = useState('');
  const { isOpen: show, close } = useModal('signInModal');

  return (
    <Transition show={show}>
      <div className='overflow-y-auto fixed inset-0 z-50'>
        <div className='flex relative justify-center items-end px-4 pt-4 pb-4 min-h-screen text-center sm:items-center sm:p-0'>
          <Transition.Child
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div
              className='absolute inset-0 transition-opacity'
              aria-hidden='true'
              onClick={() => close('signInModal')}
            >
              <div className='absolute inset-0 bg-gray-500 opacity-50' />
            </div>
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          {/* <span
            className="hidden align-bottom sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          ></span> */}

          <div
            className='inline-block overflow-hidden w-full text-left bg-white rounded-lg shadow-xl transition-all transform sm:my-8 sm:max-w-sm sm:align-middle dark:bg-gray-800'
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-headline'
          >
            <Transition.Child
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 w-full sm:mt-0 sm:text-left'>
                    {authView === 'magic_link' && (
                      <MagicLinkView
                        email={email}
                        setEmail={setEmail}
                        setAuthView={setAuthView}
                      />
                    )}
                    {authView === 'awaiting_confirmation' && (
                      <AwaitingConfirmationView
                        email={email}
                        setAuthView={setAuthView}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className='px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-gray-800'>
                {/* <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-600 focus-ring sm:ml-3 sm:w-auto sm:text-sm">
                Sign in
                    </button> */}
                <button
                  type='button'
                  onClick={() => close('signInModal')}
                  className='focus-ring inline-flex justify-center px-4 py-2 mt-3 w-full text-base font-medium text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:text-white dark:bg-gray-700 hover:bg-gray-50'
                  aria-label='cancel'
                >
                  Cancel
                </button>
              </div>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default SignInModal;
