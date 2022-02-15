/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line
/* jsx-a11y/no-static-element-interactions */
//import CommentForm from './CommentForm';
import clsx from 'clsx';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { useUser } from './hooks/use-user';
import Plus from './icons/Plus';
import VoteButtons from './VoteButtons';

dayjs.extend(relativeTime, {
  rounding: Math.floor,
});
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault(dayjs.tz.guess());
// import type { CommentType } from 'comments/types/interface';
import { useEffect, useRef, useState } from 'react';

import Avatar from './Avatar';
import CommentForm from './CommentForm';
const MAX_LINES = 10;
const LINE_HEIGHT = 24; // in px
const MAX_HEIGHT = MAX_LINES * LINE_HEIGHT;

const ReplyForm = ({
  placeholder,
  handleSubmit,
  submitLabel,
  comment,
  handleResetCallback,
}) => {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={clsx(
        'my-1 -mr-1 transition duration-1000 ease-in-out transform -translate-x-1',
        {
          hidden,
        }
      )}
    >
      <CommentForm
        parentId={comment.id}
        autofocus={true}
        handleResetCallback={handleResetCallback}
        submitLabel={submitLabel}
        placeholder={placeholder}
        handleSubmit={handleSubmit}
        hideEarlyCallback={() => setHidden(true)}
      />
    </div>
  );
};
const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  deleteComment,
  addComment,
  parentId = null,
  authorId,
  pageIndex,
  highlight = false,
  parent,
}) => {
  /*   const isReplying =
      activeComment &&
      activeComment.id === comment.id &&
      activeComment.type === 'replying'; */
  const { user } = useUser();
  const canDelete = authorId === comment?.authorId && replies.length === 0;
  const canReply = Boolean(authorId);
  const replyId = parentId ? parentId : comment.id;
  const [hidden, setHidden] = useState(false);
  const [isOverflowExpanded, setIsOverflowExpanded] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  const [showReplyForm, setShowReplyForm] = useState(false);
  const textRef = useRef(null);
  const isAdmin = false;
  useEffect(() => {
    if (textRef && textRef.current) {
      const el = textRef.current;
      if (el.scrollHeight > MAX_HEIGHT) {
        setIsOverflow(true);
      }
    }
  }, []);
  /*   const deleteComment = async (commentId) => {
      if (window.confirm('Are you sure you want to remove comment?')) {
        try {
          await supabase.from('comments').delete().eq('id', comment.id);
          setComments(comments.filter((x) => x.id != comment.id));
        } catch (error) {
          console.log('error', error);
        }
        return {};
      }
    }; */
  /*   async function handleApprove() {
      const { data } = await supabase
        .from('comments')
        .update({
          isApproved: true
        })
        .eq('id', comment.id);
      // mutateComments(comment.mutateKey);
    }
    async function handleDeny() {
      const { data } = await supabase
        .from('comments')
        .update({
          isPublished: false,
          isApproved: false
        })
        .eq('id', comment.id);
    } */
  async function handlePin() {
    return;
  }
  return (
    <div key={comment.id}>
      <div className='tweet flex flex-col p-3 mx-0 my-3 w-full bg-white rounded-md border border-gray-400 transition duration-500 ease-in-out transform dark:bg-zinc-900 dark:border-gray-800'>
        {!hidden && parent && (
          <div className='comment-grid grid gap-x-2'>
            <div className='relative w-6'>
              <div className='box-border absolute bottom-0 -right-1 col-start-1 w-2/3 h-1/2 rounded-tl border-t-2 border-l-2 border-pink-700' />
            </div>
            <div className='flex col-start-2 items-center mb-1 leading-none transform translate-y-1'>
              <button
                className='focus-ring text-xs text-gray-500 cursor-pointer hover:underline focus:outline-none active:underline'
                aria-label={`View comment by ${parent.name}`}
              >
                @{parent.name}:
              </button>
              <div className='focus-ring line-clamp-1 ml-1 text-xs text-gray-800 cursor-pointer hover:text-gray-400 focus:outline-none active:text-gray-400'>
                {parent.text}
              </div>
            </div>
          </div>
        )}
        <div
          className={clsx('comment-grid grid gap-x-3', {
            'gap-y-2': !hidden,
          })}
        >
          {highlight && (
            <>
              <div className='col-start-1 col-end-3 row-start-1 row-end-3 -m-1 bg-indigo-700 rounded opacity-5 pointer-events-none dark:bg-indigo-50 dark:border-gray-100' />
            </>
          )}
          {!hidden ? (
            <>
              <div className='grid overflow-hidden col-start-1 row-start-1 place-items-center'>
                <Avatar comment={comment} isDeleted={comment.isDeleted} />
              </div>
              <div className='row-span-auto flex col-start-1 col-end-2 row-start-2 row-end-5 justify-center px-1 my-1'>
                <button
                  className={clsx(
                    'focus-ring group flex flex-grow justify-center mb-1 border-none',
                    hidden
                  )}
                  onClick={() => setHidden(true)}
                  aria-label={`Collapse comment by ${comment.author}`}
                >
                  <div
                    className={clsx('w-px h-full', {
                      'bg-gray-200 group-hover:bg-gray-500 group-active:bg-gray-500 dark:bg-gray-600 dark:group-hover:bg-gray-400 dark:group-active:bg-gray-400':
                        !highlight,
                      'bg-gray-300 group-hover:bg-gray-600 group-active:bg-gray-600 dark:bg-gray-600 dark:group-hover:bg-gray-400 dark:group-active:bg-gray-400':
                        highlight,
                    })}
                  />
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => setHidden(false)}
              className={
                'row-start-1 col-start-1 grid place-items-center focus-ring w-7 h-7'
              }
              aria-label={`Expand comment by ${comment.author}`}
            >
              <Plus className='w-4 h-4 text-gray-500' />
            </button>
          )}
          <div className='col-start-2 row-start-1 justify-around self-center'>
            <div className='flex flex-grow justify-items-stretch'>
              <span
                className={clsx(
                  'font-semibold text-gray-700 dark:text-emerald-300',
                  {
                    'text-xs ': !hidden,
                    'text-xs': hidden,
                  }
                )}
              >
                {!comment.isDeleted ? comment.name : <>[Deleted]</>}{' '}
              </span>

              <span
                className='justify-self-auto ml-auto text-xs font-semibold text-pink-400 dark:text-pink-200'
                suppressHydrationWarning
              >
                {dayjs().diff(comment.createdAt, 'seconds', true) < 30
                  ? 'just now'
                  : dayjs(comment.createdAt).fromNow()}
                {/* dayjs(comment.createdAt).format("h:m a | MMM D, YY")} */}
              </span>
              {isAdmin && (
                <button
                  className='focus-ring flex flex-row items-center ml-5 text-xs leading-none text-gray-600 border-none dark:text-gray-400'
                  onClick={handlePin}
                  aria-label={`Pin comment by ${comment.author}`}
                >
                  Pin comment
                </button>
              )}
            </div>
          </div>

          <div className={clsx('col-start-2 row-start-2', { hidden })}>
            <section
              className={clsx(
                'pb-2 text-sm font-light leading-6 text-gray-700 dark:text-gray-50',
                {
                  'line-clamp-10': !isOverflowExpanded,
                  hidden,
                }
              )}
              ref={textRef}
            >
              <div className='prose text-zinc-800 text-sm font-medium dark:text-gray-100'>
                {comment.text}
              </div>
            </section>

            {isOverflow && (
              <button
                className='focus-ring text-sm leading-none text-indigo-700 border border-transparent dark:text-indigo-400 hover:underline focus:underline'
                onClick={() => setIsOverflowExpanded(!isOverflowExpanded)}
                aria-label={`Pin comment by ${comment.name}`}
              >
                {isOverflowExpanded ? (
                  <span>Show less</span>
                ) : (
                  <span>Read more</span>
                )}
              </button>
            )}

            {canReply && (
              <div className='grid grid-flow-col auto-cols-min gap-x-3 justify-start transform'>
                <VoteButtons comment={comment} />

                <span
                  className='flex items-center text-xs text-gray-600 border-none dark:text-gray-100'
                  onClick={() => setShowReplyForm(!showReplyForm)}
                  aria-label={
                    showReplyForm
                      ? `Hide reply form`
                      : `Reply to comment by ${comment.author}`
                  }
                >
                  {showReplyForm ? (
                    <button className='text-gray-500 dark:text-gray-200 hover:text-red-300'>
                      Cancel&nbsp;&nbsp;
                    </button>
                  ) : (
                    <button className='text-gray-500 dark:text-gray-200 hover:text-indigo-300'>
                      Reply&nbsp;&nbsp;
                    </button>
                  )}

                  {canDelete && (
                    <button
                      className='flex flex-row items-center text-xs text-gray-500 border-none dark:text-gray-200 hover:text-yellow-300'
                      onClick={() => deleteComment(comment.id)}
                      aria-label={`Delete comment by ${comment.name}`}
                    >
                      &nbsp;Delete
                    </button>
                  )}
                </span>
              </div>
            )}
          </div>

          <div
            className={clsx(
              'row-span-2 row-start-3 -mr-2 rounded-md transform -translate-x-2',
              { hidden }
            )}
          >
            {showReplyForm && (
              <div className='divide-pink-200'>
                <ReplyForm
                  comment={comment}
                  submitLabel='Reply'
                  placeholder={`Reply to comment by ${comment.name}`}
                  handleSubmit={(text) => addComment(text, replyId)}
                  handleResetCallback={() => setShowReplyForm(false)}
                />
              </div>
            )}
            {replies.length > 0 && (
              <div
                className={clsx(
                  'bg-opacity-70 rounded-md dark:bg-neutral-900 '
                )}
              >
                {replies.map((reply) => (
                  <Comment
                    comment={reply}
                    key={reply.id}
                    setActiveComment={setActiveComment}
                    activeComment={activeComment}
                    deleteComment={deleteComment}
                    addComment={addComment}
                    parentId={comment.id}
                    replies={[]}
                    pageIndex={pageIndex}
                    highlight={comment.highlight}
                    authorId={user?.id}
                    parent={undefined}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
