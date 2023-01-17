import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  lorem: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await (await fetch('https://textgen.cqd.tw?format=plain&size=300')).text()
  res.status(200).json({ lorem: data })
}
