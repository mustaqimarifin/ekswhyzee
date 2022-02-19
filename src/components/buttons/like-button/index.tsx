import clsx from 'clsx';
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

// import useContentMeta from '@/hooks/useContentMeta';
// import LoadingSpinner from '@/components/LoadingSpinner';
import { LikeIconProps, One, Three, Two, Zero } from './icons';
type Props = {
  addLike: () => void;
  contentLikes: number;
  likesByUser: number;
  isLoading?: boolean;
};
export default function Confeteez({
  isLoading,
  likesByUser,
  contentLikes,
  addLike,
}: Props) {
  const { width, height } = useWindowSize();
  const [currentLikes, setCurrentLikes] = useState(likesByUser);
  const [initialLikes] = useState(contentLikes - likesByUser);
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
      className='button umami--click--like-button justify-center text-gray-700 dark:text-gray-50'
      onClick={(e) => {
        if (currentLikes < 3 && likesByUser <= 3) {
          setCurrentLikes((oldValue) => oldValue + 1);
          addLike();

          if (currentLikes === 2) {
            setClickCoordinates({ x: e.clientX, y: e.clientY });
          }
        }
      }}
    >
      {icons[currentLikes]}
      <div className='font-jet pt-6 font-black text-center text-gray-700 uppercase dark:text-gray-50'>
        <span>{initialLikes + currentLikes} likes </span>
      </div>
      {!isLoading && !!clickCoordinates && (
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
}
