import { NextApiRequest, NextApiResponse } from 'next';

interface IdNextApiResponse extends NextApiRequest {
  query: {
    yourId?: string
    id?: string
  }
}
export default function getById(req: IdNextApiResponse, res: NextApiResponse) {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(req.query.id)
  res.json({ yourId: req.query.id })
}
