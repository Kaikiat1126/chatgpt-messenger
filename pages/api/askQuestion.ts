// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryAPI';
import admin from 'firebase-admin';
import { adminDB } from '../../lib/firebaseAdmin';

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
  const respone = await query(prompt, chatID, model)

  const message: Message = {
    text: respone || "ChatGPT was unable to find an answer",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
        _id: 'ChatGPT',
        name: 'ChatGPT',
        avatar: 'https://links.papareact.com/89k',
    },
  }

  await adminDB.collection('users').doc(session?.user?.email).collection('chats').doc(chatID).collection('messages').add(message);

  res.status(200).json({ answer: message.text })
}
