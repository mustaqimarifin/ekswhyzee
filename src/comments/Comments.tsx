/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import Comment from './Comment';
import CommentForm from './CommentForm';
// import { useComments } from './hooks/use-comments';
import { useUser } from './hooks/use-user';
import {
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  getComments as getCommentsApi,
} from './kopee';

const Comments = (props: { slug: any }) => {
  const { slug } = props;
  const { user, profile } = useUser();
  const [comments, setComments] = useState<any[]>([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = comments.filter((comment) => comment.parentId === null);
  const getReplies = (commentId: any) =>
    comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  const addComment = (text: string, parentId = null) => {
    createCommentApi(text, parentId, slug, user, profile).then((comment) => {
      setComments([comment, ...comments]);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId: any) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentApi(commentId).then(() => {
        const updatedComment = comments.filter(
          (comment) => comment.id !== commentId
        );
        setComments(updatedComment);
      });
    }
  };

  useEffect(() => {
    getCommentsApi(slug).then((data: any) => setComments(data));
  }, [slug]);

  return (
    <div id='supadupa' className='p-2 mt-5 w-full'>
      <h3 className='font-gt mb-5 w-full text-2xl text-center'>Comments</h3>
      <CommentForm
        submitLabel='Post'
        placeholder='REPLYYY'
        /* {`Reply to comment by ${comments.filter((comment) => {
            comment.author;
          })}`} */
        handleSubmit={addComment}
        handleResetCallback={undefined}
        hideEarlyCallback={undefined}
        autofocus={false}
      />
      <div className='overscroll-contain mt-2'>
        <div className='comments-container'>
          {rootComments.map((x) => (
            <Comment
              key={x.id}
              comment={x}
              replies={getReplies(x.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              authorId={user?.id}
              pageIndex={undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;

/*   const addComment = async (text, parentId = null) => {
    const newComment = {
      authorId: user?.id,
      name: profile?.full_name,
      image: profile?.avatar_url,
      text: text,
      parentId: parentId || null,
      slug: slug
    };
    const { body } = await supabase.from('comments').insert([newComment]);
    setComments([body, ...comments]); */
//setActiveComment(null);
//setActiveComment(null);

/*   const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedComment = comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, body: text };
        }
        return comment;
      });
      setComments(updatedComment);
      setActiveComment(null);
    });
  }; */

/* const addComment = async (text, parentId = null, name, image) => {
    const user = supabase.auth.user();
    const session = supabase.auth.session();

    let newComment = {
      authorId: user?.id,
      name: session?.user?.user_metadata?.full_name,
      image: session?.user?.user_metadata?.avatar_url,
      text: text,
      parentId: parentId || null,
    };
    try {
      let { body } = await supabase
        .from("comments")
        .insert([newComment])
        .single();
      setComments(body);
  } catch (error) {
      console.log("error", error);
    }
    return body;

  };

  /*   const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedComment = comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, text };
        }
        return comment;
      });
      setComments(updatedComment);
      setActiveComment(null);
    });
  }; */
/* 
  const deleteComment = async (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      try {
        await supabase.from("comments").delete().eq("id", commentId);
        setComments(comments.filter((x) => x.id != commentId));
      } catch (error) {
        console.log("error", error);
      }
      return {};
    }
  }; */

/*   useEffect(() => {
    fetchComments();
  }, []);
  const fetchComments = async () => {
    let { data: comments, error } = await supabase
      .from("comment_with_author")
      .select("*")
      .order("id", { ascending: false });
    if (error) console.log("error", error);
    else setComments(comments);
  };  */

/* return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {xs.map((x) => (
          <Comment
            key={x.id}
            comment={x}
            replies={getReplies(x.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            authorId={x?.authorId}
          />
        ))}
      </div>
    </div>
  );
};

export default Rawmen;
 */
