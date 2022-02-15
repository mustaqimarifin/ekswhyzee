// import clsx from 'classnames';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { definitions } from '../comments/types/supabase';

interface Props {
  comment?: definitions['comments'] | null;
  profile?: definitions['profiles'] | null;
  flip?: string;
  isDeleted?: boolean;
  firstLetter?: string;
}
const Avatar = ({
  comment,
  profile,
  flip = 'w-7 h-7 text-sm ',
  isDeleted,
  firstLetter,
}: Props): JSX.Element => {
  //const flip = 'w-7 h-7 text-sm';
  //const { comment, profile, isDeleted, firstLetter } = props;
  if (isDeleted) {
    return (
      <div
        className={clsx(
          'bg-gray-500 rounded-full border border-white shadow-sm',
          flip
        )}
      ></div>
    );
  }

  if (firstLetter) {
    return (
      <div
        className={clsx(
          'flex justify-center items-center font-light text-white capitalize bg-indigo-600 rounded-full border border-white shadow-sm',
          flip
        )}
      >
        {firstLetter}
      </div>
    );
  }
  if (comment?.image) {
    return (
      <Image
        src={comment.image}
        className={clsx(
          'object-cover rounded-full border border-gray-600 shadow-sm dark:border-white',
          flip
        )}
        alt={comment.name}
        width={32}
        height={32}
      />
    );
  }
  if (profile?.avatar_url) {
    return (
      <Image
        src={profile.avatar_url}
        className={clsx(
          'object-cover rounded-full border border-gray-600 shadow-lg dark:border-white',
          flip
        )}
        alt={profile?.full_name}
        width={32}
        height={32}
      />
    );
  }

  if (profile?.full_name) {
    return (
      <div
        className={clsx(
          'flex justify-center items-center font-light text-white capitalize bg-indigo-600 rounded-full border border-white shadow-sm',
          flip
        )}
      >
        {profile?.full_name?.[0]}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'skeleton flex justify-center items-center font-light text-white capitalize bg-indigo-600 rounded-full border border-white shadow-sm',
        flip
      )}
    ></div>
  );
};

export default Avatar;
