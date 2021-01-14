// import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';
import { Event } from '../../../types';

// const prisma = new PrismaClient()

const events: Event[] = [
  {
    title: 'HackWeek Hackathon',
    type: 'hackathon',
    tags: ['hackathon', 'for youth'],
    excerpt: 'abc',
    description: 'sdda',
    slug: 'slug',
  },
];

const handle = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // const events = await prisma.event.findMany()
  res.json(events);
};

export default handle;
