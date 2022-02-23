/* eslint-disable @typescript-eslint/no-explicit-any */
import querystring from 'querystring';

import { Bookmark } from '@/types/frontmatters';
const client_id = '61e489fc670bc0df344862b0';
const client_secret = process.env.RAINDROP_SECRET;
const refresh_token = process.env.RAINDROP_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const TOKEN_ENDPOINT = 'https://raindrop.io/oauth/access_token';
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      client_id,
      client_secret,
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
  return response.json();
};

export const fetchBookmarks = async (page = 0) => {
  const bookmarks: Bookmark[] = [];
  const { access_token } = await getAccessToken();

  const req = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/0?perpage=50&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  const data = await req.json();
  bookmarks.push(
    ...data.items.map(({ link, title, cover, tags }: Bookmark) => ({
      link,
      title,
      cover,
      tags,
    }))
  );
  if (data.items.length === 50) {
    bookmarks.push(...(await fetchBookmarks(page + 1)));
  }
  return bookmarks;
};
