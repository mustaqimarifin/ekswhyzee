/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';

import Avatar from './Avatar';
import { useModal } from './hooks/use-modal';
import { useUser } from './hooks/use-user';
import supabase from './utils/supaPublic';

const NewUserModal = (): JSX.Element => {
  const { user, profile, refresh } = useUser();
  const { isOpen: show, close } = useModal('newUserModal');

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [_, setImageURL] = useState('');
  const [fullNameError, setFullNameError] = useState('' ?? null);
  const [usernameError, setUserNameError] = useState('' ?? null);

  useEffect(() => {
    if (profile?.full_name) {
      setFullName(profile.full_name);
    }

    if (profile?.username) {
      setUsername(profile.username);
    }
  }, [profile]);

  useEffect(() => {
    if (user?.user_metadata?.full_name) {
      setFullName(user?.user_metadata.full_name);
    }

    if (user?.user_metadata?.avatar_url) {
      setImageURL(user?.user_metadata?.avatar_url);
    }
  }, [user]);

  async function handleSubmit(
    e: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> {
    if (!user) throw new Error('Not signed in');
    e.preventDefault();
    if (fullName.length > 5000) {
      return setFullNameError('Is your name really this long?');
    }

    const { data, error } = await supabase
      .from('profiles')
      .update({ full_name: fullName, username })
      .match({ id: user.id });

    if (error) {
      console.log(error);
      if (error.code === '23505') {
        return setUserNameError('This username is already taken.');
      }
      return setFullNameError(
        'Something went wrong. Please try again or contact support.'
      );
    }

    setFullNameError('');
    if (data) {
      await refresh();
      close('newUserModal');
    }
  }

  return (
    <Transition show={show}>
      <div className='overflow-y-auto fixed inset-0 z-50'>
        <div className='relative justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0'>
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
            >
              <div className='absolute inset-0 bg-gray-500 opacity-50' />
            </div>
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:h-screen sm:align-middle'
            aria-hidden='true'
          ></span>

          <div
            className='inline-block overflow-hidden text-left align-bottom bg-white rounded-lg shadow-xl transition-all transform sm:my-8 sm:w-full sm:max-w-lg sm:align-middle'
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
              <div className='px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4 dark:bg-gray-800'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 w-full text-center sm:mt-0 sm:text-left'>
                    <h1
                      className='text-2xl font-medium leading-6 text-gray-900 dark:text-white'
                      id='modal-headline'
                    >
                      Welcome!
                    </h1>
                    <p className='my-2 text-sm dark:text-gray-200'>
                      Continuing as{' '}
                      <span className='font-bold'>{user?.email}</span>{' '}
                      <button
                        className='text-indigo-500 hover:underline focus:underline focus:outline-none'
                        aria-label='Sign out'
                        onClick={() => supabase.auth.signOut()}
                      >
                        (not you?)
                      </button>
                    </p>
                    <div className='my-2'>
                      <form onSubmit={handleSubmit}>
                        <label className='block mb-2'>
                          <div className='mb-1 text-left'>Your name:</div>
                          <input
                            type='text'
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                            className='block w-full text-sm rounded-md border-gray-300 shadow-sm transition duration-75 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 focus:border-indigo-500 focus:ring-indigo-500'
                            placeholder='Jane Eyre'
                            maxLength={300}
                          />
                        </label>
                        {fullNameError && (
                          <div className='text-sm text-red-600'>
                            {fullNameError}
                          </div>
                        )}

                        <label className='block mb-2'>
                          <div className='mb-1 text-left'>Your username:</div>
                          <div className='flex rounded-md shadow-sm'>
                            <span className='inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 rounded-l-md border border-r-0 border-gray-300 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700'>
                              @
                            </span>
                            <input
                              type='text'
                              onChange={(e) => setUsername(e.target.value)}
                              value={username}
                              className='block w-full text-sm rounded-none rounded-r-md border-gray-300 transition duration-75 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 focus:border-indigo-500 focus:ring-indigo-500'
                              placeholder='janeausten'
                              maxLength={300}
                            />
                          </div>
                        </label>
                        {usernameError && (
                          <div className='text-sm text-red-600'>
                            {usernameError}
                          </div>
                        )}

                        <label className='block mb-2'>
                          <div className='mb-1 text-left'>Your avatar:</div>
                          <div className='flex'>
                            <Avatar
                              profile={profile}
                              firstLetter={'L'}
                              flip='w-8 h-8 text-sm'
                            />
                            <input
                              type='file'
                              className='focus-ring px-2 py-1 ml-2 text-sm font-medium rounded-md border border-gray-300'
                            />
                          </div>
                        </label>

                        <button
                          type='submit'
                          className='focus-ring inline-flex justify-center px-4 py-2 mt-2 w-full text-base font-medium text-white bg-indigo-500 rounded-md border border-transparent shadow-sm sm:w-auto sm:text-sm hover:bg-indigo-600'
                          aria-label='Done'
                        >
                          Done
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default NewUserModal;
