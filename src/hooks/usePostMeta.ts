import { useCallback } from 'react';
import useSWR, { mutate } from 'swr';

const LIKE = '/api/likes/';
const VIEW = '/api/views/';

type Like = {
  likes: number | null;
  userLikes: number | null;
  onLike?: void;
};

type View = {
  views: number | null;
  onView?: void;
};

async function getPostLikes(slug: string): Promise<Like> {
  const res = await fetch(LIKE + slug);
  return res.json();
}

async function getPostViews(slug: string): Promise<View> {
  const res = await fetch(VIEW + slug);
  return res.json();
}

async function updatePostLikes(slug: string): Promise<Like> {
  const res = await fetch(LIKE + slug, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();

  return {
    likes: data.likes,
    userLikes: data.userLikes,
  };
}
async function updatePostViews(slug: string): Promise<View> {
  const res = await fetch(VIEW + slug, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();

  return {
    views: data?.views,
  };
}

export const usePostViews = (slug: string) => {
  const { data } = useSWR(
    slug ? `${slug}/views` : null,
    () => getPostViews(slug),
    {
      revalidateOnFocus: false,
    }
  );

  const onView = useCallback(() => {
    mutate(`${slug}/views`, updatePostViews(slug));
  }, [slug]);

  return { views: data?.views, onView };
};

export const usePostLikes = (slug: string) => {
  const { data, error } = useSWR(
    slug ? `${slug}/likes` : null,
    () => getPostLikes(slug),
    {
      revalidateOnFocus: false,
    }
  );

  const onLike = useCallback(() => {
    mutate(`${slug}/likes`, updatePostLikes(slug), false);
  }, [slug]);

  return {
    likes: data?.likes ?? 0,
    userLikes: data?.userLikes ?? 0,
    isLoading: !error && !data,
    onLike,
  };
};
