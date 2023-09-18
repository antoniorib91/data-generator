import { NextApiResponse, NextApiRequest } from 'next'


export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<string>
  // res: NextApiResponse<Person[]>
) {
  return res.status(200);
  // return res.status(200).json(people)
}