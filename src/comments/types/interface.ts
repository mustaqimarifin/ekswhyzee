/* eslint-disable @typescript-eslint/no-explicit-any */
import { definitions } from './supabase';

export interface CommentType {
  id: string;
  name: string;
  cn_id: number;
  cnp_id: number;
  combId: number;
  commentId: string;
  slug: string;
  text: string;
  authorId: string;
  parent: definitions['comments_thread_with_user_vote'];

  parentId?: string;
  createdAt: string;
  rootComment: CommentType;
  rootComments?: CommentType[];
  updatedAt: string;
  author: definitions['profiles'];
  isPinned: boolean;
  repliesCount: number;
  replies?: CommentType[];
  comment?: CommentType;
  live: boolean;
  depth: number;
  pages: CommentType[][];
  justAuthored?: boolean;
  continueThread?: boolean;
  highlight?: boolean;
  isDeleted: boolean;
  isApproved: boolean;
  totalChildrenCount?: number;
  pageIndex?: number;
  path: number[];
  votes: number;
  upvotes: number;
  downvotes: number;
  userVoteValue: number;
  pathVotesRecent: number[];
  pathLeastRecent: number[];
  pathMostRecent: number[];
}

export interface User {
  handle?: string;
  name?: string;
  role?: any;
  id: string;
  image?: string;
}

export type Like = Partial<definitions['likes']>;
