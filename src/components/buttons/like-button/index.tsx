/* eslint-disable @typescript-eslint/no-unused-vars */

import clsx from 'clsx';
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

// import useContentMeta from '@/hooks/useContentMeta';
// import { usePostLikes } from '@/hooks/usePostMeta';
import { LikeIconProps, One, Three, Two, Zero } from './icons';
type Props = {
  onLike: () => void;
  likes: number;
  userLikes: number;
  isLoading?: boolean;
};

const LikeButton = ({ onLike, likes, userLikes, isLoading }: Props) => {
  const { width, height } = useWindowSize();
  const [currentLikes, setCurrentLikes] = useState(userLikes);
  const [initialLikes] = useState(likes - userLikes);
  const [clickCoordinates, setClickCoordinates] =
    useState<{ x: number; y: number }>();

  const iconProps: LikeIconProps = {
    color: 'text-indigo-700 dark:text-gray-50',
    mouthColor: 'text-pink-100 dark:text-gray-50 ',
    className: '',
  };

  const icons = [
    <Zero {...iconProps} className={clsx('color', 'mouthColor')} key={0} />,
    <One {...iconProps} key={1} />,
    <Two {...iconProps} key={2} />,
    <Three {...iconProps} key={3} />,
  ];

  return (
    <button
      aria-label='Like blog post'
      className='justify-center text-gray-700 dark:text-gray-50'
      onClick={(e) => {
        if (currentLikes < 3 && userLikes <= 3) {
          setCurrentLikes((oldValue) => oldValue + 1);
          onLike();

          if (currentLikes === 2) {
            setClickCoordinates({ x: e.clientX, y: e.clientY });
          }
        }
      }}
    >
      {icons[currentLikes]}
      <div className='font-jet pt-6 font-black text-center text-gray-700 dark:text-gray-50'>
        {initialLikes + currentLikes} likes
      </div>
      {!!clickCoordinates && (
        <Confetti
          numberOfPieces={100}
          recycle={false}
          width={width}
          height={height}
          style={{ position: 'fixed', inset: 0 }}
          gravity={0.8}
          confettiSource={{
            x: clickCoordinates.x,
            y: clickCoordinates.y,
            w: 10,
            h: 10,
          }}
        />
      )}
    </button>
  );
};

export default LikeButton;
