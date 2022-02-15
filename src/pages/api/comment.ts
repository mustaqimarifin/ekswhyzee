//import { CommentType } from 'threads/utils/types';
import { NextApiRequest, NextApiResponse } from 'next';

import { definitions } from '@/comments/types/supabase';
import supabase from '@/comments/utils/supaPublic';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { data: comments, error } = await supabase
      .from<definitions['comments']>('comments')
      .select('*')
      .filter('slug', 'eq', req.query.slug)
      .order('createdAt', { ascending: false });

    if (comments) {
      return res.status(200).json(comments);
    }
    if (error)
      return res.status(400).json({
        message: 'Unsupported Request',
      });
  }
  const session = supabase.auth.session();
  const { slug, text, parentId } = req.body;
  const newComment = {
    authorId: session?.user?.id,
    text,
    parentId: parentId || null,
    slug,
  };

  if (req.method === 'POST') {
    const { data: comment, error } = await supabase
      .from<definitions['comments']>('comments')
      .insert([newComment])
      .single();

    if (comment) {
      return res.status(200).json(comment);
    }
    if (error)
      return res.status(400).json({
        message: `Comment has wandered into the abyss`,
      });
  }
}
