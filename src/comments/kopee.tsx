/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@supabase/supabase-js';
import { nanoid } from 'nanoid';

import { definitions } from './types/supabase';
import supabase from './utils/supaPublic';
export const getComments = async (
  slug: string | number | unknown[] | undefined
) => {
  //const [_comments, setComments] = useState([]);
  const { data: comments, error } = await supabase
    .from<definitions['comments_thread_with_user_vote']>(
      'comments_thread_with_user_vote'
    )
    .select(`*`)
    .range(0, 9)
    .eq('slug', slug)
    .order('id', { ascending: false });
  if (error) console.log('error', error);
  return comments;
};
/* export const getComments = async () => {
  return [
    {
      id: "1",
      body: "First comment",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Second comment",
      username: "John",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "First comment first child",
      username: "John",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Second comment second child",
      username: "John",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
}; */
/*   const addComment = async (bodyText) => {
    let body = bodyText.trim();
    if (body.length) {
      let { data: comment, error } = await supabase
        .from("comments")
        .insert({ body, user_id: user.id })
        .single();
      if (error) setError(error.message);
      else setComments([...comments, comment]);
    }
  }; */
export const createComment = async (
  text: string,
  parentId: string | null,
  slug: string,
  user: User | null,
  profile?: definitions['profiles'] | null
) => {
  const newComment = {
    id: nanoid(16),
    authorId: user?.id,
    name: profile?.full_name,
    image: profile?.avatar_url,
    text,
    parentId: parentId || null,
    slug,
  };
  const { data: comment } = await supabase
    .from('comments')
    .insert([newComment])
    .single();
  return comment;
};
/* {
    id: comment.id,
    text: comment.text,
    name: comment.name,
    image: comment.image,
    parentId: comment.parentId,
    createdAt: comment.createdAt.toISOString()
  };
}; */
/* export const updateComment = async (text) => {
  return { text };
}; */
export const deleteComment = async (commentId: any) => {
  try {
    await supabase.from('comments').delete().eq('id', commentId);
    return {};
  } catch (error) {
    console.log('error', error);
  }
};
