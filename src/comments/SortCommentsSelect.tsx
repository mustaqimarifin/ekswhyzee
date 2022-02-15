//import React from 'react';
import { SortingBehavior, useComments } from './hooks/use-comments';

const SortCommentsSelect = (): JSX.Element => {
  const { sortingBehavior, setSortingBehavior } = useComments();

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>): void {
    setSortingBehavior(e.target.value as SortingBehavior);
  }
  return (
    <select
      className='focus-ring max-w-[5rem] my-2 text-xs text-gray-800 rounded-md border-gray-300 dark:text-gray-200 dark:bg-gray-800'
      onChange={handleSelect}
      value={sortingBehavior}
      aria-label='Sort votes by'
    >
      <option value='pathVotesRecent'>Top</option>
      <option value='pathMostRecent'>New</option>
      <option value='pathLeastRecent'>Old</option>
    </select>
  );
};

export default SortCommentsSelect;
