import type { NextApiRequest, NextApiResponse } from 'next';

import db from '@/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const totalViews = await db.postMeta.aggregate({
      _sum: {
        views: true,
      },
    });

    return res.status(200).json({ views: totalViews._sum?.views?.toString() });
  } catch (e) {
    return res.status(500).json({ e });
  }
}
