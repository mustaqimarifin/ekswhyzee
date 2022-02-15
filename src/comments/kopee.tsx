/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@supabase/supabase-js';
import { nanoid } from 'nanoid';

import supabase from './utils/supaPublic';
export const getComments = async (slug: any) => {
  //const [_comments, setComments] = useState([]);
  const { data: comments, error } = await supabase
    .from('comments_thread_with_user_vote')
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
  text: any,
  parentId = null,
  slug: any,
  user: User | null,
  profile:
    | {
        id: string;
        updated_at?: string | undefined;
        username?: string | undefined;
        full_name?: string | undefined;
        avatar_url?: string | undefined;
        email?: string | undefined;
      }
    | null
    | undefined
) => {
  const newComment = {
    id: nanoid(16),
    authorId: user?.id,
    name: profile?.full_name,
    image: profile?.avatar_url,
    text: text,
    //cnp_id: cnp_id ?? rootId,
    parentId: parentId || null,
    slug: slug,
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
