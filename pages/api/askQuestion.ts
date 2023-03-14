// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { prompt, chatID, model, session} = req.body;

  if(!prompt){
    res.status(400).json({ answer: "Provide a prompt" })
    return;
  }

  if(!chatID){
    res.status(400).json({ answer: "Provide a valid chat ID" })
    return;
  }

  //  ChatGPT query 
  //const respone = await query(prompt, chatID, model)

  
}
